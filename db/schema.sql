### Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE `burgers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(45) DEFAULT NULL,
  `devoured` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) 