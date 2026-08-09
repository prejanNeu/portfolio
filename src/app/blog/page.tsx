import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

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
      <section className="blog-index">
        <div className="blog-header">
          <Link href="/" className="back-link">
            ← Back to Portfolio
          </Link>
          <h1 className="blog-title">
            Writing & <em>Thoughts</em>
          </h1>
          <p className="blog-subtitle">
            Exploring Django backend optimization, machine learning architectures, and modern web systems.
          </p>

          <div className="tags-container">
            <Link
              href="/blog"
              className={`tag-filter ${!activeTag ? "active" : ""}`}
            >
              All Posts
            </Link>
            {allTags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${tag}`}
                className={`tag-filter ${activeTag === tag ? "active" : ""}`}
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>

        <div className="posts-list">
          {filteredPosts.length === 0 ? (
            <div className="no-posts">
              <h3>No articles found</h3>
              <p>Try clearing your filters to see other publications.</p>
              <Link href="/blog" className="btn-primary" style={{ marginTop: "1rem" }}>
                Clear Filters
              </Link>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <article key={post.slug} className="post-card">
                <div className="post-meta">
                  <span className="post-date">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="post-read-time">{post.readTime}</span>
                </div>
                <h2 className="post-card-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="post-card-desc">{post.description}</p>
                <div className="post-tags">
                  {post.tags.map((t) => (
                    <Link
                      key={t}
                      href={`/blog?tag=${t}`}
                      className="post-tag-item"
                    >
                      #{t}
                    </Link>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`} className="read-more-link">
                  Read Article →
                </Link>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
