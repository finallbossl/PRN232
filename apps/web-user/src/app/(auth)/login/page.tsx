'use client';

import Link from 'next/link';
import { Mail, Lock, ArrowRight, Star } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    router.push('/');
  };
  return (
    <main className="min-h-screen bg-[#FAF9F6] flex items-center justify-center px-6">
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
        
        {/* Left – Visual */}
        <div className="hidden md:flex flex-col justify-between p-16 bg-primary text-white">
          <div>
            <Link href="/" className="text-2xl font-black tracking-wide">
              GoRide <span className="text-cta">Elite</span>
            </Link>

            <h2 className="mt-20 text-4xl font-bold leading-tight">
              Tiếp tục <br /> hành trình của bạn
            </h2>

            <p className="mt-6 text-white/60 text-lg">
              Đăng nhập để trải nghiệm những cung đường đẳng cấp.
            </p>
          </div>

          <p className="text-sm text-white/40 italic">
            © 2026 GoRide Elite
          </p>
        </div>

        {/* Right – Form */}
        <div className="p-12 md:p-16">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Chào mừng trở lại
          </h1>
          <p className="text-primary/50 mb-10">
            Đăng nhập để tiếp tục
          </p>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" />
                <input
                  type="email"
                  className="w-full h-14 pl-12 rounded-xl border border-primary/10 focus:ring-2 focus:ring-cta/30"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Mật khẩu
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" />
                <input
                  type="password"
                  className="w-full h-14 pl-12 rounded-xl border border-primary/10 focus:ring-2 focus:ring-cta/30"
                />
              </div>
            </div>

            <button className="w-full h-14 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-cta transition">
              Đăng nhập <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-8 text-sm text-primary/50 text-center">
            Chưa có tài khoản?{' '}
            <Link href="/register" className="text-cta font-semibold">
              Đăng ký
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
