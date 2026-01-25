'use client';

import SectionHeader from '@/components/common/SectionHeader';
import { promoData } from '@/constants/homeData';
import { ArrowRight, Sparkles, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PromotionsSection() {
  return (
    <section className="bg-surface py-20 overflow-hidden">
      <div className="container">
        <SectionHeader 
          title="Ưu Đãi Đặc Biệt" 
          subtitle="Khám phá những đặc quyền dành riêng cho khách hàng của GoRide." 
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promoData.map((promo, idx) => (
            <div 
              key={promo.id} 
              className="group relative h-[320px] overflow-hidden rounded-luxury-lg shadow-soft-lg transition-all duration-300 hover:shadow-luxury-xl hover:-translate-y-1"
            >
              <img 
                src={promo.image} 
                alt={promo.title} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-luxury bg-cta text-white shadow-soft-md">
                    {idx % 2 === 0 ? <Sparkles size={20} /> : <Gift size={20} />}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cta whitespace-nowrap">{promo.badge}</span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  {promo.title}
                </h3>
                
                <p className="text-sm font-medium text-white/70 leading-relaxed mb-4">
                  {promo.description}
                </p>

                <button className="inline-flex items-center gap-2 text-sm font-semibold text-cta group/btn whitespace-nowrap">
                  <span>Dùng Ưu Đãi Ngay</span>
                  <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
