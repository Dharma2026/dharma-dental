// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/lib/sanity';
import { urlForImage } from '@/lib/sanity-image';
import { Post, generateMetaTags } from '@/types/post.types';
import { PortableText } from '@portabletext/react';

interface Props {
  params: Promise<{ slug: string }>; // Updated for Next.js 15+
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  excerpt,
  publishedAt,
  readTime,
  categories,
  mainImage{
    asset->,
    alt
  },
  author->{
    _id,
    name,
    title,
    slug,
    image{
      asset->,
      alt
    },
    shortBio,
    specialization
  },
  body,
  seo{
    metaTitle,
    metaDescription,
    keywords,
    ogImage{
      asset->,
      alt
    },
    ogTitle,
    ogDescription,
    twitterCard,
    twitterTitle,
    twitterDescription,
    canonicalUrl,
    noIndex,
    noFollow
  }
}`;

const RELATED_POSTS_QUERY = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  readTime,
  mainImage{
    asset->,
    alt
  }
}`;

async function getPost(slug: string): Promise<Post | null> {
  try {
    return await client.fetch(POST_QUERY, { slug });
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

async function getRelatedPosts(slug: string): Promise<Post[]> {
  try {
    return await client.fetch(RELATED_POSTS_QUERY, { slug });
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // Await params for Next.js 15+
  
  if (!slug) {
    return {
      title: 'Post Not Found | Dharma Dental',
    };
  }

  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Dharma Dental',
    };
  }

  const metaTags = generateMetaTags(post);
  
  const mainImageUrl = post.mainImage?.asset
    ? urlForImage(post.mainImage.asset).width(1200).height(630).url()
    : '';

  const ogImageUrl = post.seo?.ogImage?.asset
    ? urlForImage(post.seo.ogImage.asset).width(1200).height(630).url()
    : mainImageUrl;

  return {
    title: `${metaTags.title} | Dharma Dental`,
    description: metaTags.description,
    keywords: metaTags.keywords,
    authors: [{ name: post.author?.name || 'Dharma Dental' }],
    
    openGraph: {
      title: metaTags.openGraph.title,
      description: metaTags.openGraph.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      images: ogImageUrl ? [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.seo?.ogImage?.alt || post.mainImage?.alt || metaTags.title,
        },
      ] : [],
    },

    twitter: {
      card: metaTags.twitter.card,
      title: metaTags.twitter.title,
      description: metaTags.twitter.description,
      images: ogImageUrl ? [ogImageUrl] : [],
    },

    robots: {
      index: metaTags.robots.index,
      follow: metaTags.robots.follow,
    },

    ...(metaTags.canonical && { 
      alternates: {
        canonical: metaTags.canonical,
      },
    }),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params; // Await params for Next.js 15+
  
  if (!slug) {
    notFound();
  }

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug);

  // Log the post data to debug
  console.log('Post data:', {
    hasMainImage: !!post.mainImage,
    mainImageAsset: post.mainImage?.asset,
    mainImageRef: post.mainImage?.asset?._ref,
  });

  const mainImageUrl = post.mainImage?.asset
    ? urlForImage(post.mainImage.asset).width(1200).height(600).url()
    : null;

  console.log('Main image URL:', mainImageUrl);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-6">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li>/</li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium truncate max-w-xs">{post.title}</li>
        </ol>
      </nav>

      {/* Article Header */}
      <article className="container mx-auto px-4 pb-16">
        <header className="max-w-4xl mx-auto mb-8">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2 mb-4">
              {post.categories.map((category: string) => (
                <span
                  key={category}
                  className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            {post.author && (
              <div className="flex items-center gap-3">
                {post.author.image?.asset && (
                  <Image
                    src={urlForImage(post.author.image.asset).width(48).height(48).url()}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                )}
                <div>
                  <Link 
                    href={`/team/${post.author.slug.current}`}
                    className="font-semibold text-gray-900 hover:text-blue-600"
                  >
                    {post.author.name}
                    {post.author.title && `, ${post.author.title}`}
                  </Link>
                  {post.author.specialization && post.author.specialization.length > 0 && (
                    <p className="text-sm text-gray-500">{post.author.specialization[0]}</p>
                  )}
                </div>
              </div>
            )}
            <time dateTime={post.publishedAt} className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.readTime && (
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime} min read
              </span>
            )}
          </div>

          {/* Featured Image */}
          {mainImageUrl ? (
            <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src={mainImageUrl}
                alt={post.mainImage?.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="w-full h-96 rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-center">
                <svg 
                  className="w-24 h-24 text-blue-400 mx-auto mb-4" 
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
                <p className="text-blue-600 font-medium">No featured image</p>
              </div>
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-blue max-w-none">
            <PortableText 
              value={post.body} 
              components={portableTextComponents}
            />
          </div>
        </div>

        {/* Author Bio */}
        {post.author && post.author.shortBio && (
          <div className="max-w-3xl mx-auto mt-12 p-6 bg-gray-50 rounded-xl">
            <div className="flex gap-4">
              {post.author.image?.asset && (
                <Image
                  src={urlForImage(post.author.image.asset).width(80).height(80).url()}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              )}
              <div>
                <h3 className="text-xl font-bold mb-2">
                  About {post.author.name}
                </h3>
                <p className="text-gray-600 mb-3">{post.author.shortBio}</p>
                <Link
                  href={`/team/${post.author.slug.current}`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Profile →
                </Link>
              </div>
            </div>
          </div>
        )}
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <RelatedPostCard key={relatedPost._id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule Your Visit Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience comprehensive dental care with our expert team.
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

function RelatedPostCard({ post }: { post: any }) {
  const imageUrl = post.mainImage?.asset
    ? urlForImage(post.mainImage.asset).width(400).height(250).url()
    : null;

  return (
    <Link href={`/blog/${post.slug.current}`} className="group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
          <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
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
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" 
              />
            </svg>
          </div>
        )}
        <div className="p-5">
          <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </time>
            {post.readTime && <span>{post.readTime} min</span>}
          </div>
        </div>
      </article>
    </Link>
  );
}

// Custom Portable Text components
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null;
      return (
        <div className="my-8 rounded-lg overflow-hidden">
          <Image
            src={urlForImage(value.asset).width(800).url()}
            alt={value.alt || 'Blog image'}
            width={800}
            height={450}
            className="w-full h-auto"
          />
          {value.alt && (
            <p className="text-sm text-gray-500 text-center mt-2 italic">
              {value.alt}
            </p>
          )}
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a 
          href={value.href} 
          rel={rel}
          className="text-blue-600 hover:text-blue-700 underline"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-600 pl-4 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 my-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 my-4">{children}</ol>
    ),
  },
};

// Generate static params for all posts
export async function generateStaticParams() {
  try {
    const posts = await client.fetch<{ slug: { current: string } }[]>(
      `*[_type == "post" && defined(slug.current)]{ slug }`
    );
    
    return posts
      .filter(post => post.slug?.current)
      .map((post) => ({
        slug: post.slug.current,
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Enable ISR - revalidate every hour
export const revalidate = 3600;