'use client';

import Link from 'next/link';
import './home.css';

// ============================================
// MONOLITHIC PAGE.TSX - CODE CŨ (THAM KHẢO)
// File này chứa TẤT CẢ code trong một file duy nhất
// Không tách components, không tách data
// ============================================

export default function Home() {
  // ========== DATA HARD-CODED TRONG COMPONENT ==========
  const promoData = [
    {
      id: 1,
      badge: '20% OFF',
      title: 'Chào bạn mới',
      description: 'Giảm ngay 20% cho chuyến đi đầu tiên',
      image: 'https://images.unsplash.com/photo-1616634375264-2d2e17736a36?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      badge: '15% OFF',
      title: 'Cuối tuần rực rỡ',
      description: 'Thuê xe cuối tuần, nhận ưu đãi hấp dẫn',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8df0?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      badge: '100k OFF',
      title: 'Thanh toán qua thẻ',
      description: 'Ưu đãi từ đối tác ngân hàng',
      image: 'https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const featuredBikes = [
    {
      id: 1,
      name: 'Honda Vision 2024',
      type: 'Xe tay ga • 110cc',
      price: '120k',
      rating: 4.9,
      reviews: '1.2k+',
      image: 'https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=800',
      badge: 'Ưa chuộng',
      slug: 'honda-vision',
    },
    {
      id: 2,
      name: 'Air Blade 125cc',
      type: 'Xe tay ga • Thể thao',
      price: '150k',
      rating: 4.8,
      reviews: '850',
      image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=800',
      slug: 'honda-air-blade',
    },
    {
      id: 3,
      name: 'Honda SH 150i',
      type: 'Xe ga hạng sang',
      price: '350k',
      rating: 5.0,
      reviews: '320',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800',
      badge: 'Cao cấp',
      slug: 'honda-sh-150i',
    },
    {
      id: 4,
      name: 'Yamaha Exciter',
      type: 'Xe côn tay • 155 VVA',
      price: '180k',
      rating: 4.7,
      reviews: '540',
      image: 'https://images.unsplash.com/photo-1449495169669-7b118f960237?auto=format&fit=crop&q=80&w=800',
      slug: 'yamaha-exciter',
    },
  ];

  const locations = [
    {
      id: 1,
      name: 'Hà Nội',
      count: '1.500+ Xe sẵn sàng',
      image: 'https://images.unsplash.com/photo-1547432020-008107755a90?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 2,
      name: 'TP. Hồ Chí Minh',
      count: '2.800+ Xe sẵn sàng',
      image: 'https://images.unsplash.com/photo-1550422998-1e43e7436034?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 3,
      name: 'Đà Nẵng',
      count: '950+ Xe sẵn sàng',
      image: 'https://images.unsplash.com/photo-1559592442-9e8c47ca629c?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 4,
      name: 'Đà Lạt',
      count: '600+ Xe sẵn sàng',
      image: 'https://images.unsplash.com/photo-1599389518671-55d8d9b4b45d?auto=format&fit=crop&q=80&w=600',
    },
  ];

  const advantages = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: 'Thủ tục nhanh gọn',
      description: 'Chỉ cần CCCD và GPLX, nhận xe máy sau 5 phút',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.7 10.1c-.4-.7-1.1-1.1-1.9-1.1H7.2c-.8 0-1.5.4-1.9 1.1L3.5 11.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>
        </svg>
      ),
      title: 'Xe máy đa dạng',
      description: 'Đủ các dòng xe ga, xe số, xe côn tay mới nhất',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12l4 6-10 12L2 9z"/><path d="M11 3v4M7 9l4 4 4-4"/>
        </svg>
      ),
      title: 'Giá minh bạch',
      description: 'Cam kết không phát sinh chi phí ẩn khi thuê',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Bảo hiểm an tâm',
      description: 'Đã bao gồm gói bảo hiểm chuyến đi cơ bản',
    },
  ];

  const steps = [
    { number: 1, title: 'Tìm xe', description: 'Chọn địa điểm và thời gian mong muốn' },
    { number: 2, title: 'Đặt xe', description: 'Chọn mẫu xe ưng ý và thanh toán đặt cọc' },
    { number: 3, title: 'Nhận xe', description: 'Kiểm tra giấy tờ và nhận xe tận nơi' },
    { number: 4, title: 'Trải nghiệm', description: 'Khởi hành chuyến đi đầy thú vị của bạn' },
  ];

  const blogPosts = [
    {
      id: 1,
      tag: 'Kinh nghiệm',
      title: 'Top 10 cung đường ven biển đẹp nhất Việt Nam bằng xe máy',
      description: 'Khám phá những hành trình đầy mê hoặc từ Bắc chí Nam cùng bạn bè...',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      tag: 'Cẩm nang',
      title: 'Bí quyết bỏ túi khi thuê xe máy tại Quy Nhơn an toàn nhất',
      description: 'Những lưu ý quan trọng về giấy tờ và kiểm tra xe trước khi nhận...',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8df0?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      tag: 'Điểm đến',
      title: 'Lịch trình khám phá Eo Gió - Kỳ Co bằng xe máy trong 1 ngày',
      description: 'Hướng dẫn chi tiết từ đường đi đến các quán ăn ngon rẻ trên hành trình...',
      image: 'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-content">
              <div className="hero-badge">🚀 Khám phá Quy Nhơn</div>
              <h1 className="hero-title">
                Tự do khám phá thành phố biển
                <span className="hero-title-highlight"> bằng xe máy</span>
              </h1>
              <p className="hero-subtitle">
                Thuê xe máy uy tín, giá tốt, hỗ trợ 24/7. Trải nghiệm Quy Nhơn theo cách của riêng bạn!
              </p>
              <div className="hero-features">
                <div className="hero-feature">
                  <span className="feature-icon">✓</span>
                  <span>Thủ tục nhanh chóng</span>
                </div>
                <div className="hero-feature">
                  <span className="feature-icon">✓</span>
                  <span>Xe mới, chất lượng</span>
                </div>
                <div className="hero-feature">
                  <span className="feature-icon">✓</span>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
              <div className="hero-actions">
                <a href="#booking" className="btn-primary">
                  <span>Đặt xe ngay</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="/cars" className="btn-secondary">Xem danh sách xe</a>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=1200" alt="GoRide Motorcycle" />
                <div className="hero-image-overlay"></div>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Xe máy</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10k+</div>
                  <div className="stat-label">Khách hàng</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4.9</div>
                  <div className="stat-label">Đánh giá</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BOOKING FORM SECTION ========== */}
      <section id="booking" className="booking-section">
        <div className="container">
          <div className="booking-form-wrapper">
            <div className="booking-header">
              <h2>Đặt xe ngay</h2>
              <p>Chọn địa điểm và thời gian để tìm xe phù hợp</p>
            </div>
            <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="location">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Địa điểm nhận xe
                  </label>
                  <input type="text" id="location" placeholder="Chọn địa điểm" required />
                </div>
                <div className="form-group">
                  <label htmlFor="pickupDate">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Ngày nhận
                  </label>
                  <input type="date" id="pickupDate" required />
                </div>
                <div className="form-group">
                  <label htmlFor="returnDate">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Ngày trả
                  </label>
                  <input type="date" id="returnDate" required />
                </div>
                <button type="submit" className="btn-search">
                  <span>Tìm xe</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ========== PROMOTIONS SECTION ========== */}
      <section className="promo-section container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Khuyến mãi cực hot</h2>
        </div>
        <div className="promo-grid">
          {promoData.map((promo) => (
            <div 
              key={promo.id} 
              className="promo-card"
              style={{ 
                background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${promo.image}") center/cover` 
              }}
            >
              <span className="promo-badge">{promo.badge}</span>
              <h3>{promo.title}</h3>
              <p>{promo.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== FEATURED BIKES SECTION ========== */}
      <section className="cars-section container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Xe máy nổi bật</h2>
          <p className="section-subtitle">Chọn xe phù hợp với hành trình của bạn</p>
        </div>
        <div className="cars-grid">
          {featuredBikes.map((bike) => (
            <Link key={bike.id} href={`/cars/${bike.slug}`} className="car-card">
              <div className="car-image-wrapper">
                <img src={bike.image} alt={bike.name} className="car-image" />
                {bike.badge && <span className="car-badge">{bike.badge}</span>}
              </div>
              <div className="car-info">
                <h3 className="car-name">{bike.name}</h3>
                <p className="car-type">{bike.type}</p>
                <div className="car-rating">
                  <span className="rating-value">{bike.rating}</span>
                  <span className="rating-star">⭐</span>
                  <span className="reviews">({bike.reviews} đánh giá)</span>
                </div>
                <div className="car-footer">
                  <span className="car-price">{bike.price}/ngày</span>
                  <button className="btn-rent">Thuê ngay</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========== LOCATIONS SECTION ========== */}
      <section className="locations-section container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Khám phá các thành phố</h2>
          <p className="section-subtitle">Thuê xe máy tại nhiều địa điểm trên cả nước</p>
        </div>
        <div className="locations-grid">
          {locations.map((location) => (
            <div key={location.id} className="location-card">
              <img src={location.image} alt={location.name} className="location-img" />
              <div className="location-overlay">
                <h3 className="location-title">{location.name}</h3>
                <p className="location-count">{location.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== ADVANTAGES SECTION ========== */}
      <section className="advantages-section container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Tại sao nên chọn GoRide?</h2>
        </div>
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-item">
              <div className="adv-icon">{advantage.icon}</div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== INSURANCE BANNER ========== */}
      <section className="container">
        <div className="insurance-banner">
          <div className="adv-icon" style={{color: 'white'}}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <div style={{textAlign: 'left'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '0.5rem'}}>An tâm trên mọi hành trình</h2>
            <p style={{opacity: 0.8}}>Gói bảo hiểm chuyến đi lên đến 1 tỷ đồng từ đối tác uy tín</p>
            <div className="insurance-logos">
              <span className="insurance-brand">BAOVIET</span>
              <span className="insurance-brand">PTI</span>
              <span className="insurance-brand">LIBERTY</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICE SECTION ========== */}
      <section className="service-section container">
        <h2 className="section-title" style={{textAlign: 'center'}}>Dịch vụ của chúng tôi</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Giao xe tận nơi</h3>
            <p>Giao xe miễn phí trong bán kính 5km</p>
          </div>
          <div className="service-item">
            <h3>Hỗ trợ 24/7</h3>
            <p>Đội ngũ hỗ trợ luôn sẵn sàng</p>
          </div>
          <div className="service-item">
            <h3>Bảo hành</h3>
            <p>Đảm bảo xe hoạt động tốt</p>
          </div>
        </div>
      </section>

      {/* ========== STEPS SECTION ========== */}
      <section className="steps-section container">
        <div style={{textAlign: 'center'}}>
          <h2 className="section-title">Quy trình đặt xe đơn giản</h2>
          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.number} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== APP SECTION ========== */}
      <section className="app-section">
        <div className="container">
          <div className="app-flex">
            <div className="app-content">
              <h2 className="section-title" style={{textAlign: 'left', color: 'white'}}>Tải ứng dụng GoRide</h2>
              <p style={{fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem'}}>
                Trải nghiệm đặt xe máy nhanh nhất, nhận mã giảm giá độc quyền và quản lý chuyến đi dễ dàng ngay trên điện thoại của bạn.
              </p>
              <div className="app-store-badges">
                <img 
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1276560000&h=7e5b17409540306ea01202e86abb4de7" 
                  alt="App Store" 
                  className="app-badge" 
                />
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Google Play" 
                  className="app-badge" 
                />
              </div>
            </div>
            <div className="app-image">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" 
                alt="App Mockup" 
                className="app-mockup" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== BLOG SECTION ========== */}
      <section className="blog-section container">
        <h2 className="section-title" style={{textAlign: 'center'}}>Blog du lịch</h2>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <span className="blog-tag">{post.tag}</span>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-desc">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
