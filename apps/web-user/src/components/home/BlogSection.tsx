'use client';

import Link from 'next/link';
import { blogPosts } from '@/constants/homeData';
import SectionHeader from '@/components/common/SectionHeader';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

export default function BlogSection() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="container">
        <SectionHeader 
          title="Tạp Chí Hành Trình" 
          subtitle="Khám phá những điểm đến tuyệt vời và kinh nghiệm du lịch cùng GoRide."
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`} 
              className="group flex flex-col overflow-hidden transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-luxury-lg shadow-soft-md group-hover:shadow-soft-lg transition-all duration-300">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-3 left-3 rounded-luxury bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary whitespace-nowrap">
                  {post.tag}
                </div>
              </div>
              
              <div className="flex flex-1 flex-col pt-6">
                <div className="flex items-center gap-2 text-xs font-medium text-rich-text/40 mb-3">
                   <Clock size={14} />
                   <span className="whitespace-nowrap">5 phút đọc</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-primary group-hover:text-cta transition-colors mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm font-medium text-rich-text/60 line-clamp-3 mb-4">
                  {post.description}
                </p>
                
                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-cta opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <span className="whitespace-nowrap">Đọc Thêm</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link 
            href="/blog" 
            className="luxury-btn-outline flex items-center gap-2 group whitespace-nowrap"
          >
            <BookOpen size={18} />
            <span>Khám Phá Tất Cả</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
