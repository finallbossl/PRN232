'use client';

import './cars.css';
import '../home.css'; // Reuse car-card styles
import Link from 'next/link';

export default function CarsPage() {
  return (
    <main className="cars-page">
      {/* 1. Header & Title Section */}
      <section className="hero" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', background: 'linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.8)), url("https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=2000") center/cover' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>Thuê xe máy GoRide</h1>
          <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>Xe mới – Thủ tục đơn giản – Giá rõ ràng</p>
        </div>
      </section>

      <div className="cars-listing-container">
        {/* 2. Form chọn thuê xe */}
        <div className="listing-booking-bar container">
          <div className="form-group">
            <label>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Địa điểm nhận xe
            </label>
            <div className="field-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
            <select>
              <option>Văn phòng GoRide (Q. Hải Châu)</option>
              <option>Sân bay Đà Nẵng</option>
              <option>Ga Đà Nẵng</option>
              <option>Giao xe tận nơi</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Ngày & Giờ thuê
            </label>
            <div className="field-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <input type="datetime-local" defaultValue="2026-01-23T08:00" />
          </div>
          <div className="form-group">
            <label>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 10"/></svg>
              Thời gian thuê
            </label>
            <div className="field-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
            <select>
              <option>1 ngày</option>
              <option>2 ngày</option>
              <option>3 ngày</option>
              <option>Tuần (Giảm 15%)</option>
            </select>
          </div>
          <button className="form-submit-btn" style={{ borderRadius: 'var(--radius-lg)', boxShadow: '0 8px 20px rgba(13, 148, 136, 0.3)' }}>XEM XE</button>
        </div>

        <div className="listing-layout">
          {/* 4. Bộ lọc đơn giản */}
          <aside className="filter-sidebar">
            <div className="filter-group">
              <h4>Loại xe</h4>
              <label className="filter-option"><input type="checkbox" /> Xe tay ga</label>
              <label className="filter-option"><input type="checkbox" /> Xe số</label>
              <label className="filter-option"><input type="checkbox" /> Xe côn tay</label>
            </div>
            <div className="filter-group">
              <h4>Khoảng giá</h4>
              <label className="filter-option"><input type="checkbox" /> Dưới 150k</label>
              <label className="filter-option"><input type="checkbox" /> 150k - 250k</label>
              <label className="filter-option"><input type="checkbox" /> Trên 250k</label>
            </div>
          </aside>

          {/* 3. Danh sách xe máy */}
          <div className="listing-content">
            <div className="listing-grid">
               {/* Bike 1 */}
               <Link href="/cars/honda-sh-150i" className="car-card">
                  <div className="car-image-container">
                    <span className="car-badge">Cao cấp</span>
                    <img src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800" alt="SH" />
                  </div>
                  <div className="car-info">
                    <div className="car-info-header">
                      <div className="car-info-main">
                        <h3 className="car-name">Honda SH 150i ABS</h3>
                        <p className="car-type">Xe tay ga • 157cc</p>
                      </div>
                      <div className="car-price">
                        <span className="price-value">350k</span>
                        <p className="price-unit">/ngày</p>
                      </div>
                    </div>
                    <div className="car-rating">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      <span>5.0 (320+)</span>
                    </div>
                    <div className="btn-primary">Thuê xe ngay</div>
                  </div>
               </Link>

               {/* Bike 2 */}
               <Link href="/cars/honda-air-blade" className="car-card">
                  <div className="car-image-container">
                    <img src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=800" alt="AB" />
                  </div>
                  <div className="car-info">
                    <div className="car-info-header">
                      <div className="car-info-main">
                        <h3 className="car-name">Honda Air Blade 125</h3>
                        <p className="car-type">Xe tay ga • 125cc</p>
                      </div>
                      <div className="car-price">
                        <span className="price-value">150k</span>
                        <p className="price-unit">/ngày</p>
                      </div>
                    </div>
                    <div className="car-rating">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      <span>4.8 (850+)</span>
                    </div>
                    <div className="btn-primary">Thuê xe ngay</div>
                  </div>
               </Link>

               {/* Bike 3 */}
               <Link href="/cars/honda-winner-x" className="car-card">
                  <div className="car-image-container">
                    <span className="car-badge">Bán chạy</span>
                    <img src="https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&q=80&w=800" alt="Winner X" />
                  </div>
                  <div className="car-info">
                    <div className="car-info-header">
                      <div className="car-info-main">
                        <h3 className="car-name">Honda Winner X</h3>
                        <p className="car-type">Xe côn tay • 150cc</p>
                      </div>
                      <div className="car-price">
                        <span className="price-value">180k</span>
                        <p className="price-unit">/ngày</p>
                      </div>
                    </div>
                    <div className="car-rating">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      <span>4.9 (420+)</span>
                    </div>
                    <div className="btn-primary">Thuê xe ngay</div>
                  </div>
               </Link>

               {/* Bike 4 */}
               <Link href="/cars/yamaha-exciter" className="car-card">
                  <div className="car-image-container">
                    <img src="https://images.unsplash.com/photo-1449495169669-7b118f960237?auto=format&fit=crop&q=80&w=800" alt="Exciter" />
                  </div>
                  <div className="car-info">
                    <div className="car-info-header">
                      <div className="car-info-main">
                        <h3 className="car-name">Yamaha Exciter 155</h3>
                        <p className="car-type">Xe côn tay • 155cc</p>
                      </div>
                      <div className="car-price">
                        <span className="price-value">180k</span>
                        <p className="price-unit">/ngày</p>
                      </div>
                    </div>
                    <div className="car-rating">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      <span>4.7 (540+)</span>
                    </div>
                    <div className="btn-primary">Thuê xe ngay</div>
                  </div>
               </Link>

               {/* Bike 5 */}
               <Link href="/cars/honda-vision" className="car-card">
                  <div className="car-image-container">
                    <span className="car-badge">Ưa chuộng</span>
                    <img src="https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=800" alt="Vision" />
                  </div>
                  <div className="car-info">
                    <div className="car-info-header">
                      <div className="car-info-main">
                        <h3 className="car-name">Honda Vision 2024</h3>
                        <p className="car-type">Xe tay ga • 110cc</p>
                      </div>
                      <div className="car-price">
                        <span className="price-value">120k</span>
                        <p className="price-unit">/ngày</p>
                      </div>
                    </div>
                    <div className="car-rating">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      <span>4.9 (1.2k+)</span>
                    </div>
                    <div className="btn-primary">Thuê xe ngay</div>
                  </div>
               </Link>

               {/* Bike 6 */}
               <Link href="/cars/honda-lead" className="car-card">
                  <div className="car-image-container">
                    <img src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=800" alt="Lead" />
                  </div>
                  <div className="car-info">
                    <div className="car-info-header">
                      <div className="car-info-main">
                        <h3 className="car-name">Honda Lead 125</h3>
                        <p className="car-type">Xe tay ga • Cốp rộng</p>
                      </div>
                      <div className="car-price">
                        <span className="price-value">150k</span>
                        <p className="price-unit">/ngày</p>
                      </div>
                    </div>
                    <div className="car-rating">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      <span>4.8 (650+)</span>
                    </div>
                    <div className="btn-primary">Thuê xe ngay</div>
                  </div>
               </Link>

               {/* Bike 7 */}
               <Link href="/cars/yamaha-sirius" className="car-card">
                  <div className="car-image-container">
                    <img src="https://images.unsplash.com/photo-1542362567-b054cc42695e?auto=format&fit=crop&q=80&w=800" alt="Sirius" />
                  </div>
                  <div className="car-info">
                    <div className="car-info-header">
                      <div className="car-info-main">
                        <h3 className="car-name">Yamaha Sirius Fi</h3>
                        <p className="car-type">Xe số • Tiết kiệm</p>
                      </div>
                      <div className="car-price">
                        <span className="price-value">100k</span>
                        <p className="price-unit">/ngày</p>
                      </div>
                    </div>
                    <div className="car-rating">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      <span>4.7 (920+)</span>
                    </div>
                    <div className="btn-primary">Thuê xe ngay</div>
                  </div>
               </Link>

               {/* Bike 8 */}
               <Link href="/cars/honda-future" className="car-card">
                  <div className="car-image-container">
                    <img src="https://images.unsplash.com/photo-1595035306914-729906d4e460?auto=format&fit=crop&q=80&w=800" alt="Future" />
                  </div>
                  <div className="car-info">
                    <div className="car-info-header">
                      <div className="car-info-main">
                        <h3 className="car-name">Honda Future 125</h3>
                        <p className="car-type">Xe số • Cao cấp</p>
                      </div>
                      <div className="car-price">
                        <span className="price-value">130k</span>
                        <p className="price-unit">/ngày</p>
                      </div>
                    </div>
                    <div className="car-rating">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      <span>4.8 (310+)</span>
                    </div>
                    <div className="btn-primary">Thuê xe ngay</div>
                  </div>
               </Link>
            </div>
          </div>
        </div>

        {/* 5. Thông tin thuê xe */}
        <section className="info-section">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <h2 className="section-h2">Điều kiện thuê xe</h2>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-secondary)', lineHeight: '2' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-cta)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                   Căn cước công dân hoặc Passport (Bản gốc)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-cta)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                   Bằng lái xe máy hợp lệ (A1 hoặc A2)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-cta)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                   Chi phí thuê xe thanh toán trước khi nhận xe
                </li>
              </ul>
            </div>
            <div>
              <h2 className="section-h2">Chính sách & Trách nhiệm</h2>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-secondary)', lineHeight: '1.8' }}>
                <li><strong>Thời gian:</strong> 1 ngày thuê tính tròn 24 giờ.</li>
                <li><strong>Phí trễ giờ:</strong> 30.000đ/giờ (Trễ trên 6 giờ tính 1 ngày).</li>
                <li><strong>Trách nhiệm:</strong> Người thuê chịu trách nhiệm bảo quản xe và tuân thủ luật lệ giao thông.</li>
                <li>Xe luôn được kiểm tra kỹ thuật trước khi giao.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Quy trình thuê xe */}
        <section className="info-section">
          <h2 className="section-h2" style={{ textAlign: 'center' }}>Quy trình thuê xe đơn giản</h2>
          <div className="process-steps">
            <div className="step-box">
              <div className="step-num">1</div>
              <h4 style={{ fontWeight: 800 }}>Chọn xe</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Tìm mẫu xe phù hợp với nhu cầu và sở thích của bạn.</p>
            </div>
            <div className="step-box">
              <div className="step-num">2</div>
              <h4 style={{ fontWeight: 800 }}>Điền thông tin</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Cung cấp thông tin nhận xe và giấy tờ cần thiết.</p>
            </div>
            <div className="step-box">
              <div className="step-num">3</div>
              <h4 style={{ fontWeight: 800 }}>Xác nhận</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>GoRide sẽ liên hệ xác nhận đơn đặt xe của bạn trong 5 phút.</p>
            </div>
            <div className="step-box">
              <div className="step-num">4</div>
              <h4 style={{ fontWeight: 800 }}>Nhận xe</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Kiểm tra tình trạng xe và bắt đầu hành trình khám phá.</p>
            </div>
          </div>
        </section>

        {/* 7. CTA Chính */}
        <section style={{ textAlign: 'center', padding: 'var(--space-3xl) 0' }}>
           <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Bạn đã sẵn sàng cho hành trình mới?</h2>
           <button className="btn btn-primary" style={{ padding: '0 3rem', height: '60px', fontSize: '1.2rem' }}>THUÊ XE MÁY NGAY</button>
        </section>

      </div>
    </main>
  );
}
