-- CreateEnum
CREATE TYPE "borrowStatus" AS ENUM ('DONE', 'BORROWED');

-- AlterTable
ALTER TABLE "borrow" ADD COLUMN     "borrowStatus" "borrowStatus" NOT NULL DEFAULT 'BORROWED';
