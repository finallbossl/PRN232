import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const count = await prisma.motorbike.count();
  console.log(`Motorbike count: ${count}`);
  if (count > 0) {
    const bikes = await prisma.motorbike.findMany({ take: 5 });
    console.log('Sample bikes:', JSON.stringify(bikes, null, 2));
  }
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
