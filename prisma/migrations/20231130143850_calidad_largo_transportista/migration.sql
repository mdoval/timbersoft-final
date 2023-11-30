/*
  Warnings:

  - Added the required column `aserraderoId` to the `largo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calidadId` to the `rollo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aserraderoId` to the `transportista` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `categoria_aserraderoId_fkey` ON `categoria`;

-- DropIndex
DROP INDEX `destino_aserraderoId_fkey` ON `destino`;

-- DropIndex
DROP INDEX `proveedor_aserraderoId_fkey` ON `proveedor`;

-- DropIndex
DROP INDEX `remito_aserraderoId_fkey` ON `remito`;

-- DropIndex
DROP INDEX `remito_destinoId_fkey` ON `remito`;

-- DropIndex
DROP INDEX `remito_proveedorId_fkey` ON `remito`;

-- DropIndex
DROP INDEX `remito_transportistaId_fkey` ON `remito`;

-- DropIndex
DROP INDEX `rollo_aserraderoId_fkey` ON `rollo`;

-- DropIndex
DROP INDEX `rollo_categoriaId_fkey` ON `rollo`;

-- DropIndex
DROP INDEX `rollo_largoId_fkey` ON `rollo`;

-- DropIndex
DROP INDEX `user_aserraderoId_fkey` ON `user`;

-- AlterTable
ALTER TABLE `largo` ADD COLUMN `aserraderoId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `rollo` ADD COLUMN `calidadId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `transportista` ADD COLUMN `aserraderoId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `calidad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `aserraderoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_aserraderoId_fkey` FOREIGN KEY (`aserraderoId`) REFERENCES `aserradero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `remito` ADD CONSTRAINT `remito_proveedorId_fkey` FOREIGN KEY (`proveedorId`) REFERENCES `proveedor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `remito` ADD CONSTRAINT `remito_transportistaId_fkey` FOREIGN KEY (`transportistaId`) REFERENCES `transportista`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `remito` ADD CONSTRAINT `remito_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `destino`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `remito` ADD CONSTRAINT `remito_aserraderoId_fkey` FOREIGN KEY (`aserraderoId`) REFERENCES `aserradero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `proveedor` ADD CONSTRAINT `proveedor_aserraderoId_fkey` FOREIGN KEY (`aserraderoId`) REFERENCES `aserradero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transportista` ADD CONSTRAINT `transportista_aserraderoId_fkey` FOREIGN KEY (`aserraderoId`) REFERENCES `aserradero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `categoria` ADD CONSTRAINT `categoria_aserraderoId_fkey` FOREIGN KEY (`aserraderoId`) REFERENCES `aserradero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `destino` ADD CONSTRAINT `destino_aserraderoId_fkey` FOREIGN KEY (`aserraderoId`) REFERENCES `aserradero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `largo` ADD CONSTRAINT `largo_aserraderoId_fkey` FOREIGN KEY (`aserraderoId`) REFERENCES `aserradero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rollo` ADD CONSTRAINT `rollo_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rollo` ADD CONSTRAINT `rollo_calidadId_fkey` FOREIGN KEY (`calidadId`) REFERENCES `calidad`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rollo` ADD CONSTRAINT `rollo_largoId_fkey` FOREIGN KEY (`largoId`) REFERENCES `largo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rollo` ADD CONSTRAINT `rollo_aserraderoId_fkey` FOREIGN KEY (`aserraderoId`) REFERENCES `aserradero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `calidad` ADD CONSTRAINT `calidad_aserraderoId_fkey` FOREIGN KEY (`aserraderoId`) REFERENCES `aserradero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
