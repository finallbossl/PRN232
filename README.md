# GoRide - NestJS Monorepo

> 🚀 **Nền tảng cho thuê xe máy tại Quy Nhơn** - Kiến trúc microservices với NestJS và Next.js

## 📚 Tài Liệu

- **[📖 Hướng Dẫn Setup Chi Tiết](./SETUP_GUIDE.md)** - Hướng dẫn đầy đủ cách cài đặt và chạy dự án
- **[📋 Cấu Trúc Dự Án](./PROJECT_STRUCTURE.md)** - Chi tiết về kiến trúc và cấu trúc thư mục

## ⚡ Quick Start

```bash
# 1. Cài đặt dependencies
npm install

# 2. Cấu hình database (tạo file .env từ .env.example)
cp .env.example .env
# Cập nhật DATABASE_URL trong .env

# 3. Setup database
npm run prisma:generate
npm run prisma:migrate

# 4. Chạy tất cả services
npm run dev
```

**Truy cập:**
- 🌐 Web User: http://localhost:3002
- 🔧 Web Manager: http://localhost:3003
- 🔌 API Gateway: http://localhost:3000/api/v1

> 💡 **Xem [SETUP_GUIDE.md](./SETUP_GUIDE.md) để biết hướng dẫn chi tiết**

## Cấu trúc dự án

```
goride/
├── apps/
│   ├── api-gateway/        # NestJS API Gateway (Port 3000)
│   ├── auth-service/       # NestJS Auth Microservice (Port 3001)
│   ├── web-user/          # Next.js Frontend User (Port 3002)
│   └── web-manager/        # Next.js Frontend Manager (Port 3003)
├── libs/
│   └── shared/             # Shared code, types, constants
├── prisma/
│   └── schema.prisma       # Prisma database schema
├── nest-cli.json           # NestJS CLI configuration
├── tsconfig.base.json      # Base TypeScript configuration
└── package.json            # Root package.json
```

## Cài đặt

```bash
npm install
```

## Chạy Prisma

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Open Prisma Studio
npm run prisma:studio
```

## Chạy Development

```bash
# Chạy tất cả services
npm run dev

# Hoặc chạy từng service riêng:
npm run dev:gateway      # API Gateway
npm run dev:auth         # Auth Service
npm run dev:web-user     # Web User Frontend
npm run dev:web-manager  # Web Manager Frontend
```

## Build

```bash
npm run build
```

## Cấu hình môi trường

Tạo file `.env` ở root với nội dung:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/goride_db?schema=public"

# JWT
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
JWT_EXPIRES_IN="7d"
JWT_REFRESH_SECRET="your-refresh-secret-key"
JWT_REFRESH_EXPIRES_IN="30d"

# API Gateway
GATEWAY_PORT=3000
API_PREFIX=api/v1
NODE_ENV=development
CORS_ORIGIN="http://localhost:3002,http://localhost:3003"

# Auth Service (Microservice)
AUTH_SERVICE_HOST=localhost
AUTH_SERVICE_PORT=3001
AUTH_SERVICE_HTTP_PORT=3001
```

## Di chuyển code từ cấu trúc cũ

**LƯU Ý:** Bạn cần di chuyển thủ công các thư mục sau vào `apps/`:

1. **web-user** → **apps/web-user**
   - Copy toàn bộ nội dung từ `web-user/` vào `apps/web-user/`
   - Giữ nguyên cấu trúc Next.js

2. **web-manager** → **apps/web-manager**
   - Copy toàn bộ nội dung từ `web-manager/` vào `apps/web-manager/`
   - Giữ nguyên cấu trúc Next.js

3. **shared** → **libs/shared**
   - Đã được copy tự động vào `libs/shared/src/`

4. **server/prisma** → **prisma**
   - Schema đã được copy vào `prisma/schema.prisma`

Sau khi di chuyển, bạn có thể xóa các thư mục cũ:
- `web-user/`
- `web-manager/`
- `server/`
- `shared/`

## Cấu trúc Apps

### API Gateway (`apps/api-gateway`)
- Entry point: `src/main.ts`
- Module chính: `src/app.module.ts`
- Auth module: `src/auth/auth.module.ts`

### Auth Service (`apps/auth-service`)
- Entry point: `src/main.ts`
- Module chính: `src/app.module.ts`
- Auth gRPC controller: `src/auth/auth.grpc.controller.ts`

### Web User (`apps/web-user`)
- Next.js 14 App Router
- Port: 3002

### Web Manager (`apps/web-manager`)
- Next.js 14 App Router
- Port: 3003

## Shared Library (`libs/shared`)

Chứa:
- Types: `src/types/`
- Constants: `src/constants/`
- DTOs: `src/dto/`
- Utils: `src/utils/`

Import trong code:
```typescript
import { LoginDto, RegisterDto } from '@goride/shared';
import { API_ENDPOINTS } from '@goride/shared';
```
