import Link from 'next/link';
import { blogPosts } from '../../constants/homeData';
import SectionHeader from '../common/SectionHeader';
import './BlogSection.css';

export default function BlogSection() {
  return (
    <section className="blog-section container">
      <SectionHeader 
        title="Blog du lịch" 
        subtitle="Khám phá những cung đường đẹp và kinh nghiệm du lịch hữu ích"
        align="center"
      />
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <div className="blog-overlay"></div>
            </div>
            <div className="blog-content">
              <span className="blog-tag">{post.tag}</span>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-desc">{post.description}</p>
              <div className="blog-read-more">
                Đọc thêm
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="blog-footer">
        <Link href="/blog" className="btn-view-all">
          Xem tất cả bài viết
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
