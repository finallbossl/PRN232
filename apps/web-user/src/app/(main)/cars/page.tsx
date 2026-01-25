'use client';

import Link from 'next/link';
import { featuredBikes } from '@/constants/homeData';
import CarCard from '@/components/common/CarCard';
import SectionHeader from '@/components/common/SectionHeader';
import { CheckCircle2, Info, MapPin, Calendar, Clock, Search, SlidersHorizontal, Headset } from 'lucide-react';

export default function CarsPage() {
  return (
    <main className="bg-background relative lg:pt-0 pt-0">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary-muted px-8">
        <img 
          src="https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=2000" 
          alt="GoRide Collection" 
          className="absolute inset-0 h-full w-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-background" />
        
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/20 mb-6">
             <span className="flex h-2 w-2 rounded-full bg-cta animate-pulse" />
             <span className="text-xs font-semibold text-cta">Đội Xe Đa Dạng</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Khám Phá Đội Xe
          </h1>
          <p className=" mx-auto text-lg font-medium text-white/70 leading-relaxed">
            Tìm chiếc xe hoàn hảo cho hành trình của bạn. Tất cả xe đều được bảo trì định kỳ và bảo hiểm toàn diện.
          </p>
        </div>
      </section>

      <div className="container -mt-16 relative z-30 pb-20">
        {/* Search Bar */}
        <div className="glass-card p-4 rounded-luxury-lg shadow-soft-lg border-primary/20 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-primary/10">
              <label className="block text-xs font-semibold uppercase tracking-wider text-rich-text/40 mb-2">Điểm Nhận</label>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-cta" />
                <select className="w-full bg-transparent border-none outline-none font-medium text-primary cursor-pointer">
                  <option>Văn phòng trung tâm</option>
                  <option>Sân bay Quy Nhơn</option>
                </select>
              </div>
            </div>
            
            <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-primary/10">
              <label className="block text-xs font-semibold uppercase tracking-wider text-rich-text/40 mb-2">Ngày Thuê</label>
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-cta" />
                <input type="date" className="w-full bg-transparent border-none outline-none font-medium text-primary cursor-pointer" defaultValue="2026-01-25" />
              </div>
            </div>

            <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-primary/10">
              <label className="block text-xs font-semibold uppercase tracking-wider text-rich-text/40 mb-2">Thời Gian</label>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-cta" />
                <select className="w-full bg-transparent border-none outline-none font-medium text-primary cursor-pointer">
                  <option>3 Ngày</option>
                  <option>1 Tuần</option>
                </select>
              </div>
            </div>

            <div className="p-2">
              <button className="luxury-btn-primary w-full flex items-center justify-center gap-2">
                <Search size={18} />
                Tìm Kiếm
              </button>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-32 space-y-8">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-xl font-bold text-primary">Bộ Lọc</h3>
                  <SlidersHorizontal size={18} className="text-cta" />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-cta mb-4">Phân Loại</h4>
                    <div className="space-y-3">
                      {['Xe Tay Ga', 'Xe Số Sport', 'Xe Côn Tay'].map(type => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                          <div className="h-5 w-5 rounded-luxury border border-primary/20 group-hover:border-cta transition-colors" />
                          <span className="text-sm font-medium text-rich-text/60 group-hover:text-primary transition-colors">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-primary/10" />

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-cta mb-4">Mức Giá / Ngày</h4>
                    <div className="space-y-3">
                      {['Dưới 150k', '150k - 250k', 'Trên 250k'].map(price => (
                        <label key={price} className="flex items-center gap-3 cursor-pointer group">
                          <div className="h-5 w-5 rounded-luxury border border-primary/20 group-hover:border-cta transition-colors" />
                          <span className="text-sm font-medium text-rich-text/60 group-hover:text-primary transition-colors">{price}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Card */}
              <div className="glass-card p-8 rounded-luxury-lg bg-primary text-white border-none">
                <Headset size={28} className="text-cta mb-4" />
                <h4 className="font-heading text-xl text-emerald-600 font-bold mb-3">Cần Tư Vấn?</h4>
                <p className="text-sm font-medium text-white/70 leading-relaxed mb-6">Liên hệ chuyên viên để tìm xe phù hợp.</p>
                <Link href="#" className="flex items-center justify-center rounded-luxury bg-cta text-sm font-semibold text-white py-3 hover:bg-cta-hover transition-colors">
                  Gọi: 0987.654.321
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBikes.map((bike) => (
                <CarCard key={bike.id} {...bike} />
              ))}
            </div>

            {/* Policy Cards */}
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
               <div className="glass-card p-8 rounded-luxury-lg border-primary/20">
                  <div className="h-12 w-12 flex items-center justify-center rounded-luxury bg-surface text-cta mb-6">
                     <CheckCircle2 size={24} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">Điều Khoản Thuê</h3>
                  <ul className="space-y-3">
                     {['Căn cước công dân / Passport', 'Bằng lái xe máy hợp lệ', 'Thanh toán trọn gói'].map(t => (
                       <li key={t} className="flex items-center gap-3 text-sm font-medium text-rich-text/60">
                          <span className="h-1.5 w-1.5 rounded-full bg-cta" />
                          {t}
                       </li>
                     ))}
                  </ul>
               </div>
               
               <div className="glass-card p-8 rounded-luxury-lg border-primary/20">
                  <div className="h-12 w-12 flex items-center justify-center rounded-luxury bg-surface text-cta mb-6">
                     <Info size={24} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">Chính Sách Phí</h3>
                  <ul className="space-y-3">
                     {['Thời gian 24h/ngày', 'Phí trễ: 30.000đ/giờ', 'Bảo hiểm trọn gói'].map(t => (
                       <li key={t} className="flex items-center gap-3 text-sm font-medium text-rich-text/60">
                          <span className="h-1.5 w-1.5 rounded-full bg-cta" />
                          {t}
                       </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* CTA */}
            <div className="mt-20 bg-cta rounded-luxury-xl p-16 text-center text-white">
               <h2 className="font-heading text-4xl lg:text-5xl font-bold text-emerald-600 mb-6">Sẵn Sàng Cho Hành Trình?</h2>
               <p className=" mx-auto text-lg font-medium text-white/80 mb-8">Bắt đầu chuyến đi ngay bây giờ và nhận ưu đãi đặc biệt.</p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="luxury-btn-primary bg-white text-cta hover:bg-surface">Bắt Đầu Ngay</button>
                  <button className="luxury-btn-outline border-white text-white hover:bg-white/10">Xem Chính Sách</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
