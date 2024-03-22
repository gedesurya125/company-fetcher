import { prisma } from "prismaClient/db";

export async function runQuery(callback = async () => {}) {
  // ... you will write your Prisma Client queries here
  return await callback(prisma);
}

runQuery()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
