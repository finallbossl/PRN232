'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/constants/homeData';
import {
  ArrowLeft,
  Calendar,
  Tag,
  Heart,
  MessageSquare,
  Share2,
} from 'lucide-react';

/* ---------------- MOCK COMMENTS ---------------- */
const initialComments = [
  {
    id: 1,
    name: 'Minh Anh',
    avatar: 'https://i.pravatar.cc/100?img=5',
    content: 'Bài viết rất hay, đọc xong chỉ muốn xách xe lên và đi ngay!',
    date: '2 ngày trước',
  },
  {
    id: 2,
    name: 'Hoàng Long',
    avatar: 'https://i.pravatar.cc/100?img=12',
    content: 'Cảm giác chạy xe ven biển đúng là không gì sánh bằng.',
    date: '1 ngày trước',
  },
];

export default function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const post = blogPosts.find(p => p.id === Number(params.id)) ?? blogPosts[0];

  const [comments, setComments] = useState(initialComments);
  const [commentText, setCommentText] = useState('');

  const handleAddComment = () => {
    if (!commentText.trim()) return;

    setComments([
      ...comments,
      {
        id: Date.now(),
        name: 'Người dùng',
        avatar: 'https://i.pravatar.cc/100?img=32',
        content: commentText,
        date: 'Vừa xong',
      },
    ]);

    setCommentText('');
  };

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      {/* ---------------- HEADER ---------------- */}
      <div className="container max-w-4xl pt-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-primary/60 hover:text-cta"
        >
          <ArrowLeft size={16} />
          Quay lại Blog
        </Link>

        <div className="mt-10 space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-cta uppercase">
            <Tag size={14} /> {post.tag}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-primary/50">
            <span className="flex items-center gap-2">
              <Calendar size={14} /> 25 Tháng 1, 2026
            </span>
            <span>• 8 phút đọc</span>
          </div>
        </div>
      </div>

      {/* ---------------- CONTENT ---------------- */}
      <div className="container max-w-6xl mt-20 grid lg:grid-cols-12 gap-16">
        {/* Article */}
        <article className="lg:col-span-8 prose prose-lg prose-slate max-w-none">
          <img
            src={post.image}
            alt={post.title}
            className="rounded-3xl shadow-lg mb-12"
          />

          <p className="text-xl italic text-primary/70">
            {post.description}
          </p>

          <h2>Vẻ đẹp của những cung đường tự do</h2>
          <p>
            Hành trình bằng mô tô không chỉ là di chuyển, mà là trải nghiệm.
            Từng con đường, từng cơn gió đều mang một câu chuyện riêng.
          </p>

          <h3>Kinh nghiệm cho chuyến đi</h3>
          <p>
            Luôn chuẩn bị đầy đủ bảo hộ, kiểm tra xe trước chuyến đi
            và đừng quên tận hưởng từng khoảnh khắc.
          </p>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-10">
          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h4 className="font-bold mb-6">Bài viết liên quan</h4>
            <div className="space-y-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 3)
                .map(p => (
                  <Link
                    key={p.id}
                    href={`/blog/${p.id}`}
                    className="block group"
                  >
                    <p className="text-sm font-semibold group-hover:text-cta">
                      {p.title}
                    </p>
                  </Link>
                ))}
            </div>
          </div>

          <div className="bg-primary text-white rounded-3xl p-10">
            <h4 className="text-2xl font-bold mb-4">
              Trải nghiệm của riêng bạn
            </h4>
            <p className="text-white/70 mb-6">
              Khám phá đội xe GoRide Elite tại các thành phố lớn.
            </p>
            <Link
              href="/cars"
              className="block text-center bg-white text-primary py-4 rounded-xl font-bold hover:bg-cta hover:text-white transition"
            >
              ĐẶT XE NGAY
            </Link>
          </div>
        </aside>
      </div>

      {/* ---------------- ACTIONS ---------------- */}
      <div className="container max-w-4xl mt-24 flex gap-10 text-sm text-primary/60">
        <button className="flex items-center gap-2 hover:text-cta">
          <Heart size={18} /> 1.250
        </button>
        <button className="flex items-center gap-2 hover:text-cta">
          <MessageSquare size={18} /> {comments.length}
        </button>
        <button className="flex items-center gap-2 hover:text-cta">
          <Share2 size={18} /> Chia sẻ
        </button>
      </div>

      {/* ---------------- COMMENTS ---------------- */}
      <section className="container max-w-4xl mt-24 pb-32">
        <h3 className="text-2xl font-bold text-primary mb-10">
          Bình luận ({comments.length})
        </h3>

        {/* List */}
        <div className="space-y-10">
          {comments.map(comment => (
            <div key={comment.id} className="flex gap-6">
              <img
                src={comment.avatar}
                alt={comment.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <p className="font-semibold text-primary">{comment.name}</p>
                  <span className="text-xs text-primary/40">
                    {comment.date}
                  </span>
                </div>
                <p className="text-primary/70 leading-relaxed">
                  {comment.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Add comment */}
        <div className="mt-16 border-t pt-10">
          <h4 className="font-semibold text-primary mb-6">
            Viết bình luận
          </h4>

          <textarea
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            placeholder="Chia sẻ suy nghĩ của bạn..."
            className="w-full min-h-[120px] rounded-xl border border-primary/10 p-4 text-sm focus:outline-none focus:ring-2 focus:ring-cta"
          />

          <button
            onClick={handleAddComment}
            className="mt-4 px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-cta transition"
          >
            Gửi bình luận
          </button>
        </div>
      </section>
    </main>
  );
}
