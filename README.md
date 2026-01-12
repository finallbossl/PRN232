# GoRide - Online Motorbike Rental Website

Website cho thuê xe máy trực tuyến tại Quy Nhơn - Monorepo với Microservices Architecture

## 🏗️ Kiến Trúc

Dự án sử dụng **Microservices Architecture** với:
- **API Gateway** - Cổng vào duy nhất cho frontend (HTTP REST API)
- **Microservices** - Các services độc lập giao tiếp qua gRPC
- **Shared Libraries** - Code dùng chung (common, prisma)
- **Frontend Applications** - Web User và Web Manager (Next.js)

## 📁 Cấu Trúc Monorepo

```
PRN232-CA/
├── server/              # Backend (NestJS Monorepo)
│   ├── apps/
│   │   ├── api-gateway/        # API Gateway
│   │   └── auth-service/       # Auth Service (gRPC)
│   ├── libs/
│   │   ├── common/             # Shared common (decorators, guards)
│   │   └── prisma/             # Prisma service (shared)
│   ├── proto/                  # gRPC protocol definitions
│   └── prisma/                 # Database schema
│
├── shared/              # Shared package (Types, DTOs, Constants, Utils)
├── web-user/           # Frontend cho người dùng (Next.js)
├── web-manager/        # Frontend cho admin (Next.js)
└── package.json        # Root package.json
```

## 🚀 Quick Start

Xem chi tiết trong [START.md](./START.md)

```bash
# Cài đặt dependencies
npm run install:all

# Chạy tất cả services
npm start
```

## 📚 Documentation

- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Giới thiệu chi tiết cấu trúc dự án
- **[START.md](./START.md)** - Hướng dẫn chạy dự án chi tiết

## 🛠️ Technology Stack

### Backend
- **NestJS** - Node.js Framework với Microservices
- **gRPC** - Communication protocol giữa services
- **Prisma** - ORM
- **PostgreSQL** - Database
- **JWT** - Authentication
- **Swagger** - API Documentation

### Frontend
- **Next.js 14** - React Framework (App Router)
- **TypeScript** - Type Safety
- **React 18** - UI Library

### Shared
- **TypeScript** - Types, DTOs, Constants, Utils

## 🔌 Ports

| Service | Port | Protocol | URL |
|---------|------|----------|-----|
| **API Gateway** | 3000 | HTTP | http://localhost:3000 |
| **Auth Service** | 50051 | gRPC | Internal |
| **Web User** | 3003 | HTTP | http://localhost:3003 |
| **Web Manager** | 3002 | HTTP | http://localhost:3002 |
| **API Docs** | - | HTTP | http://localhost:3000/api/docs |

## 📦 Packages

- `@goride/shared` - Shared types, DTOs, constants, utils
- `@goride/common` - Common decorators, guards (server)
- `@goride/prisma` - Prisma service (server)

## 🎯 Features

- ✅ Microservices Architecture với gRPC
- ✅ API Gateway pattern
- ✅ Authentication & Authorization (JWT)
- ✅ Database với Prisma ORM
- ✅ Monorepo structure
- ✅ TypeScript cho type safety
- ✅ Swagger API Documentation

## 📖 Development

Xem [START.md](./START.md) để biết cách setup và chạy dự án.

## 📝 License

MIT
