'use client';

import '../blog.css';
import Link from 'next/link';

export default function BlogDetailPage() {
  return (
    <main className="blog-detail-page">
      {/* Article Header */}
      <section className="blog-detail-hero">
        <div className="blog-content-wrapper">
          <Link href="/blog" className="blog-back-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            QUAY LẠI BLOG
          </Link>
          <div className="blog-card-date">23 THÁNG 01, 2026 • KINH NGHIỆM THUÊ XE</div>
          <h1>5 lưu ý quan trọng khi thuê xe máy tại Đà Nẵng</h1>
          <div className="blog-author">
            <div className="blog-author-avatar">GR</div>
            <div className="blog-author-info">
              <h3>Đại diện GoRide</h3>
              <p>Cố vấn hành trình</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="article-body">
        <div className="article-content">
          <p>Thuê xe máy là lựa chọn phổ biến nhất khi du lịch Đà Nẵng nhờ sự linh hoạt và tiết kiệm chi phí. Tuy nhiên, để có một trải nghiệm trọn vẹn và an tâm, bạn không nên bỏ qua những lưu ý quan trọng dưới đây.</p>
          
          <img src="https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=1200" alt="Motorcycle in Da Nang" />

          <h2>1. Kiểm tra kỹ tình trạng xe trước khi nhận</h2>
          <p>Đừng vì quá vội vàng mà bỏ qua bước này. Hãy dành 5-10 phút để kiểm tra tổng thể xe: hệ thống phanh, đèn, còi, lốp xe và đặc biệt là động cơ. Bạn nên nổ máy thử và chạy một vòng ngắn để cảm nhận độ ổn định của xe.</p>
          
          <ul>
            <li><strong>Hệ thống phanh:</strong> Đảm bảo cả phanh trước và sau đều hoạt động tốt, không quá lỏng hay quá chặt.</li>
            <li><strong>Lốp xe:</strong> Kiểm tra độ mòn và áp suất lốp. Lốp quá mòn sẽ rất nguy hiểm khi đi trời mưa.</li>
            <li><strong>Vỏ xe:</strong> Chụp ảnh hoặc quay video lại các vết trầy xước có sẵn để tránh tranh cãi khi trả xe.</li>
          </ul>

          <h2>2. Kiểm tra giấy tờ xe đầy đủ</h2>
          <p>Một chiếc xe thuê hợp lệ phải đi kèm với bản sao công chứng của Giấy đăng ký xe (Cà vẹt) và Bảo hiểm trách nhiệm dân sự còn hiệu lực. Bạn nên yêu cầu đơn vị cho thuê cung cấp đầy đủ các giấy tờ này để xuất trình khi cần thiết.</p>

          <img src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=1200" alt="Checking papers" />

          <h2>3. Luôn mang theo giấy tờ tùy thân và bằng lái</h2>
          <p>Khi tham gia giao thông tại Việt Nam, bạn bắt buộc phải mang theo bằng lái xe máy (A1 hoặc A2). GoRide cung cấp dịch vụ thuê xe minh bạch, do đó chúng tôi luôn yêu cầu kiểm tra bằng lái của khách hàng để đảm bảo an toàn pháp lý cho cả hai bên.</p>

          <h2>4. Chốt giá và thời gian thuê rõ ràng</h2>
          <p>Hãy xác nhận lại giá thuê mỗi ngày và cách tính thời gian (24 giờ hay tính theo ngày lịch). Tại GoRide, chúng tôi tính 24 giờ là một ngày thuê, giúp khách hàng tối ưu hóa chi phí một cách công bằng nhất.</p>

          <h2>5. Lưu số điện thoại cứu hộ của GoRide</h2>
          <p>Sự cố dọc đường là điều không ai mong muốn, nhưng chuẩn bị trước vẫn tốt hơn. Hãy luôn lưu lại hotline hỗ trợ kỹ thuật của chúng tôi để được trợ giúp kịp thời trong trường hợp xe gặp trục trặc bất ngờ.</p>
        </div>
      </section>

      {/* Related Posts */}
      <section className="related-section">
        <div className="container">
          <h2 className="section-title">Bài viết liên quan</h2>
          <div className="blog-grid">
            <Link href="/blog/2" className="blog-card">
              <div className="blog-card-image" style={{ height: '180px' }}>
                <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800" alt="Safety" />
              </div>
              <div className="blog-card-content">
                <div className="blog-card-date">MẸO AN TOÀN</div>
                <h3 className="blog-card-title">Mẹo lái xe máy an toàn trong điều kiện trời mưa</h3>
              </div>
            </Link>

            <Link href="/blog/3" className="blog-card">
              <div className="blog-card-image" style={{ height: '180px' }}>
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8df0?auto=format&fit=crop&q=80&w=800" alt="Travel" />
              </div>
              <div className="blog-card-content">
                <div className="blog-card-date">DU LỊCH</div>
                <h3 className="blog-card-title">Top 10 cung đường phượt đẹp nhất miền Trung</h3>
              </div>
            </Link>

            <Link href="/blog/5" className="blog-card">
              <div className="blog-card-image" style={{ height: '180px' }}>
                <img src="https://images.unsplash.com/photo-1449495169669-7b118f960237?auto=format&fit=crop&q=80&w=800" alt="Checkup" />
              </div>
              <div className="blog-card-content">
                <div className="blog-card-date">KINH NGHIỆM</div>
                <h3 className="blog-card-title">Cách kiểm tra xe máy trước khi khởi hành đường dài</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="blog-cta-section">
        <div className="container">
          <h2>Bạn đã sẵn sàng để khám phá Đà Nẵng?</h2>
          <Link href="/cars" className="btn-blog-cta">
            THUÊ XE MÁY NGAY
          </Link>
        </div>
      </section>
    </main>
  );
}
