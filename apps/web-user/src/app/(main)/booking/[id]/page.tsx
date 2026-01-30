'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef, useMemo, Suspense } from 'react';
import Link from 'next/link';
import {
  Star, MapPin, Calendar, Clock, ShieldCheck,
  Heart, Share2, MessageSquare, ChevronRight, 
  ArrowLeft, User, Phone, FileText, Upload, 
  CreditCard, CheckCircle2, X, AlertCircle, Camera,
  ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FAF9F6] pt-32 flex items-center justify-center">
        <div className="h-20 w-20 border-4 border-cta border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <BookingContent />
    </Suspense>
  );
}

function BookingContent() {
  const { isLoggedIn, user: authUser } = useAuth();
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  
  // Get initial dates from query params or defaults
  const initialStart = searchParams.get('start') || "2026-05-12";
  const initialEnd = searchParams.get('end') || "2026-05-15";

  // Booking State - Dates
  const [startDate, setStartDate] = useState(initialStart);
  const [endDate, setEndDate] = useState(initialEnd);

  // Data for Booking (Mock)
  const bikeData = {
    name: "Honda SH 150i ABS",
    image: "https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=1200",
    location: "Quy Nhơn Elite Hub",
    price: "350.000đ/ngày",
    rating: "5.0",
    reviews: "324"
  };

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

  const [bookingData, setBookingData] = useState({
    fullName: authUser?.name || '',
    phone: '',
    documentImage: null as string | null,
    paymentMethod: 'deposit'
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBookingData(prev => ({ ...prev, documentImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    setIsSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-[#FAF9F6] pt-32 pb-20 px-6 flex items-center justify-center">
        <div className="max-w-xl w-full text-center space-y-10 animate-in zoom-in-50 duration-700 bg-white p-16 rounded-[4rem] shadow-luxury-2xl border border-primary/5">
          <div className="relative mx-auto w-40 h-40">
             <div className="absolute inset-0 bg-emerald-500/10 rounded-[3rem] animate-ping duration-[3000ms]" />
             <div className="absolute inset-4 bg-emerald-500/20 rounded-[2.5rem] animate-pulse" />
             <div className="relative h-40 w-40 rounded-[3.5rem] bg-emerald-500 flex items-center justify-center text-white shadow-luxury-emerald-lg animate-bounce">
                <CheckCircle2 size={70} strokeWidth={2.5} />
             </div>
          </div>

          <div className="space-y-4">
             <h3 className="text-5xl font-bold text-primary tracking-tighter">Hành trình sẵn sàng!</h3>
             <div className="space-y-2">
                <p className="text-sm font-medium text-primary/40 italic">Mã đặt chỗ đẳng cấp của bạn</p>
                <div className="inline-flex items-center gap-3 px-8 py-3 bg-primary rounded-full">
                   <span className="text-xl font-black text-cta uppercase tracking-[0.3em]">#{Math.random().toString(36).substring(7).toUpperCase()}</span>
                </div>
             </div>
             <p className="text-xs font-medium text-primary/30 leading-relaxed max-w-sm mx-auto italic pt-4">
               Thông tin chi tiết đã được gửi tới email và thông báo trong ứng dụng. Chúng tôi sẽ liên hệ trong ít phút để hoàn tất bàn giao.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 pt-10">
             <Link 
                href="/my-rentals" 
                className="h-16 rounded-2xl bg-primary text-white text-[10px] font-black tracking-[0.3em] uppercase flex items-center justify-center gap-4 hover:bg-cta transition-all shadow-luxury-xl"
             >
                XEM HÀNH TRÌNH <ChevronRight size={16} />
             </Link>
             <Link 
                href="/cars"
                className="h-16 rounded-2xl border border-primary/10 text-[10px] font-black text-primary/40 tracking-[0.3em] uppercase hover:border-cta hover:text-cta transition-all flex items-center justify-center"
             >
                VỀ TRANG CHỦ
             </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <button onClick={() => router.back()} className="flex items-center gap-2 text-[10px] font-black text-primary/30 uppercase tracking-[0.4em] hover:text-cta transition-colors mb-4">
              <ArrowLeft size={14} /> Quay lại trang xe
            </button>
            <h1 className="text-6xl md:text-8xl font-bold text-primary tracking-tighter leading-none">
              Hoàn tất <span className="text-cta">Đặt xe</span>
            </h1>
            <p className="text-primary/40 text-sm font-medium italic">Vui lòng kiểm tra và cung cấp thông tin để xác thực hành trình Elite của bạn.</p>
          </div>
          <div className="flex items-center gap-6 bg-white px-8 py-6 rounded-[2.5rem] border border-primary/5 shadow-luxury-sm">
             <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="h-10 w-10 rounded-full border-4 border-white object-cover" />
                ))}
             </div>
             <p className="text-[10px] font-black text-primary/40 uppercase tracking-widest leading-relaxed">
               <span className="text-primary block">2.4k+ Thành viên</span>
               đã trải nghiệm hành trình này
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Booking Information Form */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Section 1: Member Identity */}
            <section className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-primary/5 shadow-luxury-lg space-y-10">
               <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-cta/10 flex items-center justify-center text-cta shadow-soft-sm">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Thông tin thành viên</h3>
                    <p className="text-xs text-primary/30 font-medium italic">Xác thực hồ sơ cho thủ tục bàn giao xe.</p>
                  </div>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                     <label className="absolute left-8 top-4 text-[9px] font-black text-primary/30 uppercase tracking-[0.2em] z-10">Họ và Tên</label>
                     <div className="flex items-center gap-4 h-20 pl-8 pr-6 rounded-[1.5rem] bg-[#FAF9F6] border border-primary/5 focus-within:border-cta/20 focus-within:ring-4 focus-within:ring-cta/5 transition-all shadow-inner-sm">
                        <User size={20} className="text-primary/10 group-focus-within:text-cta transition-colors" />
                        <input 
                          value={bookingData.fullName} 
                          onChange={(e) => setBookingData({...bookingData, fullName: e.target.value})} 
                          className="bg-transparent w-full outline-none font-bold text-primary text-base h-full pt-4" 
                        />
                     </div>
                  </div>
                  <div className="relative group">
                     <label className="absolute left-8 top-4 text-[9px] font-black text-primary/30 uppercase tracking-[0.2em] z-10">Số điện thoại</label>
                     <div className="flex items-center gap-4 h-20 pl-8 pr-6 rounded-[1.5rem] bg-[#FAF9F6] border border-primary/5 focus-within:border-cta/20 focus-within:ring-4 focus-within:ring-cta/5 transition-all shadow-inner-sm">
                        <Phone size={20} className="text-primary/10 group-focus-within:text-cta transition-colors" />
                        <input 
                          placeholder="0xxx xxx xxx" 
                          onChange={(e) => setBookingData({...bookingData, phone: e.target.value})} 
                          className="bg-transparent w-full outline-none font-bold text-primary text-base h-full pt-4" 
                        />
                     </div>
                  </div>
               </div>

               {/* Document Upload Area */}
               <div className="space-y-4">
                  <div className="flex items-baseline justify-between px-2">
                     <h4 className="text-[11px] font-black text-primary/40 uppercase tracking-widest italic flex items-center gap-2">
                        <Camera size={14} className="text-cta" /> Xác thực GPLX / CCCD
                     </h4>
                     <span className="text-[8px] font-black text-cta uppercase tracking-widest px-3 py-1 bg-cta/5 rounded-full">Yêu cầu gốc</span>
                  </div>
                  
                  {!bookingData.documentImage ? (
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="h-72 rounded-[2.5rem] border-2 border-dashed border-primary/10 bg-[#FAF9F6] flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-white hover:border-cta/40 transition-all group overflow-hidden relative shadow-soft-sm"
                    >
                       <div className="h-16 w-16 rounded-3xl bg-primary/5 flex items-center justify-center text-primary/20 group-hover:text-cta transition-all group-hover:scale-110 duration-500">
                          <Upload size={32} />
                       </div>
                       <div className="text-center">
                          <span className="text-sm font-bold text-primary mb-1 block">Tải tập tin hoặc chụp ảnh</span>
                          <p className="text-[10px] font-medium text-primary/30 uppercase tracking-widest italic">Kéo thả ảnh GPLX hoặc CCCD của bạn vào đây</p>
                       </div>
                       <input type="file" hidden ref={fileInputRef} accept="image/*" onChange={handleImageUpload} />
                    </div>
                  ) : (
                    <div className="relative h-72 rounded-[2.5rem] overflow-hidden border-2 border-cta shadow-luxury-xl animate-in zoom-in-95 duration-500">
                       <img src={bookingData.documentImage} className="w-full h-full object-cover" alt="Document" />
                       <div className="absolute inset-0 bg-black/20" />
                       <button 
                        onClick={() => setBookingData({...bookingData, documentImage: null})}
                        className="absolute top-6 right-6 h-12 w-12 rounded-2xl bg-white text-red-500 shadow-luxury-lg flex items-center justify-center hover:scale-110 transition-transform"
                       >
                          <X size={20} />
                       </button>
                       <div className="absolute bottom-6 left-6 right-6 bg-cta/95 backdrop-blur-md py-4 rounded-2xl text-center shadow-luxury-sm">
                          <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                            <CheckCircle2 size={14} /> Hình ảnh đã được xác thực
                          </span>
                       </div>
                    </div>
                  )}
               </div>
            </section>

            {/* Section 2: Payment Options */}
            <section className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-primary/5 shadow-luxury-lg space-y-10">
               <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-soft-sm">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Phương thức bảo đảm</h3>
                    <p className="text-xs text-primary/30 font-medium italic">Chọn hình thức đặt cọc Elite để giữ chỗ ngay.</p>
                  </div>
               </div>

               <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { id: 'deposit', label: 'Đặt cọc Elite Hub', price: (200000).toLocaleString('vi-VN') + " VNĐ", desc: 'Chỉ cọc phí giữ xe, thanh toán còn lại khi nhận xe.', icon: <CheckCircle2 size={18}/> },
                    { id: 'full', label: 'Thanh toán trọn gói', price: (totalPriceRaw * 0.95).toLocaleString('vi-VN') + " VNĐ", desc: 'Ưu đãi Elite giảm 5% khi thanh toán Online 100%.', icon: <Star size={18}/> }
                  ].map((method) => (
                    <div 
                      key={method.id}
                      onClick={() => setBookingData({...bookingData, paymentMethod: method.id})}
                      className={cn(
                        "p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer relative overflow-hidden group",
                        bookingData.paymentMethod === method.id 
                          ? "bg-primary border-primary shadow-luxury-2xl" 
                          : "bg-[#FAF9F6] border-primary/5 hover:border-cta/20 shadow-soft-sm"
                      )}
                    >
                      <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className={cn(
                          "h-10 w-10 rounded-xl border flex items-center justify-center transition-all duration-500",
                          bookingData.paymentMethod === method.id ? "border-cta bg-cta text-primary" : "border-primary/5 bg-white text-cta"
                        )}>
                           {method.icon}
                        </div>
                        {bookingData.paymentMethod === method.id && (
                          <div className="h-6 w-6 rounded-full bg-cta text-primary flex items-center justify-center">
                            <CheckCircle2 size={14} />
                          </div>
                        )}
                      </div>
                      <div className="relative z-10">
                        <p className={cn("text-[10px] font-black uppercase tracking-widest mb-1", bookingData.paymentMethod === method.id ? "text-cta" : "text-primary/30")}>{method.label}</p>
                        <p className={cn("text-2xl font-bold mb-3", bookingData.paymentMethod === method.id ? "text-white" : "text-primary")}>{method.price}</p>
                        <p className={cn("text-[10px] font-medium leading-relaxed italic", bookingData.paymentMethod === method.id ? "text-white/30" : "text-primary/20")}>{method.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>

               <div className="p-6 rounded-[2rem] bg-cta/5 border border-cta/10 flex items-center gap-5">
                  <div className="h-12 w-12 rounded-2xl bg-cta/10 flex items-center justify-center text-cta shrink-0 animate-pulse">
                     <AlertCircle size={24} />
                  </div>
                  <p className="text-[11px] font-bold text-cta leading-relaxed italic uppercase tracking-[0.1em]">
                    Thông báo: Thanh toán ngay 100% để nhận ngay gói Bảo hiểm Elite Shield Platinum trị giá 200.000đ hoàn toàn miễn phí!
                  </p>
               </div>
            </section>
          </div>

          {/* RIGHT: Order Summary Sticky */}
          <aside className="lg:col-span-5 sticky top-10">
             <div className="glass-card bg-white rounded-[3.5rem] border border-primary/5 shadow-luxury-2xl overflow-hidden">
                {/* Bike Summary Hero */}
                <div className="relative h-64 overflow-hidden">
                   <img src={bikeData.image} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                   <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between">
                      <div>
                         <h4 className="text-white text-3xl font-bold tracking-tighter leading-tight">{bikeData.name}</h4>
                         <div className="flex items-center gap-3 text-white/60 text-xs font-bold mt-1">
                            <span className="flex items-center gap-1 text-cta"><Star size={14} fill="currentColor" /> {bikeData.rating}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><MapPin size={14} /> {bikeData.location}</span>
                         </div>
                      </div>
                      <div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                         <ShieldCheck size={20} />
                      </div>
                   </div>
                </div>

                {/* Itinerary Details */}
                <div className="p-10 md:p-12 space-y-10">
                   <div className="space-y-6">
                      <h4 className="text-[10px] font-black text-primary/20 uppercase tracking-[0.4em] italic mb-4">Chi tiết hành trình</h4>
                      <div className="grid grid-cols-2 gap-8">
                         <div className="relative p-6 rounded-3xl bg-[#FAF9F6] border border-primary/5 group hover:bg-white hover:border-cta/20 transition-all">
                            <p className="text-[9px] font-black text-primary/30 uppercase tracking-widest mb-3">Nhận xe</p>
                            <div className="flex items-center gap-3">
                               <Calendar size={18} className="text-cta" />
                               <input 
                                type="date" 
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="bg-transparent text-xs font-bold text-primary outline-none uppercase cursor-pointer"
                               />
                            </div>
                         </div>
                         <div className="relative p-6 rounded-3xl bg-[#FAF9F6] border border-primary/5 group hover:bg-white hover:border-cta/20 transition-all">
                            <p className="text-[9px] font-black text-primary/30 uppercase tracking-widest mb-3">Trả xe</p>
                            <div className="flex items-center gap-3">
                               <Calendar size={18} className="text-primary/20 group-hover:text-cta transition-colors" />
                               <input 
                                type="date" 
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="bg-transparent text-xs font-bold text-primary outline-none uppercase cursor-pointer"
                               />
                            </div>
                         </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-6 rounded-3xl bg-cta/5 border border-cta/10">
                        <div className="flex items-center gap-3">
                           <Clock size={18} className="text-cta" />
                           <span className="text-xs font-bold text-primary italic uppercase tracking-widest">Thời gian thuê: {days} Ngày</span>
                        </div>
                        <ChevronDown size={14} className="text-cta/30" />
                      </div>
                   </div>

                   {/* Price Breakdown */}
                   <div className="pt-10 border-t border-primary/5 space-y-4">
                      <div className="flex justify-between items-center text-xs font-bold text-primary/40 uppercase tracking-widest px-2">
                         <span>Giá thuê xe ({days} ngày)</span>
                         <span className="text-primary">{totalPrice}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs font-bold text-primary/40 uppercase tracking-widest px-2">
                         <span>Phí dịch vụ Elite</span>
                         <span className="text-emerald-500">Miễn phí</span>
                      </div>
                      <div className="flex justify-between items-center text-xs font-bold text-primary/40 uppercase tracking-widest px-2">
                         <span>Bảo hiểm Elite Basic</span>
                         <span className="text-primary">Bao gồm</span>
                      </div>
                      
                      <div className="mt-8 p-8 rounded-3xl bg-primary text-white flex justify-between items-center shadow-luxury-xl relative overflow-hidden group">
                         <div className="absolute top-0 right-0 h-full w-40 bg-white/5 skew-x-[-20deg] translate-x-10 transition-transform group-hover:translate-x-0" />
                         <div className="relative z-10">
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cta mb-2 italic">Tổng thanh toán</p>
                            <p className="text-4xl font-bold tracking-tighter">{totalPrice.split(' ')[0]} <span className="text-lg font-medium text-white/40 italic">VNĐ</span></p>
                         </div>
                         <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-cta shadow-inner relative z-10">
                            <ShieldCheck size={28} />
                         </div>
                      </div>
                   </div>

                   <button 
                    disabled={!bookingData.fullName || !bookingData.documentImage}
                    onClick={handleSubmit}
                    className="luxury-btn-primary w-full py-7 flex items-center justify-center gap-4 text-xs font-black tracking-[0.4em] shadow-luxury-2xl group disabled:opacity-50 disabled:grayscale transition-all"
                   >
                     XÁC NHẬN ĐẶT XE NGAY
                     <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                   </button>
                   
                   <p className="text-center text-[10px] font-black text-primary/20 uppercase tracking-[0.3em] italic">
                     Bằng việc đặt xe, bạn đồng ý với <span className="text-cta">Điều khoản Elite</span> của chúng tôi.
                   </p>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
