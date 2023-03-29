
ALTER TABLE user ADD CONSTRAINT username_unique UNIQUE (username);
ALTER TABLE user ADD CONSTRAINT email_unique UNIQUE (email);
ALTER TABLE photo MODIFY createdAt DATETIME;