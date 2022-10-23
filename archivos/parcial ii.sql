CREATE TABLE `editorial` (
  `ideditorial` INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(40) NOT NULL
);

CREATE TABLE `libro` (
  `idlibro` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(50) NOT NULL,
  `autor` VARCHAR(40) NOT NULL,
  `paginas` INTEGER NOT NULL,
  `edicion` VARCHAR(20) NOT NULL,
  `ideditorial` INTEGER NOT NULL
);

ALTER TABLE `libro` ADD FOREIGN KEY (`ideditorial`) REFERENCES `editorial` (`ideditorial`);
