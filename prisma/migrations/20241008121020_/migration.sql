-- CreateTable
CREATE TABLE `estados_tbl` (
    `id_estado` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_estados` VARCHAR(45) NULL,
    `cod_estados` VARCHAR(45) NULL,
    `ind_hab_estados` TINYINT NULL,
    `grupo_estados_tbl_id_grupo_estado` INTEGER NOT NULL,

    UNIQUE INDEX `estados_tbl_id_estado_key`(`id_estado`),
    INDEX `fk_estados_tbl_grupo_estados_tbl1_idx`(`grupo_estados_tbl_id_grupo_estado`),
    PRIMARY KEY (`id_estado`, `grupo_estados_tbl_id_grupo_estado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `grupo_estados_tbl` (
    `id_grupo_estado` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_grupo_estado` VARCHAR(45) NULL,
    `cod_grupo_estado` VARCHAR(45) NULL,
    `ind_hab_grupo_estado` TINYINT NULL,

    PRIMARY KEY (`id_grupo_estado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `habitacion_tbl` (
    `id_habitacion` INTEGER NOT NULL AUTO_INCREMENT,
    `des_habitacion` VARCHAR(200) NULL,
    `id_tipo_alojamiento_habitacion` INTEGER NOT NULL,
    `img_habitacion` VARCHAR(400) NULL,

    UNIQUE INDEX `habitacion_tbl_id_habitacion_key`(`id_habitacion`),
    INDEX `fk_habitacion_tbl_tipo_alojamiento_tbl1_idx`(`id_tipo_alojamiento_habitacion`),
    PRIMARY KEY (`id_habitacion`, `id_tipo_alojamiento_habitacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reserva_habitacion_tbl` (
    `id_reserva_reserva_habitacion` INTEGER NOT NULL,
    `id_habitacion_reserva_habitacion` INTEGER NOT NULL,
    `id_estado_reserva_habitacion` INTEGER NOT NULL,

    INDEX `fk_reserva_tbl_has_habitacion_tbl_estados_tbl1_idx`(`id_estado_reserva_habitacion`),
    INDEX `fk_reserva_tbl_has_habitacion_tbl_habitacion_tbl1_idx`(`id_habitacion_reserva_habitacion`),
    INDEX `fk_reserva_tbl_has_habitacion_tbl_reserva_tbl1_idx`(`id_reserva_reserva_habitacion`),
    PRIMARY KEY (`id_reserva_reserva_habitacion`, `id_habitacion_reserva_habitacion`, `id_estado_reserva_habitacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reserva_tbl` (
    `id_reserva` INTEGER NOT NULL AUTO_INCREMENT,
    `fec_ent_reserva` DATETIME(0) NULL,
    `fec_sal_reserva` DATETIME(0) NULL,
    `des_reserva` VARCHAR(200) NULL,
    `can_per_reserva` INTEGER NULL,
    `cos_tot_reserva` DOUBLE NULL,
    `fec_reg_reserva` DATETIME(0) NULL,
    `id_estado_reserva` INTEGER NOT NULL,
    `id_usuario_reserva` INTEGER NOT NULL,

    UNIQUE INDEX `reserva_tbl_id_reserva_key`(`id_reserva`),
    INDEX `fk_reserva_tbl_estados_tbl1_idx`(`id_estado_reserva`),
    INDEX `fk_reserva_tbl_usuario_tbl1_idx`(`id_usuario_reserva`),
    PRIMARY KEY (`id_reserva`, `id_estado_reserva`, `id_usuario_reserva`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `servicio_habitacion` (
    `id_habitacion_servicio_habitacion` INTEGER NOT NULL,
    `id_servicio_servicio_habitacion` INTEGER NOT NULL,
    `can_servicio_habitacion` INTEGER NULL,

    INDEX `fk_habitacion_tbl_has_servicio_tbl_habitacion_tbl1_idx`(`id_habitacion_servicio_habitacion`),
    INDEX `fk_habitacion_tbl_has_servicio_tbl_servicio_tbl1_idx`(`id_servicio_servicio_habitacion`),
    PRIMARY KEY (`id_habitacion_servicio_habitacion`, `id_servicio_servicio_habitacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_servicio_tbl` (
    `id_tipo_servicio` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_tipo_servicio` VARCHAR(45) NULL,
    `cod_tipo_servicio` VARCHAR(45) NULL,
    `des_tipo_servicio` VARCHAR(200) NULL,

    PRIMARY KEY (`id_tipo_servicio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `servicio_tbl` (
    `id_servicio` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_servicio` VARCHAR(45) NULL,
    `des_servicio` VARCHAR(200) NULL,
    `pre_servicio` DOUBLE NULL,
    `ind_hab_servicio` TINYINT NULL,
    `can_per_servicio` INTEGER NULL,
    `id_tipo_servicio` INTEGER NOT NULL,

    INDEX `fk_servicio_tbl_tipo_servicio_tbl1`(`id_tipo_servicio`),
    PRIMARY KEY (`id_servicio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_alojamiento_tbl` (
    `id_tipo_alojamiento` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_tipo_alojamiento` VARCHAR(45) NULL,
    `des_tipo_alojamiento` VARCHAR(200) NULL,
    `ico_tipo_alojamiento` VARCHAR(45) NULL,

    PRIMARY KEY (`id_tipo_alojamiento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario_tbl` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_usuario` VARCHAR(45) NOT NULL,
    `fec_nac_usuario` DATETIME(0) NOT NULL,
    `tel_usuario` VARCHAR(45) NOT NULL,
    `ema_usuario` VARCHAR(100) NOT NULL,
    `dir_usuario` VARCHAR(100) NULL,
    `tip_doc_usuario` VARCHAR(45) NOT NULL,
    `num_doc_usuario` VARCHAR(45) NOT NULL,
    `con_usuario` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `estados_tbl` ADD CONSTRAINT `fk_estados_tbl_grupo_estados_tbl1` FOREIGN KEY (`grupo_estados_tbl_id_grupo_estado`) REFERENCES `grupo_estados_tbl`(`id_grupo_estado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `habitacion_tbl` ADD CONSTRAINT `fk_habitacion_tbl_tipo_alojamiento_tbl1` FOREIGN KEY (`id_tipo_alojamiento_habitacion`) REFERENCES `tipo_alojamiento_tbl`(`id_tipo_alojamiento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reserva_habitacion_tbl` ADD CONSTRAINT `fk_reserva_tbl_has_habitacion_tbl_estados_tbl1` FOREIGN KEY (`id_estado_reserva_habitacion`) REFERENCES `estados_tbl`(`id_estado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reserva_habitacion_tbl` ADD CONSTRAINT `fk_reserva_tbl_has_habitacion_tbl_habitacion_tbl1` FOREIGN KEY (`id_habitacion_reserva_habitacion`) REFERENCES `habitacion_tbl`(`id_habitacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reserva_habitacion_tbl` ADD CONSTRAINT `fk_reserva_tbl_has_habitacion_tbl_reserva_tbl1` FOREIGN KEY (`id_reserva_reserva_habitacion`) REFERENCES `reserva_tbl`(`id_reserva`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reserva_tbl` ADD CONSTRAINT `fk_reserva_tbl_estados_tbl1` FOREIGN KEY (`id_estado_reserva`) REFERENCES `estados_tbl`(`id_estado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reserva_tbl` ADD CONSTRAINT `fk_reserva_tbl_usuario_tbl1` FOREIGN KEY (`id_usuario_reserva`) REFERENCES `usuario_tbl`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `servicio_habitacion` ADD CONSTRAINT `fk_habitacion_tbl_has_servicio_tbl_habitacion_tbl1` FOREIGN KEY (`id_habitacion_servicio_habitacion`) REFERENCES `habitacion_tbl`(`id_habitacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `servicio_habitacion` ADD CONSTRAINT `fk_habitacion_tbl_has_servicio_tbl_servicio_tbl1` FOREIGN KEY (`id_servicio_servicio_habitacion`) REFERENCES `servicio_tbl`(`id_servicio`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `servicio_tbl` ADD CONSTRAINT `fk_servicio_tbl_tipo_servicio_tbl1` FOREIGN KEY (`id_tipo_servicio`) REFERENCES `tipo_servicio_tbl`(`id_tipo_servicio`) ON DELETE NO ACTION ON UPDATE NO ACTION;
