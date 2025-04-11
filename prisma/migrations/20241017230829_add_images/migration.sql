/*
  Warnings:

  - You are about to drop the column `img_habitacion` on the `habitacion_tbl` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `habitacion_tbl` DROP COLUMN `img_habitacion`;

-- CreateTable
CREATE TABLE `images_tbl` (
    `id_image` INTEGER NOT NULL AUTO_INCREMENT,
    `url_image` LONGTEXT NOT NULL,
    `ind_pri_image` TINYINT NULL,
    `id_habitacion` INTEGER NOT NULL,

    INDEX `fk_images_tbl_habitacion_tbl1_idx`(`id_habitacion`),
    PRIMARY KEY (`id_image`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `images_tbl` ADD CONSTRAINT `fk_images_tbl_habitacion_tbl1` FOREIGN KEY (`id_habitacion`) REFERENCES `habitacion_tbl`(`id_habitacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;
