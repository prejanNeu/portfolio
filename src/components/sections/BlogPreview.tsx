import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import SectionHeader from "@/components/SectionHeader";
import styles from "./BlogPreview.module.css";

export default async function BlogPreview() {
  const posts = await getAllPosts();
  const featured = posts.slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section className="section" aria-labelledby="blog-preview-heading">
      <div className="container">
        <div className={styles.header}>
          <SectionHeader
            eyebrow="Writing"
            title="Recent posts"
          />
          <Link href="/blog" className="text-link">
            View all →
          </Link>
        </div>

        <ul className={styles.list} role="list">
          {featured.map((post) => (
            <li key={post.slug}>
              <article className={styles.card}>
                <div className={styles.meta}>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span>{post.readTime}</span>
                </div>
                <h3 className={styles.title}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className={styles.desc}>{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="text-link">
                  Read →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
