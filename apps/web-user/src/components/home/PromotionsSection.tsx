'use client';

import { useEffect, useState } from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import { promotionApi } from '@/services/api';
import { Promotion } from '@goride/shared';
import { ChevronRight, Percent, Clock, MapPin, Loader2, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PromotionsSection() {
  const [promos, setPromos] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const response = await promotionApi.getAll();
        if (response.success && response.data) {
          setPromos(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch promotions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPromos();
  }, []);

  return (
    <section className="bg-surface py-20 overflow-hidden">
      <div className="container">
        <SectionHeader 
          title="Ưu Đãi Đặc Biệt" 
          subtitle="Khám phá những đặc quyền dành riêng cho khách hàng của GoRide." 
        />
        
        {loading ? (
          <div className="mt-12 flex justify-center py-20">
            <Loader2 className="animate-spin text-primary" size={40} />
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promos.map((promo: Promotion) => (
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
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                          <Percent className="text-white" size={24} />
                        </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cta whitespace-nowrap">{promo.badge || 'KM'}</span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-white mb-3">
                    {promo.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-white/70 leading-relaxed mb-4 line-clamp-2">
                    {promo.description}
                  </p>

                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white transition-opacity group-hover:opacity-80">
                      Chi tiết ưu đãi
                      <ChevronRight size={14} />
                    </button>
                </div>
              </div>
            ))}
            {promos.length === 0 && (
              <div className="col-span-full text-center py-10 text-rich-text/40 font-medium">
                Chưa có chương trình ưu đãi hiện hành.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
