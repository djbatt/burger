DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Veggie Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Turkey Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Angus", false);