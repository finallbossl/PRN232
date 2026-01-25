'use client';

import Link from 'next/link';
import { Star, ShieldCheck, ArrowRight } from 'lucide-react';

interface CarCardProps {
  id: number;
  name: string;
  type: string;
  price: string;
  rating: number;
  reviews: string;
  image: string;
  badge?: string;
  slug: string;
}

export default function CarCard({ name, type, price, rating, reviews, image, badge, slug }: CarCardProps) {
  return (
    <Link 
      href={`/cars/${slug}`} 
      className="group relative flex flex-col overflow-hidden rounded-luxury-lg bg-white border border-primary/10 transition-all duration-300 hover:shadow-luxury-xl hover:-translate-y-1 hover:border-primary/30"
    >
      {/* Image */}
      <div className="relative aspect-[16/11] overflow-hidden bg-surface">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3 rounded-luxury bg-gradient-to-r from-primary to-cta px-3 py-1 text-xs font-semibold text-white shadow-soft-md whitespace-nowrap">
            {badge}
          </div>
        )}

        {/* Protection */}
        <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-luxury bg-white/90 text-primary backdrop-blur-sm">
          <ShieldCheck size={18} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-heading text-xl font-bold text-rich-text group-hover:text-primary transition-colors">{name}</h3>
            <p className="mt-1 text-xs font-medium text-rich-text/40 whitespace-nowrap">{type}</p>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 rounded-luxury bg-surface text-xs font-semibold text-rich-text">
            <Star size={12} className="fill-primary text-primary" />
            {rating}
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between border-t border-primary/10 pt-4">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-rich-text/40 whitespace-nowrap">Giá từ</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">{price}</span>
              <span className="text-xs font-medium text-rich-text/40 whitespace-nowrap">/ngày</span>
            </div>
          </div>
          
          <div className="flex h-10 w-10 items-center justify-center rounded-luxury bg-gradient-to-br from-primary to-cta text-white transition-all duration-300 group-hover:scale-110">
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
}
