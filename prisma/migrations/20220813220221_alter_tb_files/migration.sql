-- AlterTable
ALTER TABLE "files" ALTER COLUMN "size" SET DEFAULT 0.0,
ALTER COLUMN "size" SET DATA TYPE DECIMAL(65,30);
