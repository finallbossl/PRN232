# GoRide - Cấu Trúc Dự Án

## 📂 Tổng Quan

Dự án GoRide được tổ chức theo kiến trúc **Monorepo** với **Microservices**, sử dụng NestJS cho backend và Next.js cho frontend.

## 🏗️ Kiến Trúc Tổng Thể

```
Frontend (Web User/Manager)
    ↓
    ↓ HTTP REST API
    ↓
API Gateway (Port 3000)
    ↓
    ↓ gRPC
    ↓
Microservices
    ├── Auth Service (Port 50051)
    ├── User Service (TODO)
    ├── Rental Service (TODO)
    └── ...
    ↓
PostgreSQL Database
```

## 📁 Cấu Trúc Thư Mục Chi Tiết

### Root Level

```
PRN232-CA/
├── server/              # Backend - NestJS Monorepo
├── shared/              # Shared package (Types, DTOs, Constants)
├── web-user/           # Frontend cho người dùng
├── web-manager/        # Frontend cho admin
├── package.json        # Root package.json (workspaces)
├── env.example         # Environment variables template
├── README.md           # File này
├── PROJECT_STRUCTURE.md
└── START.md
```

### Server (Backend)

```
server/
├── apps/                        # Applications
│   ├── api-gateway/            # API Gateway Application
│   │   ├── src/
│   │   │   ├── main.ts         # Entry point
│   │   │   ├── app.module.ts   # Root module
│   │   │   ├── auth/           # Auth module
│   │   │   │   ├── auth.controller.ts
│   │   │   │   └── auth.module.ts
│   │   │   └── ...
│   │   └── tsconfig.app.json
│   │
│   └── auth-service/           # Auth Service Application
│       ├── src/
│       │   ├── main.ts         # Entry point (gRPC)
│       │   ├── app.module.ts   # Root module
│       │   ├── auth/           # Auth module
│       │   │   ├── auth.grpc.controller.ts
│       │   │   ├── auth.service.ts
│       │   │   ├── auth.module.ts
│       │   │   └── interfaces/
│       │   └── ...
│       └── tsconfig.app.json
│
├── libs/                        # Shared Libraries
│   ├── common/                 # Common library
│   │   ├── src/
│   │   │   ├── decorators/     # @Public(), @Roles()
│   │   │   ├── guards/         # JwtAuthGuard, RolesGuard
│   │   │   └── index.ts
│   │   └── tsconfig.lib.json
│   │
│   └── prisma/                 # Prisma library
│       ├── src/
│       │   ├── prisma.service.ts
│       │   ├── prisma.module.ts
│       │   └── index.ts
│       └── tsconfig.lib.json
│
├── proto/                      # gRPC Protocol Definitions
│   └── auth.proto              # Auth service proto
│
├── prisma/                     # Database
│   └── schema.prisma           # Prisma schema
│
├── nest-cli.json               # NestJS CLI config
├── tsconfig.json               # TypeScript config
├── tsconfig.base.json          # Base TypeScript config
├── package.json                # Server dependencies
└── .env                        # Environment variables
```

### Shared Package

```
shared/
├── src/
│   ├── types/          # TypeScript types & interfaces
│   ├── dto/            # Data Transfer Objects
│   ├── constants/      # Constants, enums, API endpoints
│   ├── utils/          # Utility functions
│   └── index.ts        # Export all
├── package.json
└── tsconfig.json
```

### Web User (Frontend)

```
web-user/
├── app/                # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── package.json
├── next.config.js
└── tsconfig.json
```

### Web Manager (Frontend)

```
web-manager/
├── app/                # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── package.json
├── next.config.js
└── tsconfig.json
```

## 🎯 Modules và Components

### API Gateway

**Vai trò**: Cổng vào duy nhất cho frontend, nhận HTTP requests và forward đến microservices qua gRPC.

**Modules**:
- `auth/` - Auth endpoints (register, login, profile)

**Features**:
- HTTP REST API
- JWT Authentication
- Swagger Documentation
- CORS configuration
- Request validation

### Auth Service

**Vai trò**: Xử lý authentication và authorization logic.

**Modules**:
- `auth/` - Auth business logic (gRPC)

**Features**:
- gRPC service
- User authentication
- JWT token generation
- Password hashing
- Database operations

### Shared Libraries

#### `@goride/common`
- **Decorators**: `@Public()`, `@Roles()`
- **Guards**: `JwtAuthGuard`, `RolesGuard`

#### `@goride/prisma`
- **PrismaService**: Database service
- **PrismaModule**: Global module

## 📡 Communication Pattern

### Frontend → API Gateway
```
HTTP REST API
POST /api/v1/auth/login
```

### API Gateway → Microservices
```
gRPC
AuthService.Login(request)
```

### Microservices → Database
```
Prisma ORM
prisma.user.findUnique()
```

## 🔧 Configuration Files

### Root Level
- `package.json` - Workspaces configuration, scripts
- `env.example` - Environment variables template

### Server
- `nest-cli.json` - NestJS projects configuration
- `tsconfig.json` - TypeScript configuration
- `tsconfig.base.json` - Base TypeScript config
- `package.json` - Server dependencies

### Applications
- `apps/*/tsconfig.app.json` - App-specific TypeScript config
- `libs/*/tsconfig.lib.json` - Library-specific TypeScript config

## 📦 Package Management

Dự án sử dụng **NPM Workspaces** để quản lý multiple packages:

```json
{
  "workspaces": [
    "server",
    "shared",
    "web-user",
    "web-manager"
  ]
}
```

## 🔌 Ports và Protocols

| Service | Port | Protocol | Description |
|---------|------|----------|-------------|
| API Gateway | 3000 | HTTP | REST API endpoint |
| Auth Service | 50051 | gRPC | Internal microservice |
| Web User | 3003 | HTTP | Frontend app |
| Web Manager | 3002 | HTTP | Admin frontend app |

## 🎨 Naming Conventions

### Files
- Controllers: `*.controller.ts`
- Services: `*.service.ts`
- Modules: `*.module.ts`
- DTOs: `*.dto.ts`
- Interfaces: `*.interface.ts`

### Directories
- Feature modules: `auth/`, `user/`, `rental/`
- Shared code: `libs/common/`, `libs/prisma/`
- Applications: `apps/api-gateway/`, `apps/auth-service/`

### Packages
- `@goride/shared` - Shared package
- `@goride/common` - Common library
- `@goride/prisma` - Prisma library

## 📝 Next Steps

Khi mở rộng dự án, có thể thêm:
- User Service
- Rental Service
- Payment Service
- AI Service
- Các libs mới nếu cần

Tất cả đều theo cấu trúc hiện tại.
