# So sánh Code Cũ (Monolithic) vs Code Mới (Refactored)

## 📁 File tham khảo

- **Code cũ (Monolithic):** `web-user/app/page.old.monolithic.tsx` (~400+ dòng)
- **Code mới (Refactored):** `web-user/app/page.tsx` (~30 dòng)

## 🔍 Sự khác biệt

### Code Cũ (Monolithic) - `page.old.monolithic.tsx`

```typescript
// ❌ Tất cả code trong 1 file
export default function Home() {
  // ❌ Data hard-coded trong component
  const promoData = [...];
  const featuredBikes = [...];
  const locations = [...];
  // ... 100+ dòng data
  
  // ❌ Tất cả JSX inline
  return (
    <>
      {/* Hero Section - 50+ dòng JSX */}
      {/* Booking Form - 30+ dòng JSX */}
      {/* Promotions - 20+ dòng JSX */}
      {/* ... 10+ sections khác */}
    </>
  );
}
```

**Vấn đề:**
- ❌ File quá dài (~400+ dòng)
- ❌ Data hard-coded trong component
- ❌ Khó tìm và sửa code
- ❌ Không thể tái sử dụng
- ❌ Khó test từng phần
- ❌ CSS trộn lẫn

### Code Mới (Refactored) - `page.tsx`

```typescript
// ✅ Chỉ import và render
import HeroSection from './components/sections/HeroSection'
import BookingForm from './components/sections/BookingForm'
// ... các sections khác
import './home.css'

export default function Home() {
  return (
    <>
      <HeroSection />
      <BookingForm />
      <PromotionsSection />
      {/* ... */}
    </>
  )
}
```

**Lợi ích:**
- ✅ File ngắn gọn (~30 dòng)
- ✅ Data tách riêng trong `constants/homeData.ts`
- ✅ Mỗi section là component riêng
- ✅ Dễ tìm và sửa
- ✅ Có thể tái sử dụng
- ✅ Dễ test từng component
- ✅ CSS được tổ chức theo component

## 📊 Thống kê

| Metric | Code Cũ | Code Mới |
|--------|---------|----------|
| **Số dòng trong page.tsx** | ~400+ | ~30 |
| **Số file components** | 0 | 11 sections |
| **Số file common** | 0 | 3 (CarCard, SectionHeader, icons) |
| **Data location** | Trong component | `constants/homeData.ts` |
| **CSS files** | 1 file lớn | Mỗi component có CSS riêng |
| **Dễ bảo trì** | ❌ Khó | ✅ Dễ |
| **Tái sử dụng** | ❌ Không | ✅ Có |
| **Testability** | ❌ Khó | ✅ Dễ |

## 🎯 Kết luận

**Code mới (Refactored) tốt hơn vì:**
1. **Dễ đọc:** Mỗi component có trách nhiệm rõ ràng
2. **Dễ bảo trì:** Sửa một section không ảnh hưởng các section khác
3. **Dễ mở rộng:** Thêm section mới chỉ cần tạo component mới
4. **Tái sử dụng:** Có thể dùng lại CarCard, SectionHeader ở nhiều nơi
5. **Dễ test:** Test từng component riêng biệt

**Code cũ chỉ để tham khảo** - không nên sử dụng trong production!
