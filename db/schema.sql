CREATE DATABASE moviepedia_db;

USE moviepedia_db;

CREATE TABLE movies
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    release_date VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    PRIMARY KEY(id)
);