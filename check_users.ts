import { PrismaClient } from '@prisma/client';

async function checkUsers() {
    const prisma = new PrismaClient();
    try {
        const total = await prisma.user.count();
        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                role: true
            }
        });
        console.log('Total users:', total);
        console.log('Users:', JSON.stringify(users, null, 2));
    } catch (err) {
        console.error('Error checking users:', err);
    } finally {
        await prisma.$disconnect();
    }
}

checkUsers();
