import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GoRide - Cho Thuê Xe Máy Quy Nhơn',
  description: 'Website cho thuê xe máy trực tuyến tại Quy Nhơn',
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
