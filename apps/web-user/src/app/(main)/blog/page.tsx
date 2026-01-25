'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/constants/homeData';
import SectionHeader from '@/components/common/SectionHeader';
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <main className="bg-background relative min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary-muted px-8">
        <img 
          src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=80&w=1200" 
          alt="GoRide Journey Journal" 
          className="absolute inset-0 h-full w-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-background" />
        
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/20 mb-6">
             <span className="flex h-2 w-2 rounded-full bg-cta animate-pulse" />
             <span className="text-xs font-semibold text-cta whitespace-nowrap">Tạp Chí Hành Trình</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Khám Phá & Trải Nghiệm
          </h1>
          <p className="mx-auto text-lg font-medium text-white/70 leading-relaxed">
            Nơi lưu giữ những câu chuyện hành trình, kinh nghiệm du lịch và phong cách sống tự do của cộng đồng GoRide.
          </p>
        </div>
      </section>

      <div className="container -mt-16 relative z-30 pb-20">
        {/* Featured Post - Full Width */}
        {currentPosts.length > 0 && (
          <Link 
            href={`/blog/${currentPosts[0].id}`}
            className="group block glass-card rounded-luxury-xl overflow-hidden shadow-soft-lg border-primary/20 mb-12 transition-all duration-300 hover:shadow-luxury-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-surface">
                <img 
                  src={currentPosts[0].image} 
                  alt={currentPosts[0].title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 rounded-luxury bg-gradient-to-r from-primary to-cta px-4 py-2 text-xs font-semibold text-white shadow-soft-md whitespace-nowrap">
                  Bài Viết Nổi Bật
                </div>
              </div>
              
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface text-xs font-semibold text-cta mb-4 w-fit">
                  {currentPosts[0].tag}
                </div>
                
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary group-hover:text-cta transition-colors mb-4 leading-tight">
                  {currentPosts[0].title}
                </h2>
                
                <p className="text-base font-medium text-rich-text/60 leading-relaxed mb-6 line-clamp-3">
                  {currentPosts[0].description}
                </p>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-rich-text/40">
                    <Clock size={16} />
                    <span className="whitespace-nowrap">5 phút đọc</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm font-semibold text-cta">
                    <span className="whitespace-nowrap">Đọc Ngay</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Blog Grid - 4 columns x 2 rows (skip first post as it's featured) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {currentPosts.slice(1).map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`} 
              className="group flex flex-col overflow-hidden rounded-luxury-lg bg-white border border-primary/10 transition-all duration-300 hover:shadow-luxury-xl hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-3 left-3 rounded-luxury bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary whitespace-nowrap">
                  {post.tag}
                </div>
              </div>
              
              <div className="flex flex-1 flex-col p-5">
                 <div className="flex items-center gap-2 text-xs font-medium text-rich-text/40 mb-3">
                    <Clock size={14} />
                    <span className="whitespace-nowrap">5 phút đọc</span>
                 </div>
                 <h3 className="font-heading text-lg font-bold text-primary group-hover:text-cta transition-colors mb-3 line-clamp-2">
                   {post.title}
                 </h3>
                 <p className="text-sm font-medium text-rich-text/60 line-clamp-2 mb-4">
                   {post.description}
                 </p>
                 
                 <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-cta opacity-0 group-hover:opacity-100 transition-all duration-300">
                   <span className="whitespace-nowrap">Đọc Thêm</span>
                   <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                 </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="h-12 w-12 flex items-center justify-center rounded-luxury border border-primary/10 text-primary transition-all hover:border-cta hover:text-cta disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-12 w-12 flex items-center justify-center rounded-luxury border font-semibold text-sm transition-all ${
                  currentPage === page
                    ? 'bg-cta border-cta text-white shadow-soft-md'
                    : 'border-primary/10 text-primary hover:border-cta hover:text-cta'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="h-12 w-12 flex items-center justify-center rounded-luxury border border-primary/10 text-primary transition-all hover:border-cta hover:text-cta disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
