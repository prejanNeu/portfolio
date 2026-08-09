import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
  prevPost?: { slug: string; title: string } | null;
  nextPost?: { slug: string; title: string } | null;
}

const postsDirectory = path.join(process.cwd(), "src/content/posts");

// Create marked instance with syntax highlighting
const markedInstance = new Marked(
  markedHighlight({
    emptyLangClass: "hljs",
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);

function calculateReadTime(text: string): string {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Ensure the directory exists
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const filenames = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith(".md"))
      .map(async (filename) => {
        const slug = filename.replace(/\.md$/, "");
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        
        const { data, content } = matter(fileContents);
        const htmlContent = await markedInstance.parse(content);

        return {
          slug,
          title: data.title || "Untitled Post",
          description: data.description || "",
          date: data.date || "",
          readTime: data.readTime || calculateReadTime(content),
          tags: data.tags || [],
          content: htmlContent as string,
        };
      })
  );

  // Sort posts by date descending
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const htmlContent = await markedInstance.parse(content);

    const posts = await getAllPosts();
    const currentIndex = posts.findIndex((p) => p.slug === slug);
    if (currentIndex === -1) return null;

    const prevPost = currentIndex < posts.length - 1
      ? { slug: posts[currentIndex + 1].slug, title: posts[currentIndex + 1].title }
      : null;
      
    const nextPost = currentIndex > 0
      ? { slug: posts[currentIndex - 1].slug, title: posts[currentIndex - 1].title }
      : null;

    return {
      slug,
      title: data.title || "Untitled Post",
      description: data.description || "",
      date: data.date || "",
      readTime: data.readTime || calculateReadTime(content),
      tags: data.tags || [],
      content: htmlContent as string,
      prevPost,
      nextPost,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}
