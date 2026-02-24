'use client';

// app/blog/[slug]/BlogPostClient.tsx
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Share2,
  Bookmark,
  User,
  ChevronRight,
  ThumbsUp,
  Facebook,
  Linkedin,
  Twitter,
  Sparkles,
  TrendingUp,
  Link as LinkIcon,
  Home,
} from 'lucide-react';
import { Post } from '@/types/post.types';
import { urlForImage } from '@/lib/sanity-image';

// ─── Types ────────────────────────────────────────────────────────────────────

type SerializedRelated = Post & { imageUrl: string | null };

interface Props {
  post: Post;
  mainImageUrl: string | null;
  authorImageUrl: string | null;
  relatedPosts: SerializedRelated[];
}

// ─── Reading Progress Bar ─────────────────────────────────────────────────────

function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}

// ─── Floating Action Buttons ──────────────────────────────────────────────────

function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const actions = [
    { icon: ThumbsUp, label: 'Like' },
    { icon: Share2, label: 'Share' },
    { icon: Bookmark, label: 'Save' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed bottom-8 right-8 z-50 flex flex-col gap-3"
        >
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={action.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={action.label}
                className="w-12 h-12 bg-white rounded-full shadow-2xl border border-slate-100 flex items-center justify-center text-slate-500 hover:text-yellow-500 transition-colors"
              >
                <Icon size={19} />
              </motion.button>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Portable Text Components ─────────────────────────────────────────────────

function buildPortableTextComponents(urlForImageFn: typeof urlForImage) {
  return {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset) return null;
        return (
          <div className="my-10 rounded-[2rem] overflow-hidden shadow-xl">
            <Image
              src={urlForImageFn(value.asset).width(800).url()}
              alt={value.alt || 'Article image'}
              width={800}
              height={450}
              className="w-full h-auto"
            />
            {value.alt && (
              <p className="text-sm text-slate-400 text-center mt-2 italic px-4 pb-3">
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
            className="text-yellow-600 hover:text-yellow-500 underline underline-offset-2"
          >
            {children}
          </a>
        );
      },
    },
    block: {
      h2: ({ children }: any) => (
        <h2 className="text-3xl font-black text-slate-900 mt-12 mb-5 leading-tight">
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4 leading-tight">
          {children}
        </h3>
      ),
      h4: ({ children }: any) => (
        <h4 className="text-xl font-bold text-slate-800 mt-8 mb-3">{children}</h4>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="my-12 p-10 bg-yellow-50 rounded-[2rem] border-l-8 border-yellow-400 relative overflow-hidden">
          <span className="absolute -top-4 -left-2 text-9xl text-yellow-100 font-black pointer-events-none select-none leading-none">
            "
          </span>
          <p className="relative z-10 text-2xl font-bold text-yellow-900 italic leading-snug">
            {children}
          </p>
        </blockquote>
      ),
      normal: ({ children }: any) => (
        <p className="text-lg text-slate-600 leading-relaxed mb-7">{children}</p>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc list-inside space-y-2 my-5 text-slate-600 text-lg">
          {children}
        </ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal list-inside space-y-2 my-5 text-slate-600 text-lg">
          {children}
        </ol>
      ),
    },
  };
}

// ─── Main Client Component ────────────────────────────────────────────────────

export default function BlogPostClient({
  post,
  mainImageUrl,
  authorImageUrl,
  relatedPosts,
}: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const portableTextComponents = buildPortableTextComponents(urlForImage);

  return (
    <div className="min-h-screen bg-[#fcfdfe] font-sans selection:bg-yellow-200 pt-5 lg:pt-18 text-slate-900">
      <ReadingProgress />
      <FloatingActions />

      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-yellow-400/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[800px] h-[800px] bg-indigo-400/5 rounded-full blur-[140px]" />
      </div>

      {/* ── TOP NAV / BREADCRUMB ── */}
      <nav className="relative z-50 max-w-7xl mx-auto px-6 pt-28 pb-4 lg:pt-36 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
        <Link href="/blog">
          <motion.span
            whileHover={{ x: -4 }}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-sm transition-colors"
          >
            <ArrowLeft size={17} /> Back to Blog
          </motion.span>
        </Link>

        {/* Breadcrumb — visible on all screen sizes */}
        <ol className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
          <li>
            <Link href="/" className="flex items-center gap-1 hover:text-yellow-500 transition-colors">
              <Home size={12} /> Home
            </Link>
          </li>
          <li><ChevronRight size={11} /></li>
          <li>
            <Link href="/blog" className="hover:text-yellow-500 transition-colors">
              Blog
            </Link>
          </li>
          <li><ChevronRight size={11} /></li>
          <li className="text-slate-900 truncate max-w-[180px] sm:max-w-[260px]">{post.title}</li>
        </ol>
      </nav>

      {/* ── HERO SECTION ── */}
      <header className="relative w-full py-10 lg:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center mb-12"
          >
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {post.categories.map((cat: string) => (
                  <span
                    key={cat}
                    className="px-4 py-1.5 bg-yellow-400/10 border border-yellow-400/30 text-yellow-700 text-[10px] font-black uppercase tracking-widest rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-950 leading-[1.1] mb-8 tracking-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-slate-500 max-w-2xl leading-relaxed mb-8">
                {post.excerpt}
              </p>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-slate-500 font-bold text-sm">
              {post.author && (
                <div className="flex items-center gap-3">
                  {authorImageUrl ? (
                    <Image
                      src={authorImageUrl}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-yellow-200"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <User size={18} />
                    </div>
                  )}
                  <Link
                    href={`/team/${post.author.slug?.current}`}
                    className="text-slate-900 hover:text-yellow-600 transition-colors"
                  >
                    {post.author.name}
                  </Link>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar size={17} className="text-yellow-500" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
              {post.readTime && (
                <div className="flex items-center gap-2">
                  <Clock size={17} className="text-yellow-500" />
                  <span>{post.readTime} Min Read</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-[380px] md:h-[580px] w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border-8 border-white"
          >
            {mainImageUrl ? (
              <Image
                src={mainImageUrl}
                alt={post.mainImage?.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center">
                <svg className="w-24 h-24 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-3">
              <div className="p-4 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 text-white flex items-center gap-3">
                <Sparkles size={22} className="text-yellow-300 animate-pulse" />
                <span className="font-bold text-sm">Expert Verified Content</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ── ARTICLE CONTENT ── */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-24">

        {/* Left: Social share sidebar */}
        <aside className="hidden lg:block lg:col-span-1 pt-8">
          <div className="sticky top-32 flex flex-col gap-5 items-center">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
              Share
            </p>
            {[
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Linkedin, label: 'LinkedIn' },
              { Icon: Twitter, label: 'Twitter' },
              { Icon: LinkIcon, label: 'Copy link' },
            ].map(({ Icon, label }) => (
              <motion.button
                key={label}
                whileHover={{ scale: 1.2 }}
                aria-label={label}
                className="text-slate-300 hover:text-yellow-500 transition-colors"
              >
                <Icon size={19} />
              </motion.button>
            ))}
          </div>
        </aside>

        {/* Middle: Main article body */}
        <div className="lg:col-span-8">
          <article
            ref={contentRef}
            className="bg-white/60 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-16 border border-white shadow-xl shadow-slate-200/40"
          >
            {/* Portable Text body */}
            <div className="prose prose-slate prose-lg max-w-none">
              {post.body && (
                <PortableText value={post.body} components={portableTextComponents} />
              )}
            </div>

            {/* Tags */}
            {post.categories && post.categories.length > 0 && (
              <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-3">
                {post.categories.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-slate-50 text-slate-500 font-bold text-xs rounded-xl hover:bg-yellow-50 hover:text-yellow-700 cursor-pointer transition-colors border border-slate-100"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author Bio Card */}
            {post.author && (
              <div className="mt-16 p-8 rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <User size={120} strokeWidth={1} />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                  {authorImageUrl ? (
                    <Image
                      src={authorImageUrl}
                      alt={post.author.name}
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white/10 ring-2 ring-yellow-400/30 shrink-0"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-white/40 shrink-0">
                      <User size={40} />
                    </div>
                  )}
                  <div>
                    <p className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-1">
                      About the Author
                    </p>
                    <h4 className="text-2xl font-black mb-1">{post.author.name}</h4>
                    {post.author.title && (
                      <p className="text-yellow-400/80 font-bold text-sm mb-4 tracking-wide">
                        {post.author.title}
                      </p>
                    )}
                    {post.author.shortBio && (
                      <p className="text-slate-400 leading-relaxed mb-6 max-w-lg text-sm">
                        {post.author.shortBio}
                      </p>
                    )}
                    <Link
                      href={`/team/${post.author.slug?.current}`}
                      className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white hover:text-yellow-400 transition-colors"
                    >
                      View Full Profile <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </article>
        </div>

        {/* Right: Sidebar */}
        <aside className="lg:col-span-3 space-y-10">

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h5 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <TrendingUp size={14} /> You May Also Like
              </h5>
              <div className="space-y-6">
                {relatedPosts.map((rp) => (
                  <Link key={rp._id} href={`/blog/${rp.slug.current}`}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="group cursor-pointer mb-6"
                    >
                      <div className="h-40 rounded-2xl overflow-hidden mb-3">
                        {rp.imageUrl ? (
                          <Image
                            src={rp.imageUrl}
                            alt={rp.mainImage?.alt || rp.title}
                            width={400}
                            height={160}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center">
                            <svg className="w-10 h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <h6 className="font-bold text-slate-900 leading-snug group-hover:text-yellow-600 transition-colors text-sm line-clamp-2">
                        {rp.title}
                      </h6>
                      {rp.publishedAt && (
                        <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                          <Calendar size={11} className="text-yellow-400" />
                          {new Date(rp.publishedAt).toLocaleDateString('en-US', {
                            month: 'short', day: 'numeric', year: 'numeric',
                          })}
                        </p>
                      )}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Quick CTA card */}
          <div className="p-8 rounded-[2rem] bg-yellow-400 shadow-xl shadow-yellow-200/60 sticky top-32">
            <h5 className="text-xl font-black text-slate-900 mb-2">Need a Consultation?</h5>
            <p className="text-slate-800 text-sm mb-6 leading-relaxed">
              Schedule a session with our team to discuss your personalised treatment plan.
            </p>
            <Link
              href="/contact"
              className="block w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-sm"
            >
              Book Now
            </Link>
          </div>
        </aside>
      </main>

      {/* ── FOOTER CTA ── */}
      <section className="bg-slate-950 py-24 px-6 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-yellow-400/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold tracking-widest uppercase mb-8">
            <Sparkles size={13} /> Your Smile Awaits
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400">
            Ready to Experience the <br /> Future of Dentistry?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Experience comprehensive, personalised dental care with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 font-black rounded-2xl shadow-xl shadow-yellow-400/20 hover:from-yellow-300 hover:to-orange-300 transition-all hover:scale-105 hover:shadow-yellow-400/40 text-sm"
            >
              Book Appointment <Sparkles size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/5 backdrop-blur-md text-white border border-white/10 font-black rounded-2xl hover:bg-white/10 transition-all text-sm"
            >
              Contact Concierge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}