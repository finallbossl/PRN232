'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState, useRef, useMemo } from 'react';
import Link from 'next/link';
import {
  Star, MapPin, Calendar, Clock, ShieldCheck,
  Heart, Share2, MessageSquare, ChevronRight, 
  ArrowLeft, User, Phone, FileText, Upload, 
  CreditCard, CheckCircle2, X, AlertCircle, Camera
} from 'lucide-react';
export default function CarDetailPage() {
  const { isLoggedIn, user: authUser } = useAuth();
  const router = useRouter();
  const params = useParams();
  
  // Booking State - Dates
  const [startDate, setStartDate] = useState("2026-05-12");
  const [endDate, setEndDate] = useState("2026-05-15");

  const { days, totalPrice, totalPriceRaw } = useMemo(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const finalDays = diffDays > 0 ? diffDays : 1;
    const pricePerDay = 350000;
    const total = finalDays * pricePerDay;
    
    return {
      days: finalDays,
      totalPrice: total.toLocaleString('vi-VN') + " VNĐ",
      totalPriceRaw: total
    };
  }, [startDate, endDate]);

  const startBooking = () => {
    if (!isLoggedIn) {
      router.push('/login');
      return;
    }
    // Pass dates via query params
    router.push(`/booking/${params.id}?start=${startDate}&end=${endDate}`);
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-primary/30">
            <Link href="/" className="hover:text-cta transition-colors">Trang chủ</Link>
            <ChevronRight size={12} />
            <Link href="/cars" className="hover:text-cta transition-colors">Khám phá xe</Link>
            <ChevronRight size={12} />
            <span className="text-primary/60 italic">Honda SH 150i ABS</span>
          </div>
          <div className="flex items-center gap-4">
             <button className="h-12 w-12 rounded-2xl bg-white border border-primary/5 flex items-center justify-center text-primary/40 hover:text-red-500 hover:bg-red-50 transition-all shadow-luxury-sm">
                <Heart size={20} />
             </button>
             <button className="h-12 w-12 rounded-2xl bg-white border border-primary/5 flex items-center justify-center text-primary/40 hover:text-cta hover:bg-cta/5 transition-all shadow-luxury-sm">
                <Share2 size={20} />
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT CONTENT: Gallery & Details */}
          <div className="lg:col-span-8 space-y-16">
            {/* Gallery */}
            <section className="relative group">
              <div className="aspect-[16/9] rounded-[3.5rem] overflow-hidden shadow-luxury-2xl border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=1200"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt="Honda SH 150i"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
              </div>
              <div className="absolute bottom-6 right-6 flex gap-3">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="h-20 w-32 rounded-2xl overflow-hidden border-2 border-white shadow-luxury-lg cursor-pointer hover:scale-105 transition-transform">
                      <img src={`https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=200&sig=${i}`} className="h-full w-full object-cover" />
                   </div>
                 ))}
                 <div className="h-20 w-32 rounded-2xl bg-primary/95 flex flex-col items-center justify-center text-white cursor-pointer hover:bg-cta transition-colors">
                    <span className="text-xl font-bold">+12</span>
                    <span className="text-[8px] font-black uppercase tracking-widest">Ảnh chi tiết</span>
                 </div>
              </div>
            </section>

            {/* Title & Stats */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                 <div className="h-1 w-10 bg-cta rounded-full" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cta italic">The Elite Choice</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                   <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter mb-4 leading-none">
                    Honda <span className="text-cta">SH 150i</span> ABS
                   </h1>
                   <div className="flex flex-wrap items-center gap-8 text-primary/40">
                      <div className="flex items-center gap-2">
                        <div className="flex text-cta">
                          {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                        <span className="text-sm font-black text-primary italic">5.0 <span className="text-primary/20 font-medium">/ 324 chuyến</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                         <div className="h-8 w-8 rounded-lg bg-primary/5 flex items-center justify-center text-cta">
                           <MapPin size={16} />
                         </div>
                         <p className="text-sm font-bold text-primary">Quy Nhơn Elite Hub</p>
                      </div>
                   </div>
                </div>
                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-[2rem] border border-primary/5 shadow-luxury-sm">
                   <ShieldCheck size={20} className="text-emerald-500" />
                   <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-primary/30 leading-none mb-1">Bảo hiểm</p>
                      <p className="text-xs font-bold text-primary leading-none">Elite Shield 2026 Ready</p>
                   </div>
                </div>
              </div>
            </section>

            {/* Description */}
            <div className="grid md:grid-cols-2 gap-12 border-t border-primary/5 pt-12">
               <div className="space-y-6">
                  <h3 className="text-xl font-black text-primary uppercase tracking-widest">Tuyệt tác di chuyển</h3>
                  <p className="text-primary/50 leading-relaxed font-medium">
                    Honda SH 150i ABS 2026 định nghĩa lại chuẩn mực của dòng xe tay ga hạng sang. Với khối động cơ eSP+ thế mạnh, hệ thống kiểm soát lực kéo HSTC và phanh ABS đôi, mỗi hành trình của bạn tại Quy Nhơn không chỉ là di chuyển, mà là một trải nghiệm phong cách sống thượng lưu.
                  </p>
               </div>
               <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Động cơ", val: "157.1cc eSP+", icon: <Clock size={18}/> },
                    { label: "Công suất", val: "16.0 HP / 8500", icon: <Star size={18}/> },
                    { label: "Tiêu thụ", val: "2.2L / 100km", icon: <CreditCard size={18}/> },
                    { label: "Tiện ích", val: "Smart Key / USB", icon: <ShieldCheck size={18}/> }
                  ].map((item, idx) => (
                    <div key={idx} className="p-5 rounded-3xl bg-white border border-primary/5 flex flex-col gap-4">
                       <div className="h-10 w-10 rounded-xl bg-primary/5 text-cta flex items-center justify-center">
                          {item.icon}
                       </div>
                       <div>
                          <p className="text-[9px] font-black text-primary/30 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                          <p className="text-xs font-bold text-primary">{item.val}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Comments */}
            <section className="bg-white p-12 rounded-[3.5rem] border border-primary/5 shadow-luxury-lg">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-2xl font-black text-primary uppercase tracking-widest flex items-center gap-4">
                  <MessageSquare size={24} className="text-cta"/> Cảm nhận khách hàng
                </h2>
                <button className="text-[10px] font-black text-cta uppercase tracking-widest border-b-2 border-cta/20 pb-1">Xem tất cả</button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  { name: "Lâm Đình Duy", date: "Hôm qua", content: "Dịch vụ quá chuyên nghiệp, xe mới coong. Chắc chắn sẽ quay lại!", avatar: "2" },
                  { name: "Phạm Minh Tâm", date: "3 ngày trước", content: "Lấy xe nhanh, tư vấn nhiệt tình. Cung đường ven biển thật tuyệt vời.", avatar: "5" }
                ].map((comment, i) => (
                  <div key={i} className="bg-[#FAF9F6] rounded-[2.5rem] p-8 relative">
                    <div className="flex items-center gap-4 mb-6">
                       <img src={`https://i.pravatar.cc/100?img=${comment.avatar}`} className="h-12 w-12 rounded-2xl object-cover shadow-soft-sm" alt="" />
                       <div>
                          <p className="text-sm font-black text-primary">{comment.name}</p>
                          <p className="text-[10px] text-primary/30 italic">{comment.date}</p>
                       </div>
                    </div>
                    <p className="text-sm text-primary/60 leading-relaxed font-medium italic">"{comment.content}"</p>
                  </div>
                ))}
              </div>

              {/* Comment Input Mock */}
              <div className="relative">
                 <input 
                  type="text" 
                  placeholder="Chia sẻ trải nghiệm đẳng cấp của bạn..." 
                  className="w-full h-20 pl-8 pr-32 rounded-[2.5rem] bg-[#FAF9F6] border border-primary/5 outline-none focus:border-cta/20 transition-all font-bold text-sm"
                 />
                 <button className="absolute right-3 top-3 bottom-3 px-8 rounded-2xl bg-primary text-white text-[10px] font-black uppercase tracking-widest hover:bg-cta transition-colors">Gửi đi</button>
              </div>
            </section>
          </div>

          {/* RIGHT CONTENT: Booking Flow Side */}
          <aside className="lg:col-span-4 relative">
            <div className="sticky top-10 flex flex-col gap-8">
              
              {/* Main Booking Interface */}
              <div className="glass-card bg-white rounded-[3.5rem] border border-primary/5 shadow-luxury-2xl overflow-hidden">
                <div className="p-10 space-y-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary tracking-tighter">350.000đ</span>
                    <span className="text-sm text-primary/30 font-black uppercase tracking-widest">/ Ngày</span>
                  </div>

                  <div className="space-y-4">
                      <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-primary/5 group transition-all hover:bg-white hover:border-cta/20">
                        <label className="text-[9px] font-black uppercase tracking-widest text-primary/30 mb-3 block italic">Bắt đầu hành trình</label>
                        <div className="flex items-center gap-3">
                            <Calendar size={18} className="text-cta" />
                            <input 
                              type="date" 
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                              className="bg-transparent text-sm font-bold text-primary outline-none cursor-pointer uppercase"
                            />
                        </div>
                      </div>
                      <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-primary/5 group transition-all hover:bg-white hover:border-cta/20">
                        <label className="text-[9px] font-black uppercase tracking-widest text-primary/30 mb-3 block italic">Trả máy tại Hub</label>
                        <div className="flex items-center gap-3">
                            <Calendar size={18} className="text-primary/20 group-hover:text-cta transition-colors" />
                            <input 
                              type="date" 
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                              className="bg-transparent text-sm font-bold text-primary outline-none cursor-pointer uppercase"
                            />
                        </div>
                      </div>
                  </div>

                  <div className="flex justify-between items-end bg-cta/5 p-6 rounded-3xl border border-cta/10">
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-cta mb-1 italic">Tổng tạm tính ({days} ngày)</p>
                        <p className="text-2xl font-bold text-primary">{totalPrice}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Elite Shield Ready</p>
                      </div>
                  </div>

                  <button 
                    onClick={startBooking}
                    className="luxury-btn-primary w-full py-6 flex items-center justify-center gap-4 text-xs font-black tracking-[0.4em] shadow-luxury-xl group"
                  >
                    BẮT ĐẦU ĐẶT XE
                    <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center justify-center gap-6 pt-4 text-primary/30">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={14} />
                        <span className="text-[9px] font-bold uppercase tracking-widest">Elite Verified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span className="text-[9px] font-bold uppercase tracking-widest">Hủy miễn phí</span>
                      </div>
                  </div>
                </div>
              </div>

              {/* Policy Quick Card */}
              {/* ... same as before ... */}

              {/* Policy Quick Card */}
              <div className="glass-card bg-primary text-white p-10 rounded-[3.5rem] shadow-luxury-2xl group overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700" />
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-cta">Elite Standard</h4>
                <div className="space-y-8">
                   {[
                     { title: "Kiểm định định kỳ", text: "1.000km / lần", icon: <ShieldCheck size={16}/> },
                     { title: "Hỗ trợ ven biển", text: "24/7 Elite Hub", icon: <Phone size={16}/> },
                     { title: "Độ mới động cơ", text: "Trên 95%", icon: <AlertCircle size={16}/> }
                   ].map((p, i) => (
                     <div key={i} className="flex gap-5 items-start">
                        <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-cta shrink-0">{p.icon}</div>
                        <div>
                            <p className="text-xs font-bold text-white mb-1">{p.title}</p>
                            <p className="text-[10px] font-medium text-white/40 italic">{p.text}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
