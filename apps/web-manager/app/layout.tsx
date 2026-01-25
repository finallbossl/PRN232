import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GoRide - Quản Trị',
  description: 'Trang quản trị GoRide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
