-- DROP all table

DROP TABLE IF EXISTS `user_badge`;
DROP TABLE IF EXISTS `photo_theme`;
DROP TABLE IF EXISTS `theme_tag`;
DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `tag`;
DROP TABLE IF EXISTS `theme`;
DROP TABLE IF EXISTS `badge`;
DROP TABLE IF EXISTS `photo`;

-- Table structure for table `user`

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL ,
  `email` varchar(45) NOT NULL ,
  `hashedPassword` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Table structure for table `tag`

CREATE TABLE `tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tagname` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Table structure for table `theme`

CREATE TABLE `theme` (
  `id` int NOT NULL AUTO_INCREMENT,
  `themename` varchar(45) NOT NULL,
  `is_active` BIT NOT NULL,
  `score` int NOT NULL,
  PRIMARY KEY (`id`)
);

-- Table structure for table `badge`

CREATE TABLE `badge` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `points` INT NOT NULL,
  PRIMARY KEY (`id`)
);

-- Table structure for table `photo`

CREATE TABLE `photo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imgName` VARCHAR(100) NOT NULL,
  `createdAt` date NOT NULL,
  `score` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`)
);

-- Table structure for table `user_badge`

CREATE TABLE `user_badge` (
  `user_id` INT NOT NULL,
  `badge_id` INT NOT NULL, 
    FOREIGN KEY (user_id)  
    REFERENCES user(id),
    FOREIGN KEY (badge_id) 
    REFERENCES badge(id)
);

-- Table structure for table "photo_theme"

CREATE TABLE `photo_theme` (
  `photo_id` INT NOT NULL,
  `theme_id` INT NOT NULL,
  FOREIGN KEY (photo_id) 
  REFERENCES photo(id),
  FOREIGN KEY (theme_id) 
  REFERENCES theme(id)
);

-- Table structure for table "theme_tag"

CREATE TABLE `theme_tag` (
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `theme_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  FOREIGN KEY (tag_id) 
  REFERENCES tag(id),
  FOREIGN KEY (theme_id) 
  REFERENCES theme(id)
);