/*
  Warnings:

  - You are about to drop the column `ancho` on the `paquete` table. All the data in the column will be lost.
  - You are about to drop the column `espesor` on the `paquete` table. All the data in the column will be lost.
  - You are about to drop the column `largo` on the `paquete` table. All the data in the column will be lost.
  - Added the required column `anchoPaqueteId` to the `paquete` table without a default value. This is not possible if the table is not empty.
  - Added the required column `espesorPaqueteId` to the `paquete` table without a default value. This is not possible if the table is not empty.
  - Added the required column `largoPaqueteId` to the `paquete` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `calidad_aserraderoId_fkey` ON `calidad`;

-- DropIndex
DROP INDEX `categoria_aserraderoId_fkey` ON `categoria`;

-- DropIndex
DROP INDEX `destino_aserraderoId_fkey` ON `destino`;

-- DropIndex
DROP INDEX `largo_aserraderoId_fkey` ON `largo`;

-- DropIndex
DROP INDEX `paquete_aserraderoId_fkey` ON `paquete`;

-- DropIndex
DROP INDEX `paquete_calidadId_fkey` ON `paquete`;

-- DropIndex
DROP INDEX `paquete_estadoId_fkey` ON `paquete`;

-- DropIndex
DROP INDEX `paquete_tipoId_fkey` ON `paquete`;

-- DropIndex
DROP INDEX `paquete_userId_fkey` ON `paquete`;

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
DROP INDEX `rollo_remitoId_fkey` ON `rollo`;

-- DropIndex
DROP INDEX `tipo_aserraderoId_fkey` ON `tipo`;

-- DropIndex
DROP INDEX `transportista_aserraderoId_fkey` ON `transportista`;

-- DropIndex
DROP INDEX `user_aserraderoId_fkey` ON `user`;

-- AlterTable
ALTER TABLE `paquete` DROP COLUMN `ancho`,
    DROP COLUMN `espesor`,
    DROP COLUMN `largo`,
    ADD COLUMN `anchoPaqueteId` INTEGER NOT NULL,
    ADD COLUMN `espesorPaqueteId` INTEGER NOT NULL,
    ADD COLUMN `largoPaqueteId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `largoPaquete` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tamanio` INTEGER NOT NULL,
    `aserraderoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `espesorPaquete` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tamanio` INTEGER NOT NULL,
    `aserraderoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `anchoPaquete` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tamanio` INTEGER NOT NULL,
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
ALTER TABLE `largoPaquete` ADD CONSTRAINT `largoPaquete_aserraderoId_fkey` FOREIGN KEY (`aserraderoId`) REFERENCES `aserradero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `espesorPaquete` ADD CONSTRAINT `espesorPaquete_aserraderoId_fkey` FOREIGN KEY (`aserraderoId`) REFERENCES `aserradero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `anchoPaquete` ADD CONSTRAINT `anchoPaquete_aserraderoId_fkey` FOREIGN KEY (`aserraderoId`) REFERENCES `aserradero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rollo` ADD CONSTRAINT `rollo_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rollo` ADD CONSTRAINT `rollo_largoId_fkey` FOREIGN KEY (`largoId`) REFERENCES `largo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rollo` ADD CONSTRAINT `rollo_aserraderoId_fkey` FOREIGN KEY (`aserraderoId`) REFERENCES `aserradero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rollo` ADD CONSTRAINT `rollo_remitoId_fkey` FOREIGN KEY (`remitoId`) REFERENCES `remito`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `calidad` ADD CONSTRAINT `calidad_aserraderoId_fkey` FOREIGN KEY (`aserraderoId`) REFERENCES `aserradero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tipo` ADD CONSTRAINT `tipo_aserraderoId_fkey` FOREIGN KEY (`aserraderoId`) REFERENCES `aserradero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paquete` ADD CONSTRAINT `paquete_espesorPaqueteId_fkey` FOREIGN KEY (`espesorPaqueteId`) REFERENCES `espesorPaquete`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paquete` ADD CONSTRAINT `paquete_anchoPaqueteId_fkey` FOREIGN KEY (`anchoPaqueteId`) REFERENCES `anchoPaquete`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paquete` ADD CONSTRAINT `paquete_largoPaqueteId_fkey` FOREIGN KEY (`largoPaqueteId`) REFERENCES `largoPaquete`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paquete` ADD CONSTRAINT `paquete_tipoId_fkey` FOREIGN KEY (`tipoId`) REFERENCES `tipo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paquete` ADD CONSTRAINT `paquete_estadoId_fkey` FOREIGN KEY (`estadoId`) REFERENCES `estado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paquete` ADD CONSTRAINT `paquete_aserraderoId_fkey` FOREIGN KEY (`aserraderoId`) REFERENCES `aserradero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paquete` ADD CONSTRAINT `paquete_calidadId_fkey` FOREIGN KEY (`calidadId`) REFERENCES `calidad`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paquete` ADD CONSTRAINT `paquete_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
