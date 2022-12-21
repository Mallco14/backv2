/*
  Warnings:

  - You are about to drop the column `cantidad` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `distribuidor` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `precio` on the `products` table. All the data in the column will be lost.
  - Added the required column `description` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `cantidad`,
    DROP COLUMN `distribuidor`,
    DROP COLUMN `img`,
    DROP COLUMN `nombre`,
    DROP COLUMN `precio`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NULL,
    ADD COLUMN `price` INTEGER NOT NULL,
    ADD COLUMN `stock` INTEGER NOT NULL;
