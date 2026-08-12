import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on Django backend development, API design, machine learning, and web engineering by Prejan Neupane.",
  alternates: {
    canonical: "https://prejanneupane.com.np/blog",
  },
  openGraph: {
    title: "Blog | Prejan Neupane",
    description:
      "Articles on Django backend development, API design, and web engineering.",
    url: "https://prejanneupane.com.np/blog",
  },
};

interface PageProps {
  searchParams: Promise<{ tag?: string }>;
}

export default async function BlogIndex({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const activeTag = resolvedSearchParams.tag;
  const posts = await getAllPosts();

  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort();

  const filteredPosts = activeTag
    ? posts.filter((post) => post.tags.includes(activeTag))
    : posts;

  return (
    <div className="blog-index-container">
      <div className="container blog-index">
        <header className="blog-header">
          <Link href="/" className="back-link">
            ← Home
          </Link>
          <h1 className="blog-title">Blog</h1>
          <p className="blog-subtitle">
            Notes on Django, APIs, and things I&apos;m learning along the way.
          </p>

          {allTags.length > 0 && (
            <nav className="tags-container" aria-label="Filter by tag">
              <Link
                href="/blog"
                className={`tag-filter ${!activeTag ? "active" : ""}`}
              >
                All
              </Link>
              {allTags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className={`tag-filter ${activeTag === tag ? "active" : ""}`}
                >
                  {tag}
                </Link>
              ))}
            </nav>
          )}
        </header>

        <div className="posts-list">
          {filteredPosts.length === 0 ? (
            <div className="no-posts">
              <h3>No posts found</h3>
              <p>Try removing the filter to see all articles.</p>
              <Link href="/blog" className="btn btn-primary" style={{ marginTop: "1rem" }}>
                Show all
              </Link>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <article key={post.slug} className="post-card">
                <div className="post-meta">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="post-card-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="post-card-desc">{post.description}</p>
                {post.tags.length > 0 && (
                  <div className="post-tags">
                    {post.tags.map((t) => (
                      <Link
                        key={t}
                        href={`/blog?tag=${t}`}
                        className="post-tag-item"
                      >
                        {t}
                      </Link>
                    ))}
                  </div>
                )}
                <Link href={`/blog/${post.slug}`} className="read-more-link">
                  Read article →
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
