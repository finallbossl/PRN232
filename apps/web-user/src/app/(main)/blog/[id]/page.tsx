'use client';

import Link from 'next/link';
import { blogPosts } from '@/constants/homeData';
import { ArrowLeft, Clock, Share2, Heart, MessageSquare, ChevronRight, UserCircle2, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BlogDetailPage() {
  const post = blogPosts[0]; // Dummy selection for layout

  return (
    <main className="bg-surface relative min-h-screen pb-32">
      {/* 1. Immersive Editorial Hero */}
      <section className="relative h-[650px] flex items-center overflow-hidden bg-primary px-8">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-[15s] hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-surface" />
        
        <div className="container relative z-10">
          <div className="flex justify-center mb-12">
             <Link href="/blog" className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card border-white/20 shadow-luxury-xl text-white group">
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Journal</span>
             </Link>
          </div>

          <div className="text-center max-w-5xl mx-auto">
             <div className="flex items-center justify-center gap-6 mb-8 text-[10px] font-black uppercase tracking-[0.4em] text-cta">
                <span className="flex items-center gap-2"><Tag size={12}/> Adventure</span>
                <span className="h-1 w-1 rounded-full bg-cta/40" />
                <span className="flex items-center gap-2"><Clock size={12}/> Jan 25, 2026</span>
             </div>
             
             <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary tracking-tight leading-[0.95] mb-12">
               {post.title}
             </h1>
             
             <div className="flex items-center justify-center gap-6">
                <div className="h-14 w-14 rounded-full border-2 border-white/50 overflow-hidden shadow-luxury-xl">
                   <img src="https://i.pravatar.cc/100?img=12" alt="author" />
                </div>
                <div className="text-left">
                   <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Written By</p>
                   <p className="font-bold text-primary">Julian Alexander</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <div className="container -mt-24 relative z-30">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20">
          
          {/* Article Content */}
          <article className="lg:col-span-8">
             <div className="glass-card p-12 lg:p-20 rounded-[3.5rem] border-white/40 shadow-luxury-xl bg-white/60 backdrop-blur-3xl italic text-xl font-medium text-primary/60 leading-relaxed mb-16 px-16 border-l-4 border-l-cta">
                &quot;{post.description}&quot;
             </div>

             <div className="prose prose-slate prose-lg max-w-none px-4 lg:px-10">
                <h2 className="font-heading text-4xl font-bold text-primary mb-10 tracking-tight">Vẻ Đẹp Hoang Sơ Của Những Cung Đường Tự Do</h2>
                <p className="text-lg leading-[1.8] text-primary/50 mb-12 font-medium">
                  Hành trình khám phá bằng xe máy không chỉ là một chuyến đi, đó là sự giao thoa giữa con người và thiên nhiên. Tại GoRide Premium, chúng tôi tin rằng mỗi dặm đường đều chứa đựng một câu chuyện riêng, một linh hồn riêng. <br/><br/>
                  Khi cầm lái một chiếc mô tô cao cấp, mọi giới hạn dường như tan biến. Bạn không chỉ di chuyển, bạn đang thưởng thức từng làn gió, từng mét nhựa đường dưới bánh xe.
                </p>

                <div className="my-20 aspect-video rounded-[3rem] overflow-hidden shadow-luxury-xl border-8 border-white/40 group">
                   <img src="https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=1200" alt="Scenery" className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-105" />
                </div>

                <h3 className="font-heading text-3xl font-bold text-primary mb-8 tracking-tight">Kinh Nghiệm Chinh Phục Cung Đường Ven Biển</h3>
                <p className="text-lg leading-[1.8] text-primary/50 mb-12 font-medium">
                  Hãy đảm bảo bạn đã chuẩn bị đầy đủ trang bị bảo hộ đạt chuẩn. GoRide luôn cung cấp kèm 2 mũ bảo hiểm DOT để hành trình của bạn trọn vẹn an toàn nhất. Đừng quên dừng lại tại những vách đá ven biển Quy Nhơn để bắt trọn khoảnh khắc hoàng hôn tan vào đại dương.
                </p>
             </div>

             {/* Article Footer */}
             <div className="mt-24 pt-16 border-t border-border flex items-center justify-between px-10">
                <div className="flex gap-4">
                   <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary/40 hover:text-cta transition-colors"><Heart size={16}/> 1.2k</button>
                   <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary/40 hover:text-cta transition-colors"><MessageSquare size={16}/> 48</button>
                </div>
                <div className="flex gap-4">
                   <button className="h-10 w-10 flex items-center justify-center rounded-luxury border border-border text-primary/40 hover:text-cta hover:border-cta transition-all"><Share2 size={16}/></button>
                </div>
             </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 mt-20 lg:mt-0">
             <div className="sticky top-32 space-y-12">
                <div className="glass-card p-10 rounded-[3rem] border-white/40 shadow-luxury-xl">
                   <h4 className="font-heading text-2xl font-bold text-primary mb-8">Hành Trình Tiếp Theo</h4>
                   <div className="space-y-8">
                      {blogPosts.slice(1, 4).map(p => (
                        <Link key={p.id} href={`/blog/${p.id}`} className="group flex gap-5 items-start">
                           <div className="h-16 w-16 rounded-2xl overflow-hidden bg-slate-200 shrink-0 border border-border">
                              <img src={p.image} alt="prev" className="h-full w-full object-cover transition-transform group-hover:scale-110" />
                           </div>
                           <div>
                              <p className="text-[9px] font-black uppercase text-cta mb-1">Journal Entry</p>
                              <h5 className="text-sm font-bold text-primary group-hover:text-cta transition-colors line-clamp-2">{p.title}</h5>
                           </div>
                        </Link>
                      ))}
                   </div>
                </div>

                <div className="bg-primary p-12 rounded-[3.5rem] text-white relative overflow-hidden group">
                   <div className="absolute top-[-20%] right-[-10%] h-32 w-32 bg-cta/20 blur-2xl group-hover:bg-cta/40 transition-colors" />
                   <h4 className="font-heading text-3xl font-bold mb-6">Trải Nghiệm <br/>Của Riêng Bạn</h4>
                   <p className="text-sm text-white/40 leading-relaxed mb-8 font-medium">Bắt đầu câu chuyện của mình với đội xe GoRide Elite ngay hôm nay.</p>
                   <Link href="/cars" className="luxury-btn-primary bg-cta text-white hover:bg-white hover:text-cta border-none w-full flex items-center justify-center">BOOK NOW</Link>
                </div>
             </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
