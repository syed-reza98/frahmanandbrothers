import Link from 'next/link';
import Section from '@/components/Section';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Agricultural Guides & Resources – Frahman & Brothers',
  description: 'Expert guides on crop fertilization, seasonal calendars, and agricultural best practices for Bangladesh farmers.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Section title="Agricultural Guides & Resources" eyebrow="Knowledge Center">
        <div className="max-w-4xl mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Expert guides and resources to help you maximize crop yields with proper fertilization techniques
            and seasonal planning. All content is based on research and field experience across Bangladesh.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="card p-8 text-center">
            <p className="text-gray-600">
              Blog posts will be available soon. Check back later for agricultural guides and resources.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.slug} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                >
                  Read Full Guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        )}
      </Section>

      <Section title="Can't Find What You're Looking For?" eyebrow="Contact Us">
        <div className="card p-8 text-center bg-blue-50">
          <p className="text-lg text-gray-700 mb-4">
            Need specific fertilization advice for your crop or region?
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Our Experts
          </Link>
        </div>
      </Section>
    </>
  );
}
