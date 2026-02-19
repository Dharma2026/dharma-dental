// components/home/BlogSection.tsx  ← use this in your homepage
import { client } from '@/lib/sanity';
import { urlForImage } from '@/lib/sanity-image';
import { Post } from '@/types/post.types';
import BlogSectionClient from './BlogSectionClient';

// ─── Sanity Query ────────────────────────────────────────────────────────────

const HOME_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc)[0...3] {
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
    image{
      asset->,
      alt
    }
  }
}`;

async function getHomePosts(): Promise<Post[]> {
  try {
    return await client.fetch(HOME_POSTS_QUERY, {}, { next: { revalidate: 3600 } });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// ─── Server Component ─────────────────────────────────────────────────────────

export default async function BlogSection() {
  const posts = await getHomePosts();

  if (posts.length === 0) return null;

  // Resolve all image URLs on the server — pass plain strings to the client
  const imageUrls = posts.map((post) =>
    post.mainImage?.asset
      ? urlForImage(post.mainImage.asset).width(800).height(500).url()
      : null
  );

  return (
    <BlogSectionClient
      posts={posts}
      imageUrls={imageUrls}
    />
  );
}