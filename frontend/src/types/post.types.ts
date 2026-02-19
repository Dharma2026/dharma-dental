// Type definitions for Blog Post with SEO meta tags
// Use this in your frontend to properly type the data from Sanity

import { Doctor } from './doctor.types';

export interface PostSEO {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogImage?: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterTitle?: string;
  twitterDescription?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

export interface Post {
  _id: string;
  _type: 'post';
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: {
    current: string;
    _type: 'slug';
  };
  author?: Doctor; // Populated doctor object (when using author->)
  mainImage: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  categories?: string[];
  publishedAt: string;
  excerpt: string;
  body: any[]; // Portable Text blocks
  readTime?: number;
  featured: boolean;
  seo?: PostSEO;
}

// Helper function to generate meta tags from post data
export function generateMetaTags(post: Post) {
  const {
    title,
    excerpt,
    mainImage,
    seo,
  } = post;

  return {
    title: seo?.metaTitle || title,
    description: seo?.metaDescription || excerpt,
    keywords: seo?.keywords?.join(', ') || '',
    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle || title,
      description: seo?.ogDescription || seo?.metaDescription || excerpt,
      images: [
        {
          url: seo?.ogImage?.asset._ref || mainImage.asset._ref,
          alt: seo?.ogImage?.alt || mainImage.alt || title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: seo?.twitterCard || 'summary_large_image',
      title: seo?.twitterTitle || seo?.ogTitle || seo?.metaTitle || title,
      description: seo?.twitterDescription || seo?.ogDescription || seo?.metaDescription || excerpt,
    },
    robots: {
      index: !seo?.noIndex,
      follow: !seo?.noFollow,
    },
    ...(seo?.canonicalUrl && { canonical: seo.canonicalUrl }),
  };
}

// GROQ query to fetch posts with SEO data
export const postQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  author->,
  mainImage{
    asset->,
    alt
  },
  categories,
  publishedAt,
  excerpt,
  body,
  readTime,
  featured,
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

// GROQ query for single post by slug
export const singlePostQuery = (slug: string) => `*[_type == "post" && slug.current == "${slug}"][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  author->{
    _id,
    name,
    image,
    bio
  },
  mainImage{
    asset->,
    alt
  },
  categories,
  publishedAt,
  excerpt,
  body,
  readTime,
  featured,
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