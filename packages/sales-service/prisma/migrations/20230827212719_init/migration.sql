-- CreateTable
CREATE TABLE "Sale" (
    "id" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "customer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);
