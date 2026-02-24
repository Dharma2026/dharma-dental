// app/blog/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/lib/sanity';
import { urlForImage } from '@/lib/sanity-image';
import { Post } from '@/types/post.types';
import BlogClientPage from './BlogClientPage';

export const metadata: Metadata = {
  title: 'Dental Blog | Expert Tips & Insights | Dharma Dental',
  description:
    'Read our latest dental care tips, oral health guides, and expert insights from our experienced dental professionals.',
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

  // Serialize image URLs server-side so the client component stays pure
  const serializedPosts = posts.map((post) => ({
    ...post,
    imageUrl: post.mainImage?.asset
      ? urlForImage(post.mainImage.asset).width(800).height(500).url()
      : null,
    authorImageUrl:
      post.author?.image?.asset
        ? urlForImage(post.author.image.asset).width(80).height(80).url()
        : null,
  }));

  return <BlogClientPage posts={serializedPosts} />;
}

// Enable ISR - revalidate every hour
export const revalidate = 3600;