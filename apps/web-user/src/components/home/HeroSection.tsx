'use client';

import { ArrowRight, Star, ShieldCheck, Users, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-surface via-white to-primary/5 pt-32 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-cta/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/20 to-primary/20 blur-[100px] rounded-full" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cta/10 border border-primary/20 mb-8">
              <MapPin size={16} className="text-primary" />
              <span className="text-xs font-semibold text-primary whitespace-nowrap">Thuê xe máy linh hoạt - Khám phá tự do</span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-rich-text leading-tight mb-6">
              <span className="whitespace-nowrap">Tự Do</span>{' '}
              <span className="bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent whitespace-nowrap">Khám Phá</span>
            </h1>

            <p className="text-lg md:text-xl font-medium text-rich-text/60 leading-relaxed mb-10">
              Trải nghiệm sự tự do tuyệt đối với dịch vụ cho thuê xe máy linh hoạt. Giá minh bạch, đặt xe nhanh chóng, hỗ trợ 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/cars"
                className="luxury-btn-primary inline-flex items-center justify-center gap-2 group shadow-soft-lg hover:shadow-soft-lg whitespace-nowrap"
              >
                Thuê xe ngay
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </Link>
              <Link
                href="/promotions"
                className="luxury-btn-outline inline-flex items-center justify-center whitespace-nowrap"
              >
                Xem ưu đãi
              </Link>
            </div>

            <div className="mt-12 flex flex-row justify-between items-start w-full max-w-2xl border-t border-primary/10 pt-8">
              <div className="flex flex-col items-center sm:items-start gap-2 px-4 min-w-[100px]">
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">100+</span>
                <span className="text-xs sm:text-sm font-semibold text-rich-text/70 text-center sm:text-left whitespace-nowrap">Dòng Xe</span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2 px-4 min-w-[100px]">
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">24/7</span>
                <span className="text-xs sm:text-sm font-semibold text-rich-text/70 text-center sm:text-left whitespace-nowrap">Hỗ Trợ</span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2 px-4 min-w-[100px]">
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">5.0</span>
                <span className="text-xs sm:text-sm font-semibold text-rich-text/70 text-center sm:text-left whitespace-nowrap">Đánh Giá</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 w-full aspect-[4/5] rounded-luxury-xl overflow-hidden shadow-luxury-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=1200"
                alt="GoRide Travel"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-luxury shadow-soft-lg">
                <ShieldCheck size={24} className="text-primary mb-2" />
                <p className="text-xs font-semibold text-rich-text whitespace-nowrap">Bảo Hiểm Toàn Diện</p>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-luxury shadow-soft-lg">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex gap-1 text-primary mb-2">
                       {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <span className="text-xs font-medium text-rich-text/60 whitespace-nowrap">1.2k+ Khách Hàng Tin Tưởng</span>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 30}`} alt="user" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
