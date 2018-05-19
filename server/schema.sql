CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20)
);

CREATE TABLE rooms (
  room_id INT AUTO_INCREMENT PRIMARY KEY,
  roomname VARCHAR(20)
);

CREATE TABLE messages (
  message_id INT AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(140),
  local_timestamp TIMESTAMP(6),
  user_id INT,
  room_id INT,
  FOREIGN KEY(user_id) REFERENCES users (user_id),
  FOREIGN KEY(room_id) REFERENCES rooms (room_id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE directory (
  directory_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  room_id INT,
  FOREIGN KEY(user_id) REFERENCES users (user_id),
  FOREIGN KEY(room_id) REFERENCES rooms (room_id));



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

