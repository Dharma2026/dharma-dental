'use client';

// app/blog/BlogClientPage.tsx
import React, { useState, useMemo, forwardRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ArrowRight,
  Clock,
  Calendar,
  ChevronRight,
  Sparkles,
  Share2,
  Bookmark,
  TrendingUp,
  User,
  Home,
} from 'lucide-react';
import { Post } from '@/types/post.types';

// ─── Types ────────────────────────────────────────────────────────────────────

type SerializedPost = Post & {
  imageUrl: string | null;
  authorImageUrl: string | null;
};

// ─── Constants ────────────────────────────────────────────────────────────────

const CATEGORY_FILTER = 'All';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

// ─── BlogCard ─────────────────────────────────────────────────────────────────

const BlogCard = forwardRef<HTMLDivElement, { post: SerializedPost }>(({ post }, ref) => (
  <motion.div
    ref={ref}
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.4, ease: 'circOut' }}
    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all"
  >
    <Link href={`/blog/${post.slug.current}`} className="block">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        {post.imageUrl ? (
          <Image
            src={post.imageUrl}
            alt={post.mainImage?.alt || post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center">
            <svg className="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        {/* Category pill */}
        {post.categories && post.categories.length > 0 && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-yellow-600 shadow-sm">
              {post.categories[0]}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
          <span className="flex items-center gap-2 text-white font-bold text-sm">
            Read Article <ArrowRight size={15} />
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-slate-400 text-xs mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={13} />
            {formatDate(post.publishedAt)}
          </span>
          {post.readTime && (
            <span className="flex items-center gap-1">
              <Clock size={13} /> {post.readTime} min read
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors mb-2 leading-tight">
          {post.title}
        </h3>
        <p className="text-slate-500 text-sm line-clamp-2 mb-5">{post.excerpt}</p>

        {/* Author row */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            {post.authorImageUrl ? (
              <Image
                src={post.authorImageUrl}
                alt={post.author?.name || 'Author'}
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <User size={15} />
              </div>
            )}
            <span className="text-xs font-bold text-slate-700">
              {post.author?.name || 'Dharma Dental'}
            </span>
          </div>
          <div className="flex gap-2 text-slate-300" onClick={(e) => e.preventDefault()}>
            <button className="hover:text-yellow-500 transition-colors" aria-label="Bookmark">
              <Bookmark size={17} />
            </button>
            <button className="hover:text-yellow-500 transition-colors" aria-label="Share">
              <Share2 size={17} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
));

BlogCard.displayName = 'BlogCard';

// ─── FeaturedPostCard ──────────────────────────────────────────────────────────

function FeaturedPostCard({ post }: { post: SerializedPost }) {
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="group relative w-full h-[460px] rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200"
      >
        {post.imageUrl ? (
          <Image
            src={post.imageUrl}
            alt={post.mainImage?.alt || post.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-yellow-100" />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />

        <div className="relative h-full flex flex-col justify-end p-8 md:p-14 md:w-2/3">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-yellow-400 text-slate-900 rounded-full text-xs font-black uppercase tracking-widest">
              Featured
            </span>
            <span className="text-white/60 text-sm font-medium flex items-center gap-2">
              <TrendingUp size={15} /> Trending this week
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-yellow-300 transition-colors">
            {post.title}
          </h2>
          <p className="text-white/70 text-lg mb-8 line-clamp-2 max-w-xl">{post.excerpt}</p>

          <div className="flex items-center gap-6">
            <span className="px-7 py-3.5 bg-white text-slate-900 rounded-2xl font-bold group-hover:bg-yellow-400 transition-all flex items-center gap-2 text-sm">
              Read Full Story <ChevronRight size={17} />
            </span>
            <div className="flex items-center gap-3 text-white/80">
              {post.authorImageUrl ? (
                <Image
                  src={post.authorImageUrl}
                  alt={post.author?.name || 'Author'}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <User size={18} />
                </div>
              )}
              <div>
                <p className="text-sm font-bold">{post.author?.name || 'Dharma Dental'}</p>
                <p className="text-xs opacity-60">
                  {post.author?.title || 'Dental Professional'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function BlogClientPage({ posts }: { posts: SerializedPost[] }) {
  const [activeCategory, setActiveCategory] = useState(CATEGORY_FILTER);
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  // Collect unique categories from posts
  const categories = useMemo(() => {
    const cats = new Set<string>();
    posts.forEach((p) => p.categories?.forEach((c: string) => cats.add(c)));
    return ['All', ...Array.from(cats)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return regularPosts.filter((post) => {
      const matchesCategory =
        activeCategory === 'All' ||
        post.categories?.includes(activeCategory);
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(q) ||
        post.excerpt?.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [regularPosts, activeCategory, searchQuery]);

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] overflow-x-hidden font-sans pt-5 lg:pt-18 selection:bg-yellow-200">

      {/* Background ambience blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-yellow-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-400/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-12 lg:pt-36 lg:pb-24">

        {/* ── BREADCRUMBS ── */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 text-sm font-medium text-slate-400">
            <li>
              <Link href="/" className="flex items-center gap-1.5 hover:text-yellow-500 transition-colors">
                <Home size={14} />
                <span>Home</span>
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight size={13} className="text-slate-300" />
              <span className="text-slate-800 font-semibold">Blog</span>
            </li>
          </ol>
        </nav>

        {/* ── HERO HEADER ── */}
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-yellow-600 text-sm font-bold tracking-wide mb-6">
              <Sparkles size={15} className="animate-pulse" />
              <span>THE SMILE ARCHIVE</span>
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-5">
              Insights for a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-orange-400">
                Luminous Life.
              </span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              Expert advice, clinical breakthroughs, and lifestyle tips curated by our
              world-class dental concierge team.
            </p>
          </motion.div>

          {/* Featured post */}
          {featuredPost && <FeaturedPostCard post={featuredPost} />}
        </header>

        {/* ── STICKY NAV / FILTER ── */}
        <section className="sticky top-6 z-40 mb-12">
          <div className="bg-white/80 backdrop-blur-2xl border border-white/50 p-4 rounded-[2rem] shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 no-scrollbar w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-slate-900 text-white shadow-lg'
                      : 'text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={17}
              />
              <input
                type="text"
                placeholder="Search articles…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-5 py-3 bg-slate-100/50 rounded-2xl border border-slate-100 outline-none focus:border-yellow-400 focus:bg-white transition-all text-slate-700 font-medium text-sm"
              />
            </div>
          </div>
        </section>

        {/* ── POSTS GRID ── */}
        {filteredPosts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-24 mb-24">
            <p className="text-slate-400 text-lg">No articles found. Try a different search or category.</p>
          </div>
        )}

        {/* ── CTA SECTION ── */}
        <section className="relative overflow-hidden bg-slate-950 rounded-[2.5rem] py-16 px-8 text-center">
          {/* Subtle yellow glow behind heading */}
          <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-400/10 rounded-full blur-[80px] pointer-events-none" />
          {/* Decorative corner rings */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-yellow-400/10 pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full border border-yellow-400/10 pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold tracking-widest uppercase mb-6">
              <Sparkles size={13} /> Your Smile Awaits
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400">
              Ready for a Brighter Smile?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Schedule your appointment today and experience personalised, world-class dental care.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-9 py-4 rounded-2xl font-black text-sm hover:from-yellow-300 hover:to-orange-300 transition-all shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Book an Appointment <ChevronRight size={17} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}