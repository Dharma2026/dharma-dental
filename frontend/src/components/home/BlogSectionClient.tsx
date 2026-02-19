'use client';

// components/home/BlogSectionClient.tsx
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Clock, CalendarDays, Sparkles } from 'lucide-react';
import { Post } from '@/types/post.types';

// ─── Animation Variants ───────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// ─── Helper ───────────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

// ─── Post Card ────────────────────────────────────────────────────────────────

function PostCard({ post, imageUrl }: { post: Post; imageUrl: string | null }) {
  return (
    <motion.div variants={cardVariants} className="h-full">
      <Link href={`/blog/${post.slug.current}`} className="group block h-full">
        <article className="flex flex-col h-full rounded-[2.5rem] overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 hover:-translate-y-2">

          {/* Image */}
          <div className="relative h-56 overflow-hidden bg-slate-100">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={post.mainImage?.alt || post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 bg-linear-to-br from-blue-100 to-slate-200" />
            )}

            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

            <div className="absolute top-4 left-4 flex gap-2">
              {post.featured && (
                <span className="flex items-center gap-1 px-2.5 py-1 bg-yellow-400 text-black rounded-full text-[9px] font-black uppercase tracking-widest shadow-md">
                  <Sparkles size={9} /> Featured
                </span>
              )}
              {post.categories && post.categories.length > 0 && (
                <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-slate-700 rounded-full text-[9px] font-black uppercase tracking-widest border border-slate-200/60">
                  {post.categories[0]}
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-7">
            <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug mb-3 group-hover:text-yellow-500 transition-colors duration-300 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-5">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
              <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                <span className="flex items-center gap-1">
                  <CalendarDays size={11} />
                  {formatDate(post.publishedAt)}
                </span>
                {post.readTime && (
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.readTime} min
                  </span>
                )}
              </div>
              <span className="flex items-center gap-1 text-yellow-500 text-[11px] font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                Read <ArrowRight size={12} />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

// ─── Exported Client Component ────────────────────────────────────────────────

interface BlogSectionClientProps {
  posts: Post[];
  imageUrls: (string | null)[];
}

export default function BlogSectionClient({ posts, imageUrls }: BlogSectionClientProps) {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="space-y-3">
              {/* Badge */}
              <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center self-start gap-2 px-5 py-2.5 border border-slate-900/10 rounded-full mb-8 bg-[#ffe586]"
                >
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900">
                    From Our Experts
                  </span>
                </motion.div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">
              Dental <span className="text-yellow-500 italic">Insights</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
          >
            View All Articles
            <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-yellow-400 group-hover:text-black flex items-center justify-center transition-all duration-300">
              <ArrowRight size={14} />
            </span>
          </Link>
        </motion.div>

        {/* 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {posts.map((post, i) => (
            <PostCard key={post._id} post={post} imageUrl={imageUrls[i]} />
          ))}
        </motion.div>

      

      </div>
    </section>
  );
}