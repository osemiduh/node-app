import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const result = await prisma.post.update({
        where: {
            id: 1
        },
        data: {
            author: {
                connect: {
                    email: 'alice@prisma.io'
                }
            }
        }
    })
    console.log(result);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())