// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/lib/sanity';
import { urlForImage } from '@/lib/sanity-image';
import { Post, generateMetaTags } from '@/types/post.types';
import BlogPostClient from './BlogPostClient';

interface Props {
  params: Promise<{ slug: string }>;
}

// ─── Queries ──────────────────────────────────────────────────────────────────

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
    ogImage{ asset->, alt },
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
  mainImage{ asset->, alt }
}`;

// ─── Data Fetching ────────────────────────────────────────────────────────────

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

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) return { title: 'Post Not Found | Dharma Dental' };

  const post = await getPost(slug);
  if (!post) return { title: 'Post Not Found | Dharma Dental' };

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
      images: ogImageUrl
        ? [{ url: ogImageUrl, width: 1200, height: 630, alt: post.mainImage?.alt || metaTags.title }]
        : [],
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
      alternates: { canonical: metaTags.canonical },
    }),
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  if (!slug) notFound();

  const post = await getPost(slug);
  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(slug);

  const mainImageUrl = post.mainImage?.asset
    ? urlForImage(post.mainImage.asset).width(1400).height(700).url()
    : null;

  const authorImageUrl = post.author?.image?.asset
    ? urlForImage(post.author.image.asset).width(200).height(200).url()
    : null;

  const serializedRelated = relatedPosts.map((rp) => ({
    ...rp,
    imageUrl: rp.mainImage?.asset
      ? urlForImage(rp.mainImage.asset).width(600).height(380).url()
      : null,
  }));

  return (
    <BlogPostClient
      post={post}
      mainImageUrl={mainImageUrl}
      authorImageUrl={authorImageUrl}
      relatedPosts={serializedRelated}
    />
  );
}

// ─── Static Params & ISR ──────────────────────────────────────────────────────

export async function generateStaticParams() {
  try {
    const posts = await client.fetch<{ slug: { current: string } }[]>(
      `*[_type == "post" && defined(slug.current)]{ slug }`
    );
    return posts
      .filter((p) => p.slug?.current)
      .map((p) => ({ slug: p.slug.current }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export const revalidate = 3600;