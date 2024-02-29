use user_table

CREATE TABLE users(
id int NOT NULL  PRIMARY key AUTO_INCREMENT,
username VARCHAR(255) UNIQUE,
userpassword VARCHAR(255) UNIQUE,
create_time DATETIME COMMENT 'create time'
) COMMENT '';