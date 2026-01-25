'use client';

import { useState } from 'react';
import { MapPin, Calendar, Search } from 'lucide-react';

export default function BookingForm() {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, pickupDate, returnDate });
  };

  return (
    <section id="booking" className="relative z-30 -mt-16 pb-16">
      <div className="container">
        <div className="bg-white rounded-luxury-xl shadow-luxury-xl border border-primary/10 p-6">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4" onSubmit={handleSubmit}>
            
            {/* Location */}
            <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-primary/10 group">
              <label className="block text-xs font-semibold uppercase tracking-wider text-rich-text/40 mb-2 whitespace-nowrap">
                Điểm Nhận Xe
              </label>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0" />
                <select 
                  className="w-full bg-transparent border-none outline-none font-medium text-rich-text cursor-pointer"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                >
                  <option value="">Chọn địa điểm...</option>
                  <option value="office">Văn phòng trung tâm</option>
                  <option value="airport">Sân bay Quy Nhơn</option>
                  <option value="station">Ga Quy Nhơn</option>
                </select>
              </div>
            </div>

            {/* Pickup Date */}
            <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-primary/10 group">
              <label className="block text-xs font-semibold uppercase tracking-wider text-rich-text/40 mb-2 whitespace-nowrap">
                Ngày Bắt Đầu
              </label>
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-primary flex-shrink-0" />
                <input 
                  type="date" 
                  className="w-full bg-transparent border-none outline-none font-medium text-rich-text cursor-pointer"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Return Date */}
            <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-primary/10 group">
              <label className="block text-xs font-semibold uppercase tracking-wider text-rich-text/40 mb-2 whitespace-nowrap">
                Ngày Trả Xe
              </label>
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-primary flex-shrink-0" />
                <input 
                  type="date" 
                  className="w-full bg-transparent border-none outline-none font-medium text-rich-text cursor-pointer"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <div className="p-2 flex items-center">
              <button 
                type="submit" 
                className="luxury-btn-primary w-full flex items-center justify-center gap-2"
              >
                <Search size={18} />
                <span className="whitespace-nowrap">Tìm Kiếm</span>
              </button>
            </div>
          </form>
        </div>
        
        {/* Benefits */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 opacity-60">
           {['Giao xe miễn phí', 'Bảo hiểm toàn diện', 'Xe mới 100%', 'Hỗ trợ 24/7'].map(hint => (
             <div key={hint} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-xs font-medium text-rich-text/60">{hint}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
