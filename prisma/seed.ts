// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { files } from '../files';

const prisma = new PrismaClient();

async function main() {
  for (let file of files) {
    await prisma.arquivos.create({
      data: file,
    })
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });