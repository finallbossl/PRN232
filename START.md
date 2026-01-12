# GoRide - Hướng Dẫn Chạy Dự Án

## 📋 Prerequisites

Trước khi bắt đầu, đảm bảo bạn đã cài đặt:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **PostgreSQL** >= 14.0
- **Git**

Kiểm tra version:
```bash
node --version
npm --version
psql --version
```

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone <repository-url>
cd PRN232-CA
```

### 2. Cài Đặt Dependencies

```bash
# Cài đặt tất cả dependencies (root + server + shared + web-user + web-manager)
npm run install:all
```

Hoặc cài đặt từng package:
```bash
npm install                    # Root
cd server && npm install       # Server
cd ../shared && npm install    # Shared
cd ../web-user && npm install  # Web User
cd ../web-manager && npm install # Web Manager
```

### 3. Setup Database

#### 3.1. Tạo Database

```bash
# Kết nối PostgreSQL
psql -U postgres

# Tạo database
CREATE DATABASE goride_db;

# Tạo user (optional)
CREATE USER goride_user WITH PASSWORD 'goride_password';
GRANT ALL PRIVILEGES ON DATABASE goride_db TO goride_user;

# Exit
\q
```

#### 3.2. Setup Prisma

```bash
cd server

# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# (Optional) Open Prisma Studio để xem database
npm run prisma:studio
```

### 4. Environment Variables

#### 4.1. Root Level

Tạo file `.env` từ `env.example`:
```bash
cp env.example .env
```

Chỉnh sửa `.env`:
```env
# Database
DATABASE_URL="postgresql://goride_user:goride_password@localhost:5432/goride_db?schema=public"

# JWT
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
JWT_EXPIRES_IN="7d"

# Gateway
GATEWAY_PORT=3000
API_PREFIX=api/v1
CORS_ORIGIN="http://localhost:3002,http://localhost:3003"

# Auth Service
AUTH_SERVICE_HOST=localhost
AUTH_SERVICE_PORT=50051
AUTH_SERVICE_HTTP_PORT=3001
```

#### 4.2. Server

Tạo file `server/.env`:
```bash
cd server
cp ../env.example .env
# Hoặc copy nội dung từ env.example
```

### 5. Build Shared Package

```bash
# Build shared package (cần thiết để các package khác dùng)
cd shared
npm run build
cd ..
```

### 6. Chạy Dự Án

#### Option 1: Chạy Tất Cả (Recommended)

Từ root directory:
```bash
npm start
# hoặc
npm run start:dev
```

Lệnh này sẽ chạy:
- API Gateway (Port 3000)
- Auth Service (gRPC Port 50051)
- Web User (Port 3003)
- Web Manager (Port 3002)

#### Option 2: Chạy Từng Service Riêng

**Terminal 1 - API Gateway:**
```bash
cd server
npm run start:gateway:dev
```

**Terminal 2 - Auth Service:**
```bash
cd server
npm run start:auth-service:dev
```

**Terminal 3 - Web User:**
```bash
cd web-user
npm run dev
```

**Terminal 4 - Web Manager:**
```bash
cd web-manager
npm run dev
```

### 7. Kiểm Tra Services

Sau khi chạy, kiểm tra các URLs:

- **API Gateway**: http://localhost:3000
- **API Documentation (Swagger)**: http://localhost:3000/api/docs
- **Web User**: http://localhost:3003
- **Web Manager**: http://localhost:3002
- **Auth Service HTTP** (health check): http://localhost:3001

## 🔧 Development Scripts

### Root Level

```bash
# Chạy tất cả
npm start
npm run start:dev

# Cài đặt dependencies
npm run install:all

# Build tất cả
npm run build:all

# Build shared package
npm run build:shared
```

### Server

```bash
cd server

# Chạy Gateway
npm run start:gateway:dev

# Chạy Auth Service
npm run start:auth-service:dev

# Chạy cả 2
npm run start:all

# Prisma commands
npm run prisma:generate      # Generate Prisma Client
npm run prisma:migrate       # Run migrations
npm run prisma:studio        # Open Prisma Studio

# Build
npm run build
```

### Shared

```bash
cd shared

# Build
npm run build

# Watch mode (development)
npm run watch
```

### Web User / Web Manager

```bash
cd web-user  # hoặc cd web-manager

# Development
npm run dev

# Build
npm run build

# Start production
npm start
```

## 🐛 Troubleshooting

### Port đã được sử dụng

**Windows:**
```bash
# Tìm process đang dùng port
netstat -ano | findstr :3000

# Kill process
taskkill /PID <PID> /F
```

**macOS/Linux:**
```bash
# Tìm process đang dùng port
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Module không tìm thấy

```bash
# Build shared package trước
cd shared
npm run build
cd ..

# Xóa node_modules và cài lại
npm run clean  # (nếu có script này)
npm install
npm run install:all
```

### Database connection error

1. Kiểm tra PostgreSQL đang chạy:
```bash
# Windows
services.msc  # Tìm PostgreSQL service

# macOS/Linux
sudo service postgresql status
```

2. Kiểm tra DATABASE_URL trong `.env`
3. Kiểm tra database đã được tạo chưa
4. Kiểm tra user permissions

### Prisma errors

```bash
cd server

# Reset Prisma Client
rm -rf node_modules/.prisma
npm run prisma:generate

# Nếu cần reset database (⚠️ sẽ xóa data)
npm run prisma:migrate reset
```

### Workspace errors

```bash
# Xóa node_modules và cài lại
rm -rf node_modules
rm -rf server/node_modules
rm -rf shared/node_modules
rm -rf web-user/node_modules
rm -rf web-manager/node_modules

npm install
npm run install:all
```

## 📝 Development Workflow

### 1. Pull Latest Code
```bash
git pull origin main
```

### 2. Install/Update Dependencies
```bash
npm run install:all
```

### 3. Update Database Schema
```bash
cd server
npm run prisma:migrate
npm run prisma:generate
```

### 4. Start Development
```bash
npm start
```

### 5. Make Changes
- Backend: `server/apps/*/src/`
- Frontend: `web-user/app/` hoặc `web-manager/app/`
- Shared: `shared/src/`

### 6. Test Changes
- API: http://localhost:3000/api/docs
- Frontend: http://localhost:3003 hoặc http://localhost:3002

## 🔐 Environment Variables Reference

Xem file `env.example` để biết tất cả environment variables cần thiết.

### Required Variables

- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - JWT secret key
- `GATEWAY_PORT` - API Gateway port (default: 3000)
- `AUTH_SERVICE_PORT` - Auth Service gRPC port (default: 50051)

### Optional Variables

- `JWT_EXPIRES_IN` - JWT expiration (default: 7d)
- `CORS_ORIGIN` - Allowed CORS origins
- `API_PREFIX` - API prefix (default: api/v1)
- `NODE_ENV` - Environment (development/production)

## 📚 Additional Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [gRPC Documentation](https://grpc.io/docs/)

## ✅ Checklist Setup

- [ ] Node.js và npm đã cài đặt
- [ ] PostgreSQL đã cài đặt và chạy
- [ ] Database đã được tạo
- [ ] Environment variables đã được cấu hình
- [ ] Dependencies đã được cài đặt (`npm run install:all`)
- [ ] Shared package đã được build
- [ ] Prisma migrations đã chạy
- [ ] Tất cả services đã chạy thành công

## 🎉 Bắt Đầu Development

Sau khi setup xong, bạn có thể:

1. Truy cập Swagger docs: http://localhost:3000/api/docs
2. Test API endpoints
3. Phát triển features mới
4. Xem database: `cd server && npm run prisma:studio`

Chúc bạn code vui vẻ! 🚀
