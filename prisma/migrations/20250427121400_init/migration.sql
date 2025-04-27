/*
  Warnings:

  - Made the column `returnTime` on table `borrow` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "borrow" ALTER COLUMN "returnTime" SET NOT NULL;
