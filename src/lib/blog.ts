import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

const postsDirectory = path.join(process.cwd(), "src/content/posts");

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
        const htmlContent = await marked.parse(content);

        return {
          slug,
          title: data.title || "Untitled Post",
          description: data.description || "",
          date: data.date || "",
          readTime: data.readTime || "5 min read",
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
    const htmlContent = await marked.parse(content);

    return {
      slug,
      title: data.title || "Untitled Post",
      description: data.description || "",
      date: data.date || "",
      readTime: data.readTime || "5 min read",
      tags: data.tags || [],
      content: htmlContent as string,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}
