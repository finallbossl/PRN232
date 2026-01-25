'use client';

import Link from 'next/link';
import { 
  Tag, Calendar, Users, ArrowRight, CheckCircle2, 
  Gift, Ticket, Sparkles, Clock, ChevronRight, Award
} from 'lucide-react';
import { cn } from '@/lib/utils';

const PROMOTIONS = [
  {
    id: 1,
    title: "Đặc Quyền Chào Mừng",
    value: "30% OFF",
    banner: "https://images.unsplash.com/photo-1616634375264-2d2e17736a36?auto=format&fit=crop&q=80&w=800",
    time: "Dành cho khách hàng Elite mới",
    audience: "Lần đầu trải nghiệm",
    status: "active",
    type: "All Fleet Selection"
  },
  {
    id: 2,
    title: "Hành Trình Cuối Tuần",
    value: "Fixed -100k",
    banner: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8df0?auto=format&fit=crop&q=80&w=800",
    time: "Thứ 7 & CN Hàng Tuần",
    audience: "Tất cả thành viên",
    status: "active",
    type: "Scooter Division"
  },
  {
    id: 3,
    title: "Chuyến Đi Dài Ngày",
    value: "20% Bonus",
    banner: "https://images.unsplash.com/photo-1554672408-730436b60dde?auto=format&fit=crop&q=80&w=800",
    time: "Áp dụng thuê > 3 ngày",
    audience: "Người yêu khám phá",
    status: "upcoming",
    type: "Manual & Sport Bikes"
  }
];

export default function PromotionsPage() {
  return (
    <main className="bg-background relative min-h-screen pb-40">
      {/* 1. Immersive Elite Hero */}
      <section className="relative h-[550px] flex items-center overflow-hidden bg-primary px-8">
        <img 
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1600" 
          alt="Elite Benefits" 
          className="absolute inset-0 h-full w-full object-cover opacity-20 transition-transform duration-[10s] hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-background" />
        
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card border-white/20 mb-10 mx-auto shadow-luxury-xl">
             <Award size={14} className="text-cta" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cta">Elite Advantages</span>
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[110px] font-bold text-white tracking-tight leading-[0.85] mb-10">
            Đặc Quyền Tinh Hoa
          </h1>
          <p className=" mx-auto text-xl font-medium text-white/40 leading-relaxed italic">
            &quot;Nâng tầm hành trình của bạn với những ưu đãi độc quyền dành riêng cho cộng đồng GoRide Elite. Tận hưởng sự sang trọng vượt bậc với đặc quyền dành riêng cho bạn.&quot;
          </p>
        </div>
      </section>

      <div className="container -mt-20 relative z-30">
        {/* 2. Strategy Highlight */}
        <div className="glass-card p-12 rounded-[4.5rem] border-white/40 shadow-luxury-xl mb-32 flex flex-col lg:flex-row items-center gap-16 bg-white/50 backdrop-blur-3xl border-[12px] border-white/50">
           <div className="h-24 w-24 flex items-center justify-center rounded-[2.5rem] bg-background text-cta shadow-luxury-xl shrink-0 border border-primary/5">
              <Sparkles size={40} />
           </div>
           <div className="flex-1 text-center lg:text-left">
              <h3 className="font-heading text-4xl font-bold text-primary mb-6 tracking-tight">Tối Ưu Hoá Đặc Quyền</h3>
              <p className="text-lg font-medium text-primary/40 leading-relaxed max-w-2xl italic">Hệ thống GoRide thông minh sẽ tự động xác thực và áp dụng mức chiết khấu cao nhất cho hồ sơ Elite của bạn. Một trải nghiệm mượt mà, không gián đoạn.</p>
           </div>
           <Link href="/cars" className="luxury-btn-primary whitespace-nowrap px-14 py-6 shadow-luxury-xl rounded-[2.5rem]">
              EXPLORE ELITE FLEET
           </Link>
        </div>

        {/* 3. Editorial Privilege Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {PROMOTIONS.map((p, idx) => (
            <div key={p.id} className={cn(
              "group relative flex flex-col overflow-hidden transition-all duration-700 liquid-hover",
              idx % 2 === 0 ? "lg:translate-y-12" : "lg:-translate-y-12"
            )}>
              <div className="relative aspect-[4/5] rounded-[4.5rem] overflow-hidden shadow-luxury-xl border-[10px] border-white/50">
                <img src={p.banner} alt={p.title} className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
                
                {/* Privilege Badge */}
                <div className="absolute top-10 right-10 h-14 w-14 flex items-center justify-center rounded-2xl glass-card border-white/20 text-cta shadow-luxury-xl">
                   <Tag size={24} />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-14 lg:p-16">
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cta mb-6">{p.type}</span>
                   <h3 className="font-heading text-4xl font-bold text-white mb-8 leading-tight tracking-tight">{p.title}</h3>
                   <div className="text-6xl font-black text-white italic font-heading mb-12">{p.value}</div>
                   
                   <p className="text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-12 flex items-center gap-4">
                      <Clock size={16} className="text-cta" />
                      {p.time}
                   </p>

                   {p.status === 'active' ? (
                     <Link href="/cars" className="luxury-btn-primary py-6 text-[10px] font-black tracking-[0.3em] text-center shadow-luxury-xl rounded-[2rem]">
                        CLAIM YOUR PRIVILEGE
                     </Link>
                   ) : (
                     <div className="py-6 text-center text-[10px] font-black uppercase tracking-[0.3em] text-white/10 border border-white/10 rounded-[2rem] bg-white/5 backdrop-blur-md">
                        RESERVED FOR FUTURE
                     </div>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Personalized Support CTA */}
        <section className="mt-48 bg-cta rounded-[5rem] p-24 lg:p-32 text-center text-white relative overflow-hidden shadow-luxury-xl border-[15px] border-white/10">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[130px] rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse" />
           <h2 className="font-heading text-7xl lg:text-9xl font-bold mb-12 tracking-tight leading-[0.85]">Cần Giải Pháp Riêng Biệt?</h2>
           <p className="max-w-2xl mx-auto text-xl font-medium text-white/60 mb-20 leading-relaxed italic">&quot;Đội ngũ Concierge của chúng tôi luôn sẵn sàng thiết kế những gói đặc quyền riêng biệt phù hợp với quy mô và yêu cầu khắt khe nhất của bạn.&quot;</p>
           <div className="flex flex-col sm:flex-row justify-center gap-10">
              <button className="luxury-btn-primary bg-white text-cta hover:bg-background border-none px-16 shadow-luxury-xl">Duyệt Đội Xe</button>
              <button className="luxury-btn-outline border-white text-white hover:bg-white/10 px-16">Gửi Yêu Cầu Riêng</button>
           </div>
        </section>
      </div>
    </main>
  );
}
