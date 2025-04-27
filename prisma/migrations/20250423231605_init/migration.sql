-- CreateEnum
CREATE TYPE "status" AS ENUM ('READY', 'BORROWED');

-- AlterTable
ALTER TABLE "book" ADD COLUMN     "status" "status" DEFAULT 'READY';
