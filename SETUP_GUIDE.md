# 🚀 Hướng Dẫn Chạy Dự Án GoRide

## 📋 Yêu Cầu Hệ Thống

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0
- **PostgreSQL**: >= 12.0
- **Git**: Để clone repository

## 🔧 Bước 1: Cài Đặt Dependencies

### 1.1. Clone repository (nếu chưa có)
```bash
git clone <repository-url>
cd PRN232-CA
```

### 1.2. Cài đặt dependencies ở root
```bash
npm install
```

Lệnh này sẽ cài đặt tất cả dependencies cho:
- Root project (NestJS monorepo)
- API Gateway
- Auth Service
- Shared library

### 1.3. Cài đặt dependencies cho frontend apps

**Web User:**
```bash
cd apps/web-user
npm install
cd ../..
```

**Web Manager:**
```bash
cd apps/web-manager
npm install
cd ../..
```

## 🗄️ Bước 2: Cấu Hình Database

### 2.1. Tạo PostgreSQL Database

Đăng nhập vào PostgreSQL và tạo database:

```sql
CREATE DATABASE goride_db;
```

Hoặc sử dụng psql command line:
```bash
psql -U postgres
CREATE DATABASE goride_db;
\q
```

### 2.2. Cấu hình Prisma

Tạo file `.env` ở root project (copy từ `.env.example`):

```bash
# Windows
copy .env.example .env

# Linux/Mac
cp .env.example .env
```

### 2.3. Cập nhật DATABASE_URL trong `.env`

Mở file `.env` và cập nhật thông tin database:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/goride_db?schema=public"
```

**Ví dụ:**
```env
DATABASE_URL="postgresql://postgres:123456@localhost:5432/goride_db?schema=public"
```

### 2.4. Generate Prisma Client

```bash
npm run prisma:generate
```

### 2.5. Chạy Migrations

```bash
npm run prisma:migrate
```

Lệnh này sẽ:
- Tạo các bảng trong database theo schema
- Tạo migration files trong `prisma/migrations/`

### 2.6. (Tùy chọn) Mở Prisma Studio để xem database

```bash
npm run prisma:studio
```

Prisma Studio sẽ mở tại: http://localhost:5555

## ⚙️ Bước 3: Cấu Hình Environment Variables

Mở file `.env` và cập nhật các giá trị sau:

```env
# Database (đã cấu hình ở bước 2)
DATABASE_URL="postgresql://user:password@localhost:5432/goride_db?schema=public"

# JWT - Thay đổi các secret keys này trong production!
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
JWT_EXPIRES_IN="7d"
JWT_REFRESH_SECRET="your-refresh-secret-key"
JWT_REFRESH_EXPIRES_IN="30d"

# API Gateway
GATEWAY_PORT=3000
API_PREFIX=api/v1
NODE_ENV=development
CORS_ORIGIN="http://localhost:3002,http://localhost:3003"

# Auth Service
AUTH_SERVICE_HOST=localhost
AUTH_SERVICE_PORT=50051
AUTH_SERVICE_HTTP_PORT=3001

# AI Service (Optional - chỉ cần nếu sử dụng chatbot)
GEMINI_API_KEY="your-gemini-api-key"

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_DEST="./uploads"
```

## 🚀 Bước 4: Chạy Dự Án

### 4.1. Chạy Tất Cả Services (Khuyến nghị)

Mở terminal ở root và chạy:

```bash
npm run dev
```

Lệnh này sẽ chạy đồng thời:
- ✅ API Gateway (Port 3000)
- ✅ Auth Service (Port 3001 HTTP, 50051 gRPC)
- ✅ Web User Frontend (Port 3002)
- ✅ Web Manager Frontend (Port 3003)

### 4.2. Chạy Từng Service Riêng Lẻ

Nếu muốn chạy từng service riêng, mở nhiều terminal:

**Terminal 1 - API Gateway:**
```bash
npm run dev:gateway
```

**Terminal 2 - Auth Service:**
```bash
npm run dev:auth
```

**Terminal 3 - Web User:**
```bash
npm run dev:web-user
```

**Terminal 4 - Web Manager:**
```bash
npm run dev:web-manager
```

## 🌐 Bước 5: Truy Cập Ứng Dụng

Sau khi chạy thành công, truy cập các URL sau:

| Service | URL | Mô tả |
|---------|-----|-------|
| **Web User** | http://localhost:3002 | Frontend cho khách hàng |
| **Web Manager** | http://localhost:3003 | Frontend cho quản trị viên |
| **API Gateway** | http://localhost:3000/api/v1 | Backend API |
| **API Health Check** | http://localhost:3000/api/v1/health | Kiểm tra trạng thái API |
| **Auth Service HTTP** | http://localhost:3001 | Auth Service HTTP endpoint |
| **Prisma Studio** | http://localhost:5555 | Quản lý database (chạy riêng) |

## 📝 Kiểm Tra Trạng Thái

### Kiểm tra API Gateway
```bash
curl http://localhost:3000/api/v1/health
```

Kết quả mong đợi:
```json
{
  "status": "ok",
  "service": "api-gateway",
  "timestamp": "2026-01-25T..."
}
```

### Kiểm tra Auth Service
```bash
curl http://localhost:3001
```

## 🔍 Troubleshooting

### Lỗi: Port đã được sử dụng

**Giải pháp:** Đổi port trong file `.env` hoặc dừng process đang sử dụng port đó.

**Windows:**
```bash
# Tìm process sử dụng port 3000
netstat -ano | findstr :3000

# Kill process (thay PID bằng process ID)
taskkill /PID <PID> /F
```

**Linux/Mac:**
```bash
# Tìm process sử dụng port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Lỗi: Database connection failed

**Kiểm tra:**
1. PostgreSQL đã chạy chưa?
2. DATABASE_URL trong `.env` đúng chưa?
3. Database `goride_db` đã được tạo chưa?

**Giải pháp:**
```bash
# Kiểm tra PostgreSQL đang chạy
# Windows
sc query postgresql-x64-14

# Linux/Mac
sudo systemctl status postgresql

# Tạo lại database nếu cần
psql -U postgres
CREATE DATABASE goride_db;
```

### Lỗi: Prisma Client chưa được generate

**Giải pháp:**
```bash
npm run prisma:generate
```

### Lỗi: Module not found '@goride/shared'

**Giải pháp:**
```bash
# Đảm bảo đã cài đặt dependencies ở root
npm install

# Rebuild shared library
npm run build
```

### Lỗi: Frontend không kết nối được với API

**Kiểm tra:**
1. API Gateway đã chạy chưa? (http://localhost:3000)
2. CORS_ORIGIN trong `.env` có đúng port frontend không?
3. API_PREFIX có đúng không? (mặc định: `api/v1`)

## 📦 Build Production

### Build tất cả apps
```bash
npm run build
```

### Chạy production
```bash
npm run start:prod
```

## 🗂️ Cấu Trúc Ports

| Port | Service | Protocol |
|------|---------|----------|
| 3000 | API Gateway | HTTP |
| 3001 | Auth Service HTTP | HTTP |
| 3002 | Web User Frontend | HTTP |
| 3003 | Web Manager Frontend | HTTP |
| 50051 | Auth Service gRPC | gRPC |
| 5555 | Prisma Studio | HTTP |

## 📚 Scripts Hữu Ích

```bash
# Development
npm run dev                    # Chạy tất cả services
npm run dev:gateway           # Chỉ API Gateway
npm run dev:auth              # Chỉ Auth Service
npm run dev:web-user          # Chỉ Web User
npm run dev:web-manager       # Chỉ Web Manager

# Database
npm run prisma:generate       # Generate Prisma Client
npm run prisma:migrate        # Run migrations
npm run prisma:studio         # Mở Prisma Studio

# Build & Production
npm run build                 # Build tất cả
npm run start:prod            # Chạy production

# Code Quality
npm run lint                  # Lint code
npm run format                # Format code
npm test                      # Chạy tests
```

## ✅ Checklist Trước Khi Chạy

- [ ] Node.js >= 18.0.0 đã cài đặt
- [ ] PostgreSQL đã cài đặt và đang chạy
- [ ] Database `goride_db` đã được tạo
- [ ] File `.env` đã được tạo từ `.env.example`
- [ ] DATABASE_URL trong `.env` đã được cấu hình đúng
- [ ] Đã chạy `npm install` ở root
- [ ] Đã chạy `npm install` trong `apps/web-user` và `apps/web-manager`
- [ ] Đã chạy `npm run prisma:generate`
- [ ] Đã chạy `npm run prisma:migrate`
- [ ] Các ports 3000, 3001, 3002, 3003 không bị conflict

## 🎯 Bước Tiếp Theo

Sau khi chạy thành công:

1. **Truy cập Web User**: http://localhost:3002
2. **Truy cập Web Manager**: http://localhost:3003
3. **Test API**: http://localhost:3000/api/v1/health
4. **Xem Database**: Chạy `npm run prisma:studio`

## 📞 Hỗ Trợ

Nếu gặp vấn đề, kiểm tra:
- Logs trong terminal để xem lỗi cụ thể
- File `.env` có đúng cấu hình không
- Database connection có hoạt động không
- Ports có bị conflict không

---

**Chúc bạn code vui vẻ! 🚀**
