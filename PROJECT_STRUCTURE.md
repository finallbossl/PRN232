# GoRide - NestJS Monorepo Structure

## Tổng quan

Dự án GoRide đã được tái cấu trúc thành một NestJS monorepo, gộp backend, web-user và web-manager thành một dự án duy nhất.

## Cấu trúc thư mục

```
goride/
├── apps/
│   ├── api-gateway/           # API Gateway (NestJS)
│   │   ├── src/
│   │   │   ├── main.ts
│   │   │   ├── app.module.ts
│   │   │   ├── app.controller.ts
│   │   │   ├── app.service.ts
│   │   │   └── auth/
│   │   │       ├── auth.module.ts
│   │   │       ├── auth.controller.ts
│   │   │       └── auth.service.ts
│   │   ├── tsconfig.app.json
│   │   └── package.json
│   │
│   ├── auth-service/          # Auth Microservice (NestJS)
│   │   ├── src/
│   │   │   ├── main.ts
│   │   │   ├── app.module.ts
│   │   │   └── auth/
│   │   │       ├── auth.module.ts
│   │   │       ├── auth.grpc.controller.ts
│   │   │       └── auth.service.ts
│   │   ├── tsconfig.app.json
│   │   └── package.json
│   │
│   ├── web-user/              # Frontend User (Next.js)
│   │   ├── app/
│   │   ├── components/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── web-manager/            # Frontend Manager (Next.js)
│       ├── app/
│       ├── package.json
│       └── tsconfig.json
│
├── libs/
│   └── shared/                 # Shared Library
│       ├── src/
│       │   ├── types/
│       │   ├── constants/
│       │   ├── dto/
│       │   ├── utils/
│       │   └── index.ts
│       ├── tsconfig.lib.json
│       └── package.json
│
├── prisma/
│   └── schema.prisma           # Database schema
│
├── nest-cli.json               # NestJS CLI config
├── tsconfig.base.json          # Base TypeScript config
├── package.json                # Root package.json
├── .env.example                # Environment variables template
└── README.md                   # Documentation
```

## Apps

### 1. API Gateway (`apps/api-gateway`)
- **Port:** 3000
- **Mục đích:** Entry point duy nhất cho tất cả HTTP requests
- **Chức năng:**
  - Xử lý HTTP requests
  - JWT authentication
  - CORS configuration
  - Forward requests đến các microservices qua gRPC

### 2. Auth Service (`apps/auth-service`)
- **Port:** 3001 (HTTP), 50051 (gRPC)
- **Mục đích:** Microservice xử lý authentication
- **Chức năng:**
  - User registration
  - User login
  - JWT token generation
  - User validation

### 3. Web User (`apps/web-user`)
- **Port:** 3002
- **Mục đích:** Frontend cho khách hàng
- **Tech Stack:** Next.js 14, React 18, TypeScript

### 4. Web Manager (`apps/web-manager`)
- **Port:** 3003
- **Mục đích:** Frontend cho quản trị viên
- **Tech Stack:** Next.js 14, React 18, TypeScript

## Shared Library (`libs/shared`)

Chứa code dùng chung:
- **Types:** TypeScript interfaces và enums
- **Constants:** API endpoints, message patterns, validation rules
- **DTOs:** Data Transfer Objects
- **Utils:** Utility functions

**Import trong code:**
```typescript
import { LoginDto, RegisterDto } from '@goride/shared';
import { API_ENDPOINTS, MESSAGE_PATTERNS } from '@goride/shared';
import { formatCurrency, isValidEmail } from '@goride/shared';
```

## Database

- **ORM:** Prisma
- **Database:** PostgreSQL
- **Schema:** `prisma/schema.prisma`

## Scripts

### Development
```bash
npm run dev                    # Chạy tất cả services
npm run dev:gateway           # Chỉ chạy API Gateway
npm run dev:auth              # Chỉ chạy Auth Service
npm run dev:web-user          # Chỉ chạy Web User
npm run dev:web-manager       # Chỉ chạy Web Manager
```

### Build
```bash
npm run build                 # Build tất cả apps
```

### Prisma
```bash
npm run prisma:generate       # Generate Prisma Client
npm run prisma:migrate        # Run migrations
npm run prisma:studio         # Open Prisma Studio
```

## Environment Variables

Tạo file `.env` ở root với các biến môi trường (xem `.env.example`)

## Lưu ý quan trọng

1. **Di chuyển code:** Bạn cần di chuyển thủ công `web-user/` và `web-manager/` vào `apps/` (xem `MIGRATION_GUIDE.md`)

2. **Dependencies:** Sau khi di chuyển, chạy `npm install` ở root để cài đặt tất cả dependencies

3. **Prisma:** Chạy `npm run prisma:generate` sau khi cài đặt để generate Prisma Client

4. **Ports:** Đảm bảo các ports không bị conflict:
   - 3000: API Gateway
   - 3001: Auth Service HTTP
   - 3002: Web User
   - 3003: Web Manager
   - 50051: Auth Service gRPC
