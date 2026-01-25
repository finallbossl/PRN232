'use client';

import Link from 'next/link';
import { Mail, Lock, User, ArrowRight, Github, Chrome, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function RegisterPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-white">
      {/* Visual Adventure Side */}
      <section className="relative hidden lg:flex items-center justify-center bg-primary overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=80&w=1200" 
          alt="GoRide Freedom Awaits" 
          className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-[10s] hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        
        <div className="relative z-10 p-24 max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card border-white/20 mb-10 shadow-luxury-xl">
             <Compass size={16} className="text-cta" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cta">Freedom Begins Here</span>
          </div>

          <h2 className="font-heading text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-10">
            Gia Nhập <br/>
            <span className="text-cta italic font-normal">Cộng Đồng Elite</span>
          </h2>
          <p className="text-xl font-medium text-white/40 leading-relaxed italic">
            Mở khóa những hành trình bứt phá và nhận đặc quyền giảm giá 30% cho lần thuê đầu tiên. Hành trình của bạn, tiêu chuẩn của chúng tôi.
          </p>
        </div>
        
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-cta/10 blur-[120px] rounded-full" />
      </section>

      {/* Elegant Registration Form Side */}
      <section className="flex items-center justify-center p-12 lg:p-24 bg-surface">
        <div className="w-full max-w-md">
          <div className="mb-14">
            <h1 className="font-heading text-5xl font-bold text-primary mb-6">Tạo Danh Tính <br/>Mới</h1>
            <p className="text-sm font-medium text-primary/30 tracking-widest uppercase">Start Your Elite Journey</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/30 ml-2">Full Name</label>
              <div className="relative group">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/10 group-focus-within:text-cta transition-all" size={20} />
                <input 
                  type="text" 
                  className="w-full h-16 pl-14 pr-6 rounded-luxury bg-white border border-transparent outline-none transition-all focus:border-cta/20 focus:ring-4 focus:ring-cta/5 font-bold text-primary shadow-soft-sm"
                  placeholder="Họ và tên của bạn"
                  required 
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/30 ml-2">Legacy Email</label>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/10 group-focus-within:text-cta transition-all" size={20} />
                <input 
                  type="email" 
                  className="w-full h-16 pl-14 pr-6 rounded-luxury bg-white border border-transparent outline-none transition-all focus:border-cta/20 focus:ring-4 focus:ring-cta/5 font-bold text-primary shadow-soft-sm"
                  placeholder="name@example.com"
                  required 
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/30 ml-2">Secret Password</label>
              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/10 group-focus-within:text-cta transition-all" size={20} />
                <input 
                  type="password" 
                  className="w-full h-16 pl-14 pr-6 rounded-luxury bg-white border border-transparent outline-none transition-all focus:border-cta/20 focus:ring-4 focus:ring-cta/5 font-bold text-primary shadow-soft-sm"
                  placeholder="••••••••"
                  required 
                />
              </div>
            </div>

            <label className="flex items-center gap-4 px-2 cursor-pointer group">
              <div className="h-5 w-5 rounded-md border border-primary/10 bg-white flex items-center justify-center transition-all group-hover:border-cta">
                 <div className="h-2 w-2 rounded-sm bg-cta opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-xs font-bold text-primary/30 group-hover:text-primary transition-colors">
                Đồng ý với <a href="#" className="text-cta underline">Điều khoản & Chính sách</a>
              </span>
              <input type="checkbox" className="hidden" required />
            </label>

            <button 
              type="submit" 
              className="luxury-btn-primary w-full flex items-center justify-center gap-4 py-6 shadow-luxury-xl"
            >
               BECOME ELITE MEMBER
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-primary/5"></div></div>
            <div className="relative flex justify-center text-[9px] font-black uppercase tracking-[0.2em]"><span className="bg-surface px-6 text-primary/20">Third Party Auth</span></div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <button className="h-14 rounded-luxury bg-white border border-primary/5 flex items-center justify-center gap-4 font-bold text-xs text-primary hover:bg-white transition-all active:scale-95">
              <Chrome size={18} className="text-red-500" />
              GOOGLE
            </button>
            <button className="h-14 rounded-luxury bg-white border border-primary/5 flex items-center justify-center gap-4 font-bold text-xs text-primary hover:bg-white transition-all active:scale-95">
              <Github size={18} />
              GITHUB
            </button>
          </div>

          <div className="mt-12 text-center text-[10px] font-black uppercase tracking-widest text-primary/20">
            Already a member? <Link href="/login" className="text-cta hover:text-primary transition-colors">Login Here</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
