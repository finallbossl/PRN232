import { PrismaClient, UserRole, MotorbikeType, MotorbikeStatus, DiscountType } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('Seed started...');

    // 1. Clear existing data
    await prisma.review.deleteMany();
    await prisma.payment.deleteMany();
    await prisma.rental.deleteMany();
    await prisma.motorbike.deleteMany();
    await prisma.blog.deleteMany();
    await prisma.promotion.deleteMany();
    await prisma.user.deleteMany();

    // 2. Create Users
    const hashedPassword = await bcrypt.hash('123456', 10);

    const admin = await prisma.user.create({
        data: {
            email: 'admin@goride.com',
            password: hashedPassword,
            name: 'Admin GoRide',
            role: 'ADMIN',
            phone: '0987654321',
        },
    });

    const customer = await prisma.user.create({
        data: {
            email: 'customer@gmail.com',
            password: hashedPassword,
            name: 'Nguyễn Văn A',
            role: 'CUSTOMER',
            phone: '0123456789',
        },
    });

    console.log('Users created:', { admin: admin.email, customer: customer.email });

    // 3. Create Motorbikes
    const motorbikes = [
        {
            name: 'Honda Wave RSX',
            type: MotorbikeType.MANUAL,
            pricePerDay: 150000,
            description: 'Xe số đời mới, tiết kiệm xăng, phù hợp đi trong phố.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29A-123.45',
            year: 2022,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '4.0 L',
            engineSize: '110cc',
        },
        {
            name: 'Honda Air Blade 125',
            type: MotorbikeType.SCOOTER,
            pricePerDay: 250000,
            description: 'Xe ga sang trọng, động cơ mạnh mẽ, cốp rộng.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29B-567.89',
            year: 2023,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '4.4 L',
            engineSize: '125cc',
        },
        {
            name: 'Yamaha Exciter 155',
            type: MotorbikeType.SEMI_AUTO,
            pricePerDay: 300000,
            description: 'Xe côn tay thể thao, phong cách trẻ trung.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29C-999.99',
            year: 2023,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '5.4 L',
            engineSize: '155cc',
        },
        {
            name: 'Honda Vision',
            type: MotorbikeType.SCOOTER,
            pricePerDay: 200000,
            description: 'Xe ga nhỏ gọn, dễ điều khiển, phù hợp cho nữ.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29D-111.22',
            year: 2021,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '5.2 L',
            engineSize: '110cc',
        },
        {
            name: 'Honda SH 150i',
            type: MotorbikeType.SCOOTER,
            pricePerDay: 500000,
            description: 'Xe ga cao cấp, đẳng cấp thượng lưu.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29E-888.88',
            year: 2023,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '7.8 L',
            engineSize: '150cc',
        },
        {
            name: 'Vespa Sprint 125',
            type: MotorbikeType.SCOOTER,
            pricePerDay: 450000,
            description: 'Phong cách Ý cổ điển, thời trang và lôi cuốn.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29F-555.66',
            year: 2023,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '7.0 L',
            engineSize: '125cc',
        },
        {
            name: 'Ducati Scrambler',
            type: MotorbikeType.SEMI_AUTO,
            pricePerDay: 1200000,
            description: 'Siêu xe phân khối lớn, dành cho những chuyến đi mạo hiểm.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29G-777.77',
            year: 2022,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '13.5 L',
            engineSize: '800cc',
        },
        {
            name: 'Yamaha NVX 155',
            type: MotorbikeType.SCOOTER,
            pricePerDay: 350000,
            description: 'Xe ga thể thao, động cơ Blue Core mạnh mẽ, phanh ABS an toàn.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29M-123.45',
            year: 2023,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '5.5 L',
            engineSize: '155cc',
        },
        {
            name: 'Honda Winner X',
            type: MotorbikeType.SEMI_AUTO,
            pricePerDay: 280000,
            description: 'Xe côn tay phổ thông, thiết kế góc cạnh, cá tính.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29N-567.89',
            year: 2022,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '4.5 L',
            engineSize: '150cc',
        },
        {
            name: 'Kawasaki Z1000',
            type: MotorbikeType.SEMI_AUTO,
            pricePerDay: 2500000,
            description: 'Naked-bike huyền thoại, âm thanh uy lực, sức mạnh vượt trội.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29P-999.99',
            year: 2023,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '17.0 L',
            engineSize: '1043cc',
        },
        {
            name: 'Suzuki GSX-R150',
            type: MotorbikeType.SEMI_AUTO,
            pricePerDay: 450000,
            description: 'Dòng xe sport-bike thuần chất, tốc độ và linh hoạt.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29Q-111.44',
            year: 2022,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '11.0 L',
            engineSize: '150cc',
        },
        {
            name: 'Piaggio Liberty 125',
            type: MotorbikeType.SCOOTER,
            pricePerDay: 350000,
            description: 'Vẻ đẹp hiện đại, thanh lịch, trang bị phanh ABS.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29R-777.22',
            year: 2023,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '6.0 L',
            engineSize: '125cc',
        },
        {
            name: 'Honda CB150R',
            type: MotorbikeType.SEMI_AUTO,
            pricePerDay: 500000,
            description: 'Neo Sports Café, thiết kế cổ điển kết hợp hiện đại.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29S-888.11',
            year: 2023,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '8.5 L',
            engineSize: '150cc',
        },
        {
            name: 'Yamaha Grande Hybrid',
            type: MotorbikeType.SCOOTER,
            pricePerDay: 280000,
            description: 'Xe ga tiết kiệm xăng nhất Việt Nam, phong cách Pháp.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29T-222.33',
            year: 2023,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '4.4 L',
            engineSize: '125cc',
        },
        {
            name: 'SYM Attila Elizabeth',
            type: MotorbikeType.SCOOTER,
            pricePerDay: 130000,
            description: 'Dòng xe bình dân, bền bỉ, chi phí thuê cực thấp.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29U-444.55',
            year: 2020,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '5.0 L',
            engineSize: '110cc',
        },
        {
            name: 'Honda PCX 160',
            type: MotorbikeType.SCOOTER,
            pricePerDay: 450000,
            description: 'Phong cách Touring đô thị, tư thế lái thoải mái.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29V-666.11',
            year: 2023,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '8.1 L',
            engineSize: '160cc',
        },
        {
            name: 'Triumph Bonneville T120',
            type: MotorbikeType.SEMI_AUTO,
            pricePerDay: 3000000,
            description: 'Biểu tượng Classic Anh Quốc, đẳng cấp và sang trọng bậc nhất.',
            status: MotorbikeStatus.AVAILABLE,
            licensePlate: '29X-000.01',
            year: 2023,
            images: ['https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3'],
            fuelCapacity: '14.5 L',
            engineSize: '1200cc',
        },
    ];

    for (const motorbike of motorbikes) {
        await prisma.motorbike.create({ data: motorbike });
    }

    // 4. Create Blogs
    const blogs = [
        {
            tag: 'Kinh nghiệm',
            title: 'Top 10 cung đường ven biển đẹp nhất Việt Nam bằng xe máy',
            description: 'Khám phá những hành trình đầy mê hoặc từ Bắc chí Nam cùng bạn bè...',
            content: 'Nội dung chi tiết về các cung đường ven biển như Phan Thiết - Mũi Né, Đèo Lương Sơn - Đại Lãnh...',
            image: 'https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3',
        },
        {
            tag: 'Cẩm nang',
            title: 'Bí quyết bỏ túi khi thuê xe máy tại Quy Nhơn an toàn nhất',
            description: 'Những lưu ý quan trọng về giấy tờ và kiểm tra xe trước khi nhận...',
            content: 'Khi thuê xe tại Quy Nhơn, bạn cần kiểm tra lốp xe, phanh và giấy tờ xe đầy đủ...',
            image: 'https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3',
        },
        {
            tag: 'Lịch trình',
            title: 'Lịch trình Quy Nhơn 3 ngày 2 đêm đi bằng xe máy cực chất',
            description: 'Gợi ý các điểm đến không thể bỏ qua: Kỳ Co, Eo Gió, Hòn Khô...',
            content: 'Ngày 1: Tham quan trung tâm thành phố. Ngày 2: Đi Kỳ Co - Eo Gió. Ngày 3: Khám phá Hòn Khô...',
            image: 'https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3',
        },
        {
            tag: 'Ẩm thực',
            title: 'Top 5 quán cafe chill ngắm biển đẹp nhất Quy Nhơn',
            description: 'Tận hưởng gió biển cùng ly cafe thơm ngon tại Surf Bar, S-Blue...',
            content: 'Những địa điểm lý tưởng để bạn check-in và thư giãn sau hành trình lái xe đầy thú vị...',
            image: 'https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3',
        },
        {
            tag: 'An toàn',
            title: 'Hướng dẫn kiểm tra xe máy an toàn trước khi đi xa',
            description: 'Đảm bảo phanh, lốp, đèn và nhông xích luôn trong tình trạng tốt nhất...',
            content: 'Trước mỗi chuyến đi phượt, việc kiểm tra xe kỹ lưỡng là vô cùng quan trọng để đảm bảo an toàn...',
            image: 'https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3',
        },
        {
            tag: 'Chuẩn bị',
            title: 'Danh sách đồ dùng cần thiết khi đi phượt bằng xe máy',
            description: 'Đừng quên những vật dụng nhỏ nhưng quan trọng này trong hành lý của bạn.',
            content: 'Giáp bảo hộ, găng tay, bộ sạc dự phòng, và túi sơ cứu là những thứ không thể thiếu...',
            image: 'https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3',
        },
        {
            tag: 'Bảo trì',
            title: 'Tại sao thay dầu định kỳ lại quan trọng đối với xe thuê?',
            description: 'Hiểu về cách động cơ hoạt động để bảo vệ xe và an toàn của chính bạn.',
            content: 'Dầu máy giúp bôi trơn và làm mát động cơ, việc thay dầu đúng hạn giúp xe vận hành êm ái...',
            image: 'https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3',
        },
        {
            tag: 'Thời điểm',
            title: 'Thời gian lý tưởng nhất để khám phá Quy Nhơn bằng xe máy',
            description: 'Tránh mùa mưa và tận hưởng cái nắng vàng rực rỡ của Bình Định.',
            content: 'Từ tháng 3 đến tháng 9 là khoảng thời gian tuyệt vời nhất với biển xanh cát trắng...',
            image: 'https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3',
        },
        {
            tag: 'Gia đình',
            title: 'Lưu ý khi đi du lịch xe máy cùng trẻ nhỏ an toàn',
            description: 'Làm thế nào để cả gia đình có một chuyến đi vui vẻ và an tâm nhất.',
            content: 'Chọn những mẫu xe ga sàn phẳng rộng, trang bị mũ bảo hiểm chuẩn cho bé...',
            image: 'https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3',
        },
        {
            tag: 'Đặc quyền',
            title: 'Lợi ích khi đăng ký thẻ thành viên Elite Gold tại GoRide',
            description: 'Những đặc quyền và ưu đãi riêng biệt dành cho khách hàng thân thiết.',
            content: 'Ưu tiên nhận xe mới, giảm giá trực tiếp 10% và miễn phí gói bảo hiểm shield...',
            image: 'https://tse3.mm.bing.net/th/id/OIP.jrHIl10WmticpRc10KLkHQHaFf?rs=1&pid=ImgDetMain&o=7&rm=3',
        },
    ];

    for (const blog of blogs) {
        await prisma.blog.create({ data: blog });
    }

    // 5. Create Promotions
    const promotions = [
        {
            code: 'HELLO20',
            discountType: DiscountType.PERCENTAGE,
            discountValue: 20,
            minOrderValue: 200000,
            badge: '20% OFF',
            title: 'Chào bạn mới',
            description: 'Giảm ngay 20% cho chuyến đi đầu tiên khám phá thành phố.',
            image: 'https://cdn.pixabay.com/photo/2016/12/11/18/10/motorcycle-1899912_1280.jpg',
        },
        {
            code: 'WEEKEND15',
            discountType: DiscountType.PERCENTAGE,
            discountValue: 15,
            minOrderValue: 500000,
            badge: '15% OFF',
            title: 'Cuối tuần rực rỡ',
            description: 'Thuê xe cuối tuần, nhận ưu đãi hấp dẫn cho mọi dòng xe.',
            image: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/motorcycle-1313312_1280.jpg',
        },
        {
            code: 'ELITESUMMER',
            discountType: DiscountType.FIXED_AMOUNT,
            discountValue: 200,
            minOrderValue: 1000000,
            badge: 'ELITE SUMMER',
            title: 'Mùa hè rực cháy',
            description: 'Đồng hành cùng Elite trên mọi nẻo đường hè oi ả.',
            image: 'https://cdn.pixabay.com/photo/2015/09/02/12/35/motorcycle-918635_1280.jpg',
        },
        {
            code: 'GOLDMEMBER',
            discountType: DiscountType.PERCENTAGE,
            discountValue: 30,
            minOrderValue: 0,
            badge: 'MEMBER DAY',
            title: 'Ngày hội thành viên',
            description: 'Giảm giá cực sâu cho chủ thẻ Elite Gold vào thứ 2 hàng tuần.',
            image: 'https://cdn.pixabay.com/photo/2014/12/16/22/25/women-570883_1280.jpg',
        },
        {
            code: 'POINTSX2',
            discountType: DiscountType.PERCENTAGE,
            discountValue: 0,
            minOrderValue: 1500000,
            badge: 'DOUBLE POINTS',
            title: 'X2 Điểm thưởng',
            description: 'Tích điểm gấp đôi khi đặt các dòng xe siêu cao cấp.',
            image: 'https://cdn.pixabay.com/photo/2017/12/13/18/06/motorcycle-3017342_1280.jpg',
        },
        {
            code: 'FLASH50',
            discountType: DiscountType.PERCENTAGE,
            discountValue: 50,
            minOrderValue: 200000,
            badge: 'FLASH SALE',
            title: 'Ưu đãi chớp nhoáng',
            description: 'Mỗi thứ 4 hàng tuần, giảm sốc 50% cho các dòng xe số.',
            image: 'https://cdn.pixabay.com/photo/2020/03/17/20/02/motorcycle-4941743_1280.jpg',
        },
        {
            code: 'REF100',
            discountType: DiscountType.FIXED_AMOUNT,
            discountValue: 100,
            minOrderValue: 300000,
            badge: 'REFERRAL',
            title: 'Giới thiệu bạn bè',
            description: 'Nhận ngay Voucher 100k cho mỗi khách giới thiệu thành công.',
            image: 'https://cdn.pixabay.com/photo/2017/04/05/10/45/motor-2204587_1280.jpg',
        },
        {
            code: 'BIZELITE',
            discountType: DiscountType.PERCENTAGE,
            discountValue: 25,
            minOrderValue: 5000000,
            badge: 'CORPORATE',
            title: 'Đối tác doanh nghiệp',
            description: 'Chính sách giá đặc biệt cho các tour và đoàn lớn.',
            image: 'https://cdn.pixabay.com/photo/2015/08/27/09/06/bike-909690_1280.jpg',
        },
    ];

    for (const promo of promotions) {
        await prisma.promotion.create({ data: promo });
    }

    console.log('Motorbikes created:', motorbikes.length);
    console.log('Blogs created:', blogs.length);
    console.log('Promotions created:', promotions.length);
    console.log('Seed completed successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
