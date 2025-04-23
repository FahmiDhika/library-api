-- CreateEnum
CREATE TYPE "role" AS ENUM ('ADMIN', 'STUDENT');

-- CreateEnum
CREATE TYPE "bookType" AS ENUM ('RANDOM', 'HISTORY', 'COMIC', 'NOVEL', 'ENCYCLOPEDIA', 'SCIENCE', 'BIOGRAPHY');

-- CreateTable
CREATE TABLE "user" (
    "userId" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "role" "role" NOT NULL DEFAULT 'STUDENT',
    "profilePicture" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "book" (
    "bookId" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL DEFAULT '',
    "bookName" TEXT NOT NULL DEFAULT '',
    "bookType" "bookType" NOT NULL DEFAULT 'RANDOM',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("bookId")
);

-- CreateTable
CREATE TABLE "borrow" (
    "borrowId" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL DEFAULT '',
    "note" TEXT DEFAULT '',
    "borrowingTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returnTime" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,

    CONSTRAINT "borrow_pkey" PRIMARY KEY ("borrowId")
);

-- CreateTable
CREATE TABLE "borrowList" (
    "borrowListId" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL DEFAULT '',
    "borrowId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "borrowList_pkey" PRIMARY KEY ("borrowListId")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_uuid_key" ON "user"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "book_uuid_key" ON "book"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "borrow_uuid_key" ON "borrow"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "borrowList_uuid_key" ON "borrowList"("uuid");

-- AddForeignKey
ALTER TABLE "borrow" ADD CONSTRAINT "borrow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrowList" ADD CONSTRAINT "borrowList_borrowId_fkey" FOREIGN KEY ("borrowId") REFERENCES "borrow"("borrowId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrowList" ADD CONSTRAINT "borrowList_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "book"("bookId") ON DELETE RESTRICT ON UPDATE CASCADE;
