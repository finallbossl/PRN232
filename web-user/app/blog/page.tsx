import Link from 'next/link';
import { blogPosts } from '../constants/homeData';
import SectionHeader from '../components/common/SectionHeader';
import './blog.css';

export default function BlogPage() {
  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <h1 className="blog-hero-title">Blog Du Lịch</h1>
          <p className="blog-hero-subtitle">
            Khám phá những cung đường đẹp, kinh nghiệm du lịch và mẹo thuê xe máy hữu ích
          </p>
        </div>
      </section>

      <section className="blog-list-section container">
        <div className="blog-list-grid">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="blog-list-card">
              <div className="blog-list-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-list-overlay"></div>
                <span className="blog-list-tag">{post.tag}</span>
              </div>
              <div className="blog-list-content">
                <h2 className="blog-list-title">{post.title}</h2>
                <p className="blog-list-desc">{post.description}</p>
                <div className="blog-list-meta">
                  <span className="blog-list-date">23 Tháng 01, 2026</span>
                  <span className="blog-list-read">Đọc thêm →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
