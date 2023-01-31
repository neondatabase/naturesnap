-- CreateTable
CREATE TABLE "Nature" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "seen" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Nature_pkey" PRIMARY KEY ("id")
);
