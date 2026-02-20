// app/blog/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/lib/sanity';
import { urlForImage } from '@/lib/sanity-image';
import { Post } from '@/types/post.types';

export const metadata: Metadata = {
  title: 'Dental Blog | Expert Tips & Insights | Dharma Dental',
  description: 'Read our latest dental care tips, oral health guides, and expert insights from our experienced dental professionals.',
  openGraph: {
    title: 'Dental Blog | Dharma Dental',
    description: 'Expert dental care tips and insights from our team of professionals.',
    type: 'website',
  },
};

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  readTime,
  featured,
  categories,
  mainImage{
    asset->,
    alt
  },
  author->{
    name,
    title,
    slug,
    image{
      asset->,
      alt
    }
  }
}`;

async function getPosts(): Promise<Post[]> {
  try {
    return await client.fetch(POSTS_QUERY);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();
  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dental Health Blog
            </h1>
            <p className="text-xl text-blue-100">
              Expert insights, tips, and guides from our dental professionals to help you maintain a healthy, beautiful smile.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post) => (
              <FeaturedPostCard key={post._id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Brighter Smile?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and experience personalized dental care.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeaturedPostCard({ post }: { post: Post }) {
  const imageUrl = post.mainImage?.asset
    ? urlForImage(post.mainImage.asset).width(800).height(500).url()
    : null;

  return (
    <Link href={`/blog/${post.slug.current}`} className="group">
      <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        {imageUrl ? (
          <div className="relative h-64">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {post.featured && (
              <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </div>
            )}
          </div>
        ) : (
          <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <svg 
              className="w-20 h-20 text-blue-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            {post.featured && (
              <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </div>
            )}
          </div>
        )}
        <div className="p-6">
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2 mb-3">
              {post.categories.slice(0, 2).map((category: string) => (
                <span
                  key={category}
                  className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
          <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-2">
              {post.author?.image?.asset && (
                <Image
                  src={urlForImage(post.author.image.asset).width(40).height(40).url()}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <span className="font-medium text-gray-700">
                {post.author?.name || 'Dharma Dental'}
              </span>
            </div>
            {post.readTime && <span>{post.readTime} min read</span>}
          </div>
        </div>
      </article>
    </Link>
  );
}

function PostCard({ post }: { post: Post }) {
  const imageUrl = post.mainImage?.asset
    ? urlForImage(post.mainImage.asset).width(600).height(400).url()
    : null;

  return (
    <Link href={`/blog/${post.slug.current}`} className="group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
        {imageUrl ? (
          <div className="relative h-48">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <svg 
              className="w-16 h-16 text-blue-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
          </div>
        )}
        <div className="p-5 flex-1 flex flex-col">
          {post.categories && post.categories.length > 0 && (
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full w-fit mb-3">
              {post.categories[0]}
            </span>
          )}
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            {post.readTime && <span>{post.readTime} min read</span>}
          </div>
        </div>
      </article>
    </Link>
  );
}

// Enable ISR - revalidate every hour
export const revalidate = 60;