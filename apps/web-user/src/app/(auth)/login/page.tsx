'use client';

import Link from 'next/link';
import { Mail, Lock, ArrowRight, Github, Chrome, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LoginPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-white">
      {/* Visual Experience Side */}
      <section className="relative hidden lg:flex items-center justify-center bg-primary overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=1200" 
          alt="GoRide Premium Journey" 
          className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-[10s] hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        
        <div className="relative z-10 p-24 max-w-2xl">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card border-white/20 mb-10 shadow-luxury-xl">
             <ShieldCheck size={16} className="text-cta" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cta">Secure Elite Access</span>
          </div>

          <h2 className="font-heading text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-10">
            Khám Phá <br/>
            <span className="text-cta italic font-normal">Hành Trình Mới</span>
          </h2>
          <p className="text-xl font-medium text-white/40 leading-relaxed italic">
            Đăng nhập để tiếp tục trải nghiệm sự sang trọng và tự do trên mọi cung đường. Đặc quyền dành riêng cho cộng đồng GoRide Elite.
          </p>
        </div>
        
        {/* Decorative corner */}
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-cta/10 blur-[120px] rounded-full" />
      </section>

      {/* Elegant Form Side */}
      <section className="flex items-center justify-center p-12 lg:p-24 bg-surface">
        <div className="w-full max-w-md">
          <div className="mb-16">
            <h1 className="font-heading text-5xl font-bold text-primary mb-6">Chào Mừng <br/>Trở Lại</h1>
            <p className="text-sm font-medium text-primary/30 tracking-widest uppercase">Elite Member Login</p>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
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

            <div className="space-y-4">
              <div className="flex justify-between items-center px-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/30">Secret Password</label>
                <a href="#" className="text-[10px] font-black uppercase tracking-widest text-cta hover:text-primary transition-colors">Recover?</a>
              </div>
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

            <button 
              type="submit" 
              className="luxury-btn-primary w-full flex items-center justify-center gap-4 py-6 shadow-luxury-xl"
            >
              ACCÉSS ACCOUNT
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-primary/5"></div></div>
            <div className="relative flex justify-center text-[9px] font-black uppercase tracking-[0.3em]"><span className="bg-surface px-6 text-primary/20">Elite Gateway</span></div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <button className="h-14 rounded-luxury bg-white border border-primary/5 flex items-center justify-center gap-4 font-bold text-xs text-primary hover:bg-white hover:shadow-soft-lg transition-all active:scale-95">
              <Chrome size={18} className="text-red-500" />
              GOOGLE
            </button>
            <button className="h-14 rounded-luxury bg-white border border-primary/5 flex items-center justify-center gap-4 font-bold text-xs text-primary hover:bg-white hover:shadow-soft-lg transition-all active:scale-95">
              <Github size={18} />
              GITHUB
            </button>
          </div>

          <div className="mt-16 text-center text-[10px] font-black uppercase tracking-widest text-primary/20">
            New to the community? <Link href="/register" className="text-cta hover:text-primary transition-colors">Register Now</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
