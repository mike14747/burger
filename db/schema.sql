-- DROP DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE burgers_db;
-- USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    patty_id int(3) NOT NULL,
    bun_id int(3) NOT NULL,
    topping_id int(3) NOT NULL,
    devoured boolean DEFAULT 0,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

CREATE TABLE patties (
    patty_id INT AUTO_INCREMENT NOT NULL,
    patty varchar(30) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY Key(patty_id)
);

CREATE TABLE buns (
    bun_id INT AUTO_INCREMENT NOT NULL,
    bun varchar(30) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY Key(bun_id)
);

CREATE TABLE toppings (
    topping_id INT AUTO_INCREMENT NOT NULL,
    topping varchar(30) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY Key(topping_id)
);