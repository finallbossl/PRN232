'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Tag, Calendar, Users, ArrowRight, CheckCircle2, 
  Gift, Ticket, Sparkles, Clock, ChevronLeft, ChevronRight, Award, Search
} from 'lucide-react';
import { cn } from '@/lib/utils';

const PROMOTIONS = [
  {
    id: 1,
    title: "Đặc Quyền Chào Mừng",
    value: "GIẢM 30%",
    banner: "https://images.unsplash.com/photo-1616634375264-2d2e17736a36?auto=format&fit=crop&q=80&w=800",
    time: "Dành cho khách hàng mới",
    audience: "Lần đầu trải nghiệm",
    status: "Đang diễn ra",
    type: "Tất cả dòng xe"
  },
  {
    id: 2,
    title: "Hành Trình Cuối Tuần",
    value: "GIẢM 100K",
    banner: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8df0?auto=format&fit=crop&q=80&w=800",
    time: "Thứ 7 & CN hàng tuần",
    audience: "Tất cả thành viên",
    status: "Đang diễn ra",
    type: "Dòng xe Scooter"
  },
  {
    id: 3,
    title: "Chuyến Đi Dài Ngày",
    value: "THƯỞNG 20%",
    banner: "https://images.unsplash.com/photo-1554672408-730436b60dde?auto=format&fit=crop&q=80&w=800",
    time: "Áp dụng thuê > 3 ngày",
    audience: "Người yêu khám phá",
    status: "Sắp ra mắt",
    type: "Xe côn tay & Phân phối lớn"
  },
  {
    id: 4,
    title: "Ưu Đãi Lễ Hội",
    value: "MUA 1 TẶNG 1",
    banner: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    time: "Giai đoạn lễ tết",
    audience: "Thành viên Kim cương",
    status: "Đang diễn ra",
    type: "Sự kiện đặc biệt"
  },
  {
    id: 5,
    title: "Sinh Nhật Rực Rỡ",
    value: "GIẢM 50%",
    banner: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800",
    time: "Trong tháng sinh nhật",
    audience: "Cá nhân",
    status: "Đang diễn ra",
    type: "Phần thưởng cá nhân"
  },
  {
    id: 6,
    title: "Đường Trường Bền Bỉ",
    value: "KHÔNG GIỚI HẠN",
    banner: "https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=800",
    time: "Thuê theo tháng",
    audience: "Khách hàng thường xuyên",
    status: "Đang diễn ra",
    type: "Xe côn tay"
  },
  {
    id: 7,
    title: "Ưu Đãi Gen Z",
    value: "GIẢM 50K",
    banner: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    time: "Sinh viên dưới 22 tuổi",
    audience: "Sinh viên",
    status: "Đang diễn ra",
    type: "Dòng xe Scooter"
  },
  {
    id: 8,
    title: "Đặc Quyền Đối Tác",
    value: "GIÁ ĐẶC BIỆT",
    banner: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    time: "Ưu đãi đối tác chiến lược",
    audience: "Nhân viên đối tác",
    status: "Sắp ra mắt",
    type: "Sự kiện đặc biệt"
  },
  {
    id: 9,
    title: "Cú Đêm Chinh Phục",
    value: "ĐỒNG GIÁ 80K",
    banner: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
    time: "Khung giờ 22h - 6h",
    audience: "Vận hành đêm",
    status: "Đang diễn ra",
    type: "Dòng xe Scooter"
  }
];

const ITEMS_PER_PAGE = 6;

export default function PromotionsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPromotions = useMemo(() => {
    return PROMOTIONS.filter(p => 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredPromotions.length / ITEMS_PER_PAGE);
  const currentItems = filteredPromotions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <main className="bg-background relative min-h-screen pb-40 selection:bg-cta selection:text-white">
      {/* 1. Immersive Elite Hero */}
      <section className="relative h-[550px] flex items-center overflow-hidden bg-primary px-8">
        <img 
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1600" 
          alt="Hình nền đặc quyền" 
          className="absolute inset-0 h-full w-full object-cover opacity-20 transition-transform duration-[10s] hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-background" />
        
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card border-white/20 mb-10 mx-auto shadow-luxury-xl">
             <Award size={14} className="text-cta" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cta">Đặc Quyền GoRide</span>
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[110px] font-bold text-white tracking-tight leading-[0.85] mb-10">
            Đặc Quyền Tinh Hoa
          </h1>
          <p className="max-w-4xl mx-auto text-xl font-medium text-white/40 leading-relaxed italic">
            &quot;Nâng tầm hành trình của bạn với những ưu đãi độc quyền dành riêng cho cộng đồng GoRide Elite. Tận hưởng sự sang trọng vượt bậc với đặc quyền dành riêng cho bạn.&quot;
          </p>
        </div>
      </section>

      <div className="container -mt-20 relative z-30">
        {/* 2. Highlight & Search Controls - Compact Version */}
        <div className="flex flex-col lg:flex-row gap-6 mb-20">
          <div className="glass-card flex-1 p-8 rounded-[3rem] border-white/40 shadow-luxury-lg flex flex-col md:flex-row items-center gap-10 bg-white/50 backdrop-blur-2xl border-[8px] border-white/50">
             <div className="h-16 w-16 flex items-center justify-center rounded-[1.5rem] bg-background text-cta shadow-luxury-md shrink-0 border border-primary/5">
                <Sparkles size={28} />
             </div>
             <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading text-2xl font-bold text-primary mb-2 tracking-tight">Tối Ưu Hoá Đặc Quyền</h3>
                <p className="text-sm font-medium text-primary/40 leading-relaxed italic">Hệ thống thông minh tự động xác thực và áp dụng ưu đãi cao nhất cho bạn.</p>
             </div>
          </div>

          <div className="glass-card w-full lg:w-80 p-8 rounded-[3rem] border-white/40 shadow-luxury-lg bg-white/50 backdrop-blur-2xl border-[8px] border-white/50 flex flex-col justify-center">
             <div className="relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-cta transition-colors" size={18} />
                <input 
                  type="text"
                  placeholder="Tìm ưu đãi..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                  className="w-full bg-white border border-primary/5 rounded-full py-3.5 pl-14 pr-6 text-xs focus:outline-none focus:ring-2 focus:ring-cta/10 transition-all font-bold"
                />
             </div>
          </div>
        </div>

        {/* 3. Luxury Privilege Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32 md:gap-y-48 lg:gap-y-72">
          {currentItems.map((p, idx) => (
            <div key={p.id} className={cn(
              "group relative flex flex-col transition-all duration-700",
              idx % 2 === 0 ? "lg:translate-y-16" : "lg:-translate-y-16"
            )}>
              <div className="relative aspect-[4/6.8] rounded-[4.5rem] overflow-hidden shadow-luxury-2xl border-[12px] border-white bg-white group-hover:border-cta/20 transition-all duration-700">
                <img src={p.banner} alt={p.title} className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110" />
                
                {/* Modern Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-cta/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card Header Information */}
                <div className="absolute top-8 left-8 right-8 flex justify-between items-center">
                   <div className={cn(
                     "px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] backdrop-blur-md border border-white/20 shadow-luxury-lg",
                     p.status === 'Đang diễn ra' ? "bg-cta text-white" : "bg-white/10 text-white/50"
                   )}>
                      {p.status}
                   </div>
                   <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-cta shadow-luxury-xl">
                      <Tag size={16} />
                   </div>
                </div>

                {/* Main Card Information - Maximized Spacing */}
                <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10 flex flex-col gap-3">
                   <div className="flex items-center gap-2">
                      <div className="h-[2px] w-4 bg-cta" />
                      <span className="text-[9px] font-black uppercase tracking-[0.4em] text-cta italic leading-none">{p.type}</span>
                   </div>
                   
                   <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight group-hover:text-cta transition-colors duration-500 drop-shadow-md">
                     {p.title}
                   </h3>
                   
                   <div className="flex items-baseline gap-2 overflow-hidden text-white drop-shadow-2xl">
                      <div className="text-4xl lg:text-5xl font-black italic font-heading tracking-tighter group-hover:scale-105 transition-transform duration-700 leading-none">
                        {p.value.split(' ')[0]}
                      </div>
                      <div className="text-sm lg:text-base font-black text-cta uppercase tracking-tight">
                        {p.value.split(' ').slice(1).join(' ')}
                      </div>
                   </div>
                   
                   <div className="space-y-3 border-t border-white/10 pt-4 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-3 text-white/90">
                         <Clock size={12} className="text-cta shrink-0" />
                         <span className="text-[10px] font-bold tracking-wide">{p.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/90">
                         <Users size={12} className="text-cta shrink-0" />
                         <span className="text-[10px] font-bold tracking-wide">{p.audience}</span>
                      </div>
                   </div>

                   <div className="mt-2">
                     {p.status === 'Đang diễn ra' ? (
                       <Link href="/cars" className="block luxury-btn-primary py-4 text-[10px] font-black tracking-[0.3em] text-center shadow-luxury-2xl rounded-[2rem] bg-white text-primary hover:bg-cta hover:text-white border-none group-hover:scale-[1.02] transition-all">
                          NHẬN ƯU ĐÃI
                       </Link>
                     ) : (
                       <div className="py-4 text-center text-[10px] font-black uppercase tracking-[0.3em] text-white/20 border-2 border-white/10 rounded-[2rem] bg-white/5 backdrop-blur-md">
                          ĐÃ HẾT HẠN
                       </div>
                     )}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Artistic Pagination */}
        {totalPages > 1 && (
          <div className="mt-48 flex justify-center items-center gap-10">
             <button 
               onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
               disabled={currentPage === 1}
               className="h-20 w-20 rounded-[2.5rem] glass-card border-white/40 shadow-luxury-xl bg-white/50 flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 group text-primary border-[6px]"
             >
                <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
             </button>
             
             <div className="flex items-center gap-6">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={cn(
                      "h-4 transition-all duration-700 rounded-full shadow-sm",
                      currentPage === i + 1 ? "w-16 bg-cta" : "w-4 bg-primary/10 hover:bg-primary/20"
                    )}
                  />
                ))}
             </div>

             <button 
               onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
               disabled={currentPage === totalPages}
               className="h-20 w-20 rounded-[2.5rem] glass-card border-white/40 shadow-luxury-xl bg-white/50 flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 group text-primary border-[6px]"
             >
                <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        )}

        {/* 5. Personalized Support CTA */}
        <section className="mt-48 bg-cta rounded-[5rem] p-24 lg:p-32 text-center text-white relative overflow-hidden shadow-luxury-xl border-[15px] border-white/10">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[130px] rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse" />
           <h2 className="font-heading text-7xl lg:text-white font-bold mb-12 tracking-tight leading-[0.85]">Cần Giải Pháp Riêng Biệt?</h2>
           <p className="mx-auto text-xl font-medium text-white/60 mb-20 leading-relaxed italic">&quot;Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng thiết kế những gói đặc quyền riêng biệt phù hợp với quy mô và yêu cầu khắt khe nhất của bạn.&quot;</p>
           <div className="flex flex-col sm:flex-row justify-center gap-10">
              <button className="luxury-btn-primary bg-white text-cta hover:bg-background border-none px-16 shadow-luxury-xl rounded-[2.5rem] py-6 text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95">Duyệt Đội Xe</button>
              <button className="luxury-btn-outline border-white text-white hover:bg-white/10 px-16 rounded-[2.5rem] py-6 text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95">Gửi Yêu Cầu Riêng</button>
           </div>
        </section>
      </div>
    </main>
  );
}
