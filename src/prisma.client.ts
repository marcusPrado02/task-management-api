import { PrismaClient } from '@prisma/client';

let prisma: any;
prisma = new PrismaClient();
export default prisma;
