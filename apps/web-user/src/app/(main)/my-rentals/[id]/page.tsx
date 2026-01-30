'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  CreditCard, 
  MessagesSquare, 
  Phone, 
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data fetching logic
const getRentalById = (id: string) => {
  return {
    id: id,
    bikeName: 'Honda CBR1000RR-R Fireblade SP',
    bikeImage: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1200',
    status: 'active',
    statusLabel: 'Chuyến đi đang diễn ra',
    startDate: '12/05/2026',
    startTime: '08:00 AM',
    endDate: '15/05/2026',
    endTime: '08:00 PM',
    location: 'Elite Hub - 123 Lê Lợi, Quy Nhơn',
    totalPrice: '12.500.000 VNĐ',
    paymentStatus: 'Đã thanh toán (Online)',
    insurance: 'Elite Premium Shield (Gói mở rộng)',
    timeline: [
      { label: 'Đã đặt xe', time: '10/05/2026 14:20', completed: true },
      { label: 'Xác nhận hồ sơ', time: '10/05/2026 15:10', completed: true },
      { label: 'Nhận xe tại Hub', time: '12/05/2026 08:00', completed: true },
      { label: 'Đang trải nghiệm', time: 'Hiện tại', completed: false, current: true },
      { label: 'Trả xe dự kiến', time: '15/05/2026 20:00', completed: false },
    ],
    concierge: {
      name: 'Nguyễn Văn Anh',
      role: 'Elite Concierge Level 3',
      avatar: 'https://i.pravatar.cc/150?img=11',
      phone: '+84 905 123 456'
    }
  };
};

export default function RentalDetailPage() {
  const { id } = useParams() as { id: string };
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const [rental, setRental] = useState<any>(null);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      setRental(getRentalById(id));
    }
  }, [isLoggedIn, id, router]);

  if (!isLoggedIn || !rental) return null;

  return (
    <section className="min-h-screen bg-[#FAF9F6] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Back and Title */}
        <div className="mb-12">
          <Link 
            href="/my-rentals" 
            className="inline-flex items-center gap-2 text-primary/40 hover:text-cta transition-colors font-black text-[10px] uppercase tracking-widest mb-6"
          >
            <ArrowLeft size={16} />
            Quay lại danh sách
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Chi tiết <span className="text-cta">Hành trình</span> {rental.id}</h1>
            <div className={cn(
              "px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 backdrop-blur-md shadow-luxury-sm",
              rental.status === 'active' ? "bg-cta text-white" : "bg-white text-primary border border-primary/5"
            )}>
              <Clock size={16} />
              {rental.statusLabel}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8">
            {/* Vehicle Hero Card */}
            <div className="glass-card bg-white rounded-[3rem] overflow-hidden border border-primary/5 shadow-luxury-lg">
              <div className="h-96 relative">
                 <img src={rental.bikeImage} alt={rental.bikeName} className="h-full w-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                 <div className="absolute bottom-10 left-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{rental.bikeName}</h2>
                    <p className="text-white/60 font-medium">Phiên bản Elite đặc biệt | 2026 Edition</p>
                 </div>
              </div>
              
              <div className="p-10 grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary/30 uppercase text-[9px] font-black tracking-widest">
                    <MapPin size={14} /> Điểm lấy xe
                  </div>
                  <p className="text-sm font-bold text-primary leading-relaxed">{rental.location}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary/30 uppercase text-[9px] font-black tracking-widest">
                    <Calendar size={14} /> Thời gian thuê
                  </div>
                  <p className="text-sm font-bold text-primary">{rental.startDate} — {rental.endDate}</p>
                  <p className="text-[10px] text-cta font-black italic tracking-widest">{rental.startTime} | {rental.endTime}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary/30 uppercase text-[9px] font-black tracking-widest">
                    <ShieldCheck size={14} /> Bảo hiểm
                  </div>
                  <p className="text-sm font-bold text-primary">{rental.insurance}</p>
                </div>
              </div>
            </div>

            {/* Status Timeline */}
            <div className="glass-card bg-white p-10 rounded-[3rem] border border-primary/5 shadow-luxury-md">
              <h3 className="text-lg font-black text-primary uppercase tracking-widest mb-10">Tiến trình hành trình</h3>
              <div className="relative space-y-8 pl-10">
                 {/* Timeline Line */}
                 <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-primary/5" />
                 
                 {rental.timeline.map((step: any, idx: number) => (
                   <div key={idx} className="relative">
                      {/* Timeline Dot */}
                      <div className={cn(
                        "absolute -left-10 h-7 w-7 rounded-full border-4 border-white shadow-soft-sm flex items-center justify-center transition-all z-10",
                        step.completed ? "bg-emerald-500" : (step.current ? "bg-cta animate-pulse" : "bg-primary/10")
                      )}>
                        {step.completed && <CheckCircle2 size={12} className="text-white" />}
                        {step.current && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                      </div>
                      
                      <div className="flex justify-between items-center gap-4">
                         <div>
                            <p className={cn(
                              "text-xs font-black uppercase tracking-widest",
                              step.completed ? "text-emerald-600" : (step.current ? "text-cta" : "text-primary/30")
                            )}>
                              {step.label}
                            </p>
                            <p className="text-[11px] font-medium text-primary/40 mt-1">{step.time}</p>
                         </div>
                         {step.current && (
                           <span className="text-[9px] font-black px-3 py-1 bg-cta/10 text-cta rounded-full uppercase tracking-widest">Đang xử lý</span>
                         )}
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-8">
            {/* Payment Summary */}
            <div className="glass-card bg-white p-10 rounded-[3rem] border border-primary/5 shadow-luxury-lg">
              <h3 className="text-lg font-black text-primary uppercase tracking-widest mb-8">Bản kê chi phí</h3>
              <div className="space-y-4 pb-8 mb-8 border-b border-primary/5">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary/40">Tiền thuê xe (3 ngày)</span>
                  <span className="text-sm font-bold text-primary">10.500.000 VNĐ</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary/40">Bảo hiểm Elite Premium</span>
                  <span className="text-sm font-bold text-primary">1.500.000 VNĐ</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary/40">Phí dịch vụ Hub</span>
                  <span className="text-sm font-bold text-primary">500.000 VNĐ</span>
                </div>
              </div>
              <div className="flex justify-between items-end mb-8">
                 <div>
                    <h4 className="text-[10px] font-black text-primary/30 uppercase tracking-[0.3em] mb-1">Tổng cộng</h4>
                    <p className="text-2xl font-bold text-cta">{rental.totalPrice}</p>
                 </div>
                 <div className="text-right">
                    <div className="flex items-center gap-2 text-emerald-500 font-black text-[9px] uppercase tracking-widest">
                       <CreditCard size={12} /> {rental.paymentStatus}
                    </div>
                 </div>
              </div>
              <button className="w-full py-4 rounded-2xl bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-3">
                 <FileText size={16} /> Tải biên nhận (PDF)
              </button>
            </div>

            {/* Concierge Support */}
            <div className="glass-card bg-primary text-white p-10 rounded-[3rem] shadow-luxury-2xl relative overflow-hidden group">
              {/* Decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700" />
              
              <h3 className="text-lg font-black uppercase tracking-widest mb-8 relative z-10">Elite Concierge</h3>
              <div className="flex items-center gap-5 mb-8 relative z-10">
                 <div className="h-16 w-16 rounded-[1.5rem] overflow-hidden border-2 border-white/20 shadow-luxury-md">
                    <img src={rental.concierge.avatar} alt="Concierge" className="h-full w-full object-cover" />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-white mb-1">{rental.concierge.name}</h4>
                    <p className="text-[10px] font-black text-cta uppercase tracking-widest">{rental.concierge.role}</p>
                 </div>
              </div>
              <p className="text-sm text-white/40 mb-10 leading-relaxed font-medium relative z-10">
                Chuyên viên Concierge này đang trực tiếp theo dõi hành trình của bạn và sẵn sàng hỗ trợ 24/7 cho bất kỳ yêu cầu nào.
              </p>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                 <a 
                  href={`tel:${rental.concierge.phone}`}
                  className="py-4 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-primary transition-all flex items-center justify-center gap-3 text-[10px] font-black tracking-widest text-center"
                 >
                   <Phone size={14} /> GỌI NGAY
                 </a>
                 <button className="py-4 rounded-2xl bg-cta hover:bg-white hover:text-primary text-white transition-all flex items-center justify-center gap-3 text-[10px] font-black tracking-widest text-center">
                   <MessagesSquare size={14} /> NHẮN TIN
                 </button>
              </div>
            </div>

            {/* Help Link */}
            <div className="px-10 py-6 bg-white/50 rounded-3xl border border-primary/5 flex items-center justify-between group cursor-pointer hover:bg-white transition-all shadow-sm">
               <div className="flex items-center gap-4">
                  <HelpCircle size={20} className="text-primary/20 group-hover:text-cta transition-colors" />
                  <span className="text-xs font-bold text-primary/60 group-hover:text-primary transition-colors">Cần giúp đỡ về chuyến đi?</span>
               </div>
               <ChevronRight size={16} className="text-primary/20 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
