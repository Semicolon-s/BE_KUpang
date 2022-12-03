CREATE DATABASE ku_pang;
USE ku_pang;

CREATE TABLE product
(
	productId int AUTO_INCREMENT PRIMARY KEY,
    productName VARCHAR(20) NOT NULL,
    imgUrl VARCHAR(50) NOT NULL
);

CREATE TABLE stock
(
	productId int PRIMARY KEY,
    stockNum int default 0
    foreign key (productId)
);

CREATE TABLE order_list
(
	orderId int AUTO_INCREMENT PRIMARY KEY,
    productId int NOT NULL,
    orderNum int NOT NULL,
    buyer VARCHAR(20) NOT NULL,
    phonenumber VARCHAR(10) NOT NULL,
    address VARCHAR(30) NOT NULL,
    orderState int NOT NULL,
    orderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    foreign key (productId)
    REFERENCES product(productId) ON UPDATE CASCADE
);

CREATE TABLE user
(
	userId int AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(10) NOT NULL,
    userPassword VARCHAR(10) NOT NULL,
    userToken VARCHAR(30) NOT NULL
);

CREATE TABLE warehouse_history
(
	warhouseId int AUTO_INCREMENT PRIMARY KEY,
    productId int NOT NULL,
    warhouseState int NOT NULL,
    warhouseNum int NOT NULL,
    warhouseDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    foreign key (productId)
    REFERENCES product(productId) ON UPDATE CASCADE
);