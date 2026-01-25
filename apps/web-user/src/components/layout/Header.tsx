'use client';

import Link from 'next/link';
import { Menu, MapPin, Gift, BookOpen, UserCircle, X, CarFront } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { name: 'Xe Máy', href: '/cars', icon: CarFront },
  { name: 'Địa Điểm', href: '/locations', icon: MapPin },
  { name: 'Tin Tức', href: '/blog', icon: BookOpen },
  { name: 'Ưu Đãi', href: '/promotions', icon: Gift },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out px-4 sm:px-6",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div 
        className={cn(
          "container mx-auto flex h-16 items-center justify-between px-6 rounded-luxury border transition-all duration-300",
          scrolled 
            ? "bg-white/95 backdrop-blur-md border-primary/10 shadow-soft-lg" 
            : "bg-white/90 backdrop-blur-sm border-white/20"
        )}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-luxury bg-gradient-to-br from-primary to-cta text-white shadow-soft-md transition-all duration-300 group-hover:scale-110">
            <CarFront size={20} strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">
            GoRide
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm font-semibold text-rich-text/60 hover:text-primary transition-colors duration-200"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-cta transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-rich-text/60 hover:text-primary transition-colors group"
          >
            <UserCircle size={18} className="group-hover:text-cta transition-colors" />
            Đăng Nhập
          </Link>
          
          <Link 
            href="/register" 
            className="luxury-btn-primary py-2.5 px-6 text-sm hidden sm:flex"
          >
            Đăng Ký
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary hover:bg-surface rounded-luxury transition-all active:scale-90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden transition-all duration-300 p-6 pt-24",
        isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}>
        <nav className="flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-4 text-xl font-semibold text-primary border-b border-primary/10 pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.icon size={24} className="text-cta" />
              {item.name}
            </Link>
          ))}
          <div className="grid grid-cols-1 gap-4 mt-6">
            <Link 
              href="/login" 
              className="luxury-btn-outline text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Đăng Nhập
            </Link>
            <Link 
              href="/register" 
              className="luxury-btn-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Đăng Ký
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
