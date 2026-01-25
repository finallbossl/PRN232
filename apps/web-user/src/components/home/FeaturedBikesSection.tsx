import SectionHeader from '@/components/common/SectionHeader';
import CarCard from '@/components/common/CarCard';
import { featuredBikes } from '@/constants/homeData';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedBikesSection() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="container">
        <SectionHeader 
          title="Đội Xe Nổi Bật" 
          subtitle="Những mẫu xe đời mới nhất, bảo trì định kỳ, sẵn sàng cùng bạn chinh phục mọi hành trình." 
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBikes.map((bike) => (
            <CarCard key={bike.id} {...bike} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/cars" className="luxury-btn-outline group flex items-center gap-2 whitespace-nowrap">
             Xem Tất Cả Xe
             <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
