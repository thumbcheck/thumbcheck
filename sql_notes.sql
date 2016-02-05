-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'user'
-- 
-- ---

DROP TABLE IF EXISTS `user`;
		
CREATE TABLE `user` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR NULL DEFAULT NULL,
  `password` INTEGER NULL DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'presentations'
-- 
-- ---

DROP TABLE IF EXISTS `presentations`;
		
CREATE TABLE `presentations` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `title` VARCHAR NULL DEFAULT NULL,
  `owner_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'questions'
-- 
-- ---

DROP TABLE IF EXISTS `questions`;
		
CREATE TABLE `questions` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `prompt` VARCHAR NULL DEFAULT NULL,
  `presentation_id` INTEGER NULL DEFAULT NULL,
  `question_type` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'question_types'
-- 
-- ---

DROP TABLE IF EXISTS `question_types`;
		
CREATE TABLE `question_types` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `type` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'sessions'
-- 
-- ---

DROP TABLE IF EXISTS `sessions`;
		
CREATE TABLE `sessions` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `presentation_id` INTEGER NULL DEFAULT NULL,
  `identifier` VARCHAR NULL DEFAULT NULL,
  `time` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'sessions_questions'
-- 
-- ---

DROP TABLE IF EXISTS `sessions_questions`;
		
CREATE TABLE `sessions_questions` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `session_id` INTEGER NULL DEFAULT NULL,
  `question_id` INTEGER NULL DEFAULT NULL,
  `results_thumbs_up` INTEGER NULL DEFAULT NULL,
  `result_thumbs_down` INTEGER NULL DEFAULT NULL,
  `result_a` INTEGER NULL DEFAULT NULL,
  `result_b` INTEGER NULL DEFAULT NULL,
  `result_c` INTEGER NULL DEFAULT NULL,
  `result_d` INTEGER NULL DEFAULT NULL,
  `result_e` INTEGER NULL DEFAULT NULL,
  `result_open_response` VARCHAR NULL DEFAULT NULL,
  `question_type_snapshot` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `presentations` ADD FOREIGN KEY (owner_id) REFERENCES `user` (`id`);
ALTER TABLE `questions` ADD FOREIGN KEY (presentation_id) REFERENCES `presentations` (`id`);
ALTER TABLE `questions` ADD FOREIGN KEY (question_type) REFERENCES `question_types` (`id`);
ALTER TABLE `sessions` ADD FOREIGN KEY (presentation_id) REFERENCES `presentations` (`id`);
ALTER TABLE `sessions_questions` ADD FOREIGN KEY (session_id) REFERENCES `sessions` (`id`);
ALTER TABLE `sessions_questions` ADD FOREIGN KEY (question_id) REFERENCES `questions` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `user` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `presentations` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `questions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `question_types` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `sessions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `sessions_questions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `user` (`id`,`username`,`password`,`name`) VALUES
-- ('','','','');
-- INSERT INTO `presentations` (`id`,`title`,`owner_id`) VALUES
-- ('','','');
-- INSERT INTO `questions` (`id`,`prompt`,`presentation_id`,`question_type`) VALUES
-- ('','','','');
-- INSERT INTO `question_types` (`id`,`type`) VALUES
-- ('','');
-- INSERT INTO `sessions` (`id`,`presentation_id`,`identifier`,`time`) VALUES
-- ('','','','');
-- INSERT INTO `sessions_questions` (`id`,`session_id`,`question_id`,`results_thumbs_up`,`result_thumbs_down`,`result_a`,`result_b`,`result_c`,`result_d`,`result_e`,`result_open_response`,`question_type_snapshot`) VALUES
-- ('','','','','','','','','','','','');