# Hướng Dẫn Push Code Lên GitHub

## Vấn đề: Code không hiển thị trên GitHub

Có thể do một trong các nguyên nhân sau:
1. Chưa khởi tạo git repository
2. Chưa commit files
3. Chưa push thành công
4. Push lên nhánh sai
5. Files bị ignore bởi .gitignore

## Giải pháp: Chạy các lệnh sau

### Bước 1: Kiểm tra Git Repository

```bash
# Kiểm tra xem đã có git repository chưa
git status
```

Nếu báo lỗi "not a git repository", chạy:
```bash
git init
```

### Bước 2: Cấu hình Git (nếu chưa có)

```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### Bước 3: Kiểm tra Remote

```bash
# Xem remote hiện tại
git remote -v
```

Nếu chưa có remote hoặc sai URL:
```bash
# Thêm remote
git remote add origin https://github.com/finallbossl/PRN232.git

# Hoặc cập nhật URL nếu đã có
git remote set-url origin https://github.com/finallbossl/PRN232.git
```

### Bước 4: Add và Commit Files

```bash
# Add tất cả files (trừ những file trong .gitignore)
git add .

# Kiểm tra xem files nào được add
git status

# Commit
git commit -m "Initial commit: GoRide monorepo with microservices architecture"
```

### Bước 5: Push Lên GitHub

```bash
# Đảm bảo đang ở nhánh main
git branch -M main

# Push lên GitHub
git push -u origin main
```

## Nếu Repository trên GitHub không empty

Nếu repository trên GitHub đã có README.md hoặc files khác:

```bash
# Pull trước
git pull origin main --allow-unrelated-histories

# Giải quyết conflict nếu có, sau đó:
git add .
git commit -m "Merge remote and local"
git push -u origin main
```

## Kiểm tra Files Được Track

Để xem files nào được git track:

```bash
git ls-files
```

## Kiểm tra Files Bị Ignore

Để xem files nào bị ignore:

```bash
git status --ignored
```

## Lưu ý

- Files trong `.gitignore` sẽ KHÔNG được push lên GitHub (đúng như mong muốn)
- `node_modules/`, `.env`, `dist/` sẽ không được push
- Chỉ source code và config files được push

## Troubleshooting

### Lỗi: "fatal: not a git repository"
→ Chạy `git init`

### Lỗi: "fatal: remote origin already exists"
→ Chạy `git remote set-url origin https://github.com/finallbossl/PRN232.git`

### Lỗi: "Updates were rejected"
→ Repository trên GitHub có code khác, cần pull trước:
```bash
git pull origin main --allow-unrelated-histories
```

### Lỗi: Authentication failed
→ Cần cấu hình GitHub credentials hoặc sử dụng Personal Access Token
