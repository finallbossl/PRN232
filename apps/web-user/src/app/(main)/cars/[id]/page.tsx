'use client';

import Link from 'next/link';
import { 
  Star, MapPin, Share2, Heart, ShieldCheck, 
  Zap, Fuel, Gauge, Droplets, CheckCircle2, 
  Info, ShieldAlert, Award, Calendar, Clock,
  ArrowRight, CreditCard, ChevronRight, MessageSquare
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CarDetailPage() {
  return (
    <main className="bg-background relative min-h-screen pb-40">
      {/* Editorial Navigation */}
      <div className="container pt-12">
        <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] text-primary/20 mb-12">
          <Link href="/" className="hover:text-cta transition-colors">Home</Link>
          <ChevronRight size={10} className="text-primary/10" />
          <Link href="/cars" className="hover:text-cta transition-colors">Elite Fleet</Link>
          <ChevronRight size={10} className="text-primary/10" />
          <span className="text-cta">Honda SH 150i Edition</span>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-24">
          
          {/* Curated Content & Visuals */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* 1. Immersive Gallery */}
            <section>
              <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-[4.5rem] shadow-luxury-xl border-[12px] border-white/50 bg-white/40 backdrop-blur-md">
                <img 
                  src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=1200" 
                  alt="Honda SH 150i Essential" 
                  className="h-full w-full object-cover transition-transform duration-[8s] group-hover:scale-105"
                />
                <div className="absolute top-10 right-10 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                   <button className="h-14 w-14 flex items-center justify-center rounded-luxury glass-card border-white/40 text-primary transition-all hover:bg-cta hover:text-white shadow-luxury-xl"><Share2 size={22}/></button>
                   <button className="h-14 w-14 flex items-center justify-center rounded-luxury glass-card border-white/40 text-primary transition-all hover:bg-red-500 hover:text-white shadow-luxury-xl"><Heart size={22}/></button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-8 mt-10">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-[4/3] overflow-hidden rounded-[2rem] border-4 border-white shadow-soft-lg transition-all hover:shadow-luxury-xl hover:-translate-y-2 cursor-pointer liquid-hover">
                    <img 
                      src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1591637333184-19aa84b3e01f' : '1558981403-c5f91cbba527'}?auto=format&fit=crop&q=80&w=400`} 
                      alt={`Elite Perspective ${i}`} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* 2. Identity & Status */}
            <section>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card bg-cta/5 border border-cta/10 text-cta mb-8 shadow-soft-sm">
                 <Award size={16} />
                 <span className="text-[10px] font-black uppercase tracking-[0.3em]">Pinnacle Collection</span>
              </div>
              
              <h1 className="font-heading text-6xl lg:text-8xl font-bold text-primary tracking-tight leading-[0.85] mb-10">
                Honda <br/>
                <span className="text-cta italic font-normal">SH 150i ABS</span>
              </h1>

              <div className="flex flex-wrap items-center gap-12 border-b border-primary/5 pb-16">
                 <div className="flex items-center gap-5">
                    <div className="flex gap-1.5 text-cta">
                       {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                    </div>
                    <span className="text-sm font-black text-primary">5.0 <span className="opacity-20 font-medium ml-2">/ 256 Elite Reviews</span></span>
                 </div>
                 <div className="flex items-center gap-4 text-primary/40">
                    <div className="h-2 w-2 rounded-full bg-cta animate-ping" />
                    <span className="text-xs font-black uppercase tracking-widest">Available in Central Hub</span>
                 </div>
              </div>
            </section>

            {/* 3. Specification Grid */}
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { icon: Zap, l: 'DRIVETRAIN', v: 'Automatic V' },
                 { icon: Fuel, l: 'FUEL TYPE', v: '95 Premium' },
                 { icon: Gauge, l: 'DISPLACEMENT', v: '157cc eSP+' },
                 { icon: Droplets, l: 'EFFICIENCY', v: '2.2L / 100km' },
               ].map(s => (
                 <div key={s.l} className="glass-card p-10 rounded-[3rem] text-center border-white/60 shadow-luxury-xl bg-white/40">
                    <s.icon size={28} className="text-cta mb-6 mx-auto" />
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/20 mb-3">{s.l}</p>
                    <p className="text-sm font-black uppercase tracking-widest text-primary">{s.v}</p>
                 </div>
               ))}
            </section>

            {/* 4. Experience Narrative */}
            <section className="space-y-16">
              <div>
                 <h2 className="font-heading text-4xl font-bold text-primary mb-10 tracking-tight">The Experience</h2>
                 <p className="text-xl leading-[1.8] text-primary/50 font-medium max-w-3xl italic">
                   &quot;Honda SH 150i không chỉ là phương tiện, đó là một tuyên ngôn về phong cách sống. Với kỹ thuật chuẩn xác từ Nhật Bản và thiết kế tối giản sang trọng, mỗi hành trình của bạn sẽ trở thành một trải nghiệm nghệ thuật thực thụ.&quot;
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 {[
                   { icon: ShieldCheck, t: 'Dual-Channel ABS', d: 'Kiểm soát tuyệt đối trên mọi địa hình trơn trượt.' },
                   { icon: Zap, t: 'Enhanced Smartkey', d: 'Bảo mật đa tầng với hệ thống định vị thông minh.' },
                   { icon: CreditCard, t: 'USB-C Integration', d: 'Giữ năng lượng cho các thiết bị ghi hình chuyên nghiệp.' },
                   { icon: Info, t: '28L Elite Storage', d: 'Không gian rộng rãi cho mũ bảo hiểm và phụ kiện du hành.' }
                 ].map(f => (
                   <div key={f.t} className="flex gap-8 p-10 rounded-[3rem] bg-white border border-primary/5 shadow-soft-lg transition-all hover:shadow-luxury-xl">
                      <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-background text-cta shrink-0 shadow-soft-md"><f.icon size={24} /></div>
                      <div>
                         <h4 className="font-black text-primary uppercase tracking-widest text-xs mb-3">{f.t}</h4>
                         <p className="text-sm text-primary/40 leading-relaxed font-medium italic">&quot;{f.d}&quot;</p>
                      </div>
                   </div>
                 ))}
              </div>
            </section>

            {/* 5. Elite Concierge */}
            <section className="relative glass-card p-16 rounded-[5rem] bg-primary text-white overflow-hidden border-none shadow-luxury-xl">
               <div className="absolute top-[-20%] right-[-10%] w-80 h-80 bg-cta/20 blur-[130px] rounded-full" />
               <div className="relative z-10 flex flex-col md:flex-row items-center gap-14">
                  <div className="h-32 w-32 rounded-[3.5rem] overflow-hidden border-[6px] border-white/20 shadow-luxury-xl">
                     <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=300" alt="Elite Concierge" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                     <p className="text-[10px] font-black uppercase tracking-[0.5em] text-cta mb-4">Master Concierge</p>
                     <h3 className="font-heading text-4xl font-bold mb-6 tracking-tight">Host: Julian Alexander</h3>
                     <div className="flex flex-wrap justify-center md:justify-start gap-8 text-[10px] font-black text-white/30 tracking-[0.2em] uppercase">
                        <span className="flex items-center gap-2"><div className="h-1 w-1 rounded-full bg-cta"/> REPOSNSE: 100%</span>
                        <span className="flex items-center gap-2"><div className="h-1 w-1 rounded-full bg-cta"/> VERIFIED: ELITE</span>
                     </div>
                  </div>
                  <button className="luxury-btn-primary bg-white text-cta hover:bg-background border-none px-12 py-5 shadow-luxury-xl">CONTACT HOST</button>
               </div>
            </section>

          </div>

          {/* 6. Investment & Reservation Sidebar */}
          <aside className="lg:col-span-4 mt-20 lg:mt-0">
             <div className="sticky top-32 space-y-12">
                <div className="glass-card p-14 rounded-[4rem] shadow-luxury-xl border-white/50 bg-white/60 backdrop-blur-3xl border-[10px]">
                   <div className="flex items-baseline gap-2 mb-12 pb-10 border-b border-primary/5">
                      <span className="font-heading text-6xl font-black text-primary italic">350k</span>
                      <span className="text-sm font-black text-primary/10 tracking-[0.3em] uppercase ml-2">/ Day</span>
                   </div>

                   <form className="space-y-10">
                      <div className="group">
                         <label className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/30 mb-4 block group-focus-within:text-cta transition-colors">Commencement</label>
                         <div className="relative flex items-center gap-5 px-8 py-5 rounded-[2rem] bg-background border border-transparent focus-within:border-cta/20 transition-all shadow-soft-sm">
                            <Calendar size={20} className="text-cta" />
                            <input type="datetime-local" className="bg-transparent border-none outline-none font-bold text-sm text-primary w-full cursor-pointer" defaultValue="2026-01-25T08:00" />
                         </div>
                      </div>

                      <div className="group">
                         <label className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/30 mb-4 block group-focus-within:text-cta transition-colors">Completion</label>
                         <div className="relative flex items-center gap-5 px-8 py-5 rounded-[2rem] bg-background border border-transparent focus-within:border-cta/20 transition-all shadow-soft-sm">
                            <Clock size={20} className="text-cta" />
                            <input type="datetime-local" className="bg-transparent border-none outline-none font-bold text-sm text-primary w-full cursor-pointer" defaultValue="2026-01-27T18:00" />
                         </div>
                      </div>

                      <div className="pt-10 space-y-6">
                         <div className="flex justify-between items-center text-[10px] font-black text-primary/20 uppercase tracking-[0.3em]">
                            <span>Rental Cycle</span>
                            <span className="text-primary">2.5 Days Elite</span>
                         </div>
                         <div className="flex justify-between items-center text-2xl font-bold text-primary">
                            <span className="font-heading italic">Investment</span>
                            <span className="text-cta font-black">875,000 đ</span>
                         </div>
                      </div>

                      <button className="luxury-btn-primary w-full flex items-center justify-center gap-5 py-6 mt-6 shadow-luxury-xl rounded-[2.5rem]">
                         <span className="text-xs">SECURE RESERVATION</span>
                         <ArrowRight size={20} />
                      </button>
                   </form>

                   <div className="mt-12 flex items-center gap-4 text-[9px] font-black text-primary/10 uppercase tracking-[0.4em] text-center justify-center">
                      <ShieldCheck size={18} className="text-cta/40" />
                      Encrypted Blockchain Verification
                   </div>
                </div>

                {/* Legacy Policy Advisory */}
                <div className="p-12 rounded-[4rem] bg-primary/5 border border-primary/10 backdrop-blur-xl">
                   <h4 className="font-heading text-2xl font-bold text-primary mb-8 flex items-center gap-4">
                      <ShieldAlert size={24} className="text-cta" />
                      Legacy Covenants
                   </h4>
                   <ul className="space-y-6">
                      {['Official Government Identity Required', '6-Hour Grace Period on Returns', 'Pinnacle Damage Waiver (PDW) Included'].map(t => (
                        <li key={t} className="flex gap-5 text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] leading-relaxed">
                           <span className="h-1.5 w-1.5 rounded-full bg-cta mt-1.5 shrink-0" />
                           {t}
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
