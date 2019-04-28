DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int(10) AUTO_INCREMENT NOT NULL,
    patty_id int(3) NOT NULL,
    bun_id int(3) NOT NULL,
    topping_id int(3) NOT NULL,
    devoured boolean DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE patties (
    patty_id int(3) AUTO_INCREMENT NOT NULL,
    patty varchar(30) NOT NULL,
    PRIMARY Key (patty_id)
);

CREATE TABLE buns (
    bun_id int(3) AUTO_INCREMENT NOT NULL,
    bun varchar(30) NOT NULL,
    PRIMARY Key (bun_id)
);

CREATE TABLE toppings (
    topping_id int(3) AUTO_INCREMENT NOT NULL,
    topping varchar(30) NOT NULL,
    PRIMARY Key (topping_id)
);