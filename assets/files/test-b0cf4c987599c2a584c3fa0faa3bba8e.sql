/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50710
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50710
File Encoding         : 65001

Date: 2024-03-29 08:25:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for card
-- ----------------------------
DROP TABLE IF EXISTS `card`;
CREATE TABLE `card` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '卡ID',
  `card_no` varchar(50) NOT NULL COMMENT '卡号',
  `balance` int(11) NOT NULL COMMENT '卡中余额（单位:分）',
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='卡表';

-- ----------------------------
-- Records of card
-- ----------------------------
INSERT INTO `card` VALUES ('1', '33333333333', '10000000', '11');
INSERT INTO `card` VALUES ('4', '324qwefadr212312eqwf', '1000', '11');
INSERT INTO `card` VALUES ('5', '324qwefadr212312eqwf', '1000', '11');
INSERT INTO `card` VALUES ('6', '11111111111111111', '1000', '11');
INSERT INTO `card` VALUES ('14', '44444444444444444fasdfasd', '1000', '11');
INSERT INTO `card` VALUES ('15', '5555555555555asdfasd', '2000', '11');
INSERT INTO `card` VALUES ('22', '22222222222222222222222222222', '1000', '12');
INSERT INTO `card` VALUES ('24', '123wewfrasdf', '1000', '12');
INSERT INTO `card` VALUES ('29', 'asdfasdfasdfasdf', '1000', '11');
INSERT INTO `card` VALUES ('30', 'asdfasdfasdfasdf', '1000', '11');
INSERT INTO `card` VALUES ('31', 'asdfasdfasdfasdf', '1000', '11');
INSERT INTO `card` VALUES ('32', '11111111111111111111111111', '1000', '11');
INSERT INTO `card` VALUES ('33', 'asdfasdfasdfasdf', '1000', '11');
INSERT INTO `card` VALUES ('34', '111111111111111111111111111111111', '1000', '11');
INSERT INTO `card` VALUES ('35', '111111111111111111111111111111111', '1000', '11');
INSERT INTO `card` VALUES ('42', '2222222222', '0', '11');
INSERT INTO `card` VALUES ('43', '2222222222', '0', '11');
INSERT INTO `card` VALUES ('44', '2222222222', '0', '11');
INSERT INTO `card` VALUES ('45', '2222222222', '0', '11');
INSERT INTO `card` VALUES ('46', '33333', '0', '11');
INSERT INTO `card` VALUES ('47', '111111111111', '1000', '11');
INSERT INTO `card` VALUES ('49', '22222222222', '10000000', '11');
INSERT INTO `card` VALUES ('50', '22222222222', '10000000', '11');

-- ----------------------------
-- Table structure for dept
-- ----------------------------
DROP TABLE IF EXISTS `dept`;
CREATE TABLE `dept` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '部门ID',
  `name` varchar(50) NOT NULL COMMENT '部门名称',
  `pid` bigint(20) NOT NULL COMMENT '父部门id',
  `tips` varchar(50) DEFAULT NULL COMMENT '提示',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='部门表';

-- ----------------------------
-- Records of dept
-- ----------------------------
INSERT INTO `dept` VALUES ('1', '前端部门', '0', null);
INSERT INTO `dept` VALUES ('2', '后端部门', '0', null);
INSERT INTO `dept` VALUES ('3', '测试部门', '0', null);
INSERT INTO `dept` VALUES ('4', '产品部门', '0', null);
INSERT INTO `dept` VALUES ('5', '数据分析部门', '2', null);
INSERT INTO `dept` VALUES ('6', 'UI部门', '1', null);

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `name` varchar(50) NOT NULL COMMENT '角色名称',
  `tips` varchar(50) DEFAULT NULL COMMENT '提示',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='用户角色表';

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '超级管理员', null);
INSERT INTO `role` VALUES ('2', '区域代理', null);

-- ----------------------------
-- Table structure for s_user
-- ----------------------------
DROP TABLE IF EXISTS `s_user`;
CREATE TABLE `s_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `username` varchar(50) NOT NULL COMMENT '用户名',
  `password` varchar(50) NOT NULL COMMENT '密码',
  `birthday` date DEFAULT NULL COMMENT '生日',
  `sex` tinyint(4) NOT NULL COMMENT '性别：0-女；1-男；',
  `email` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(11) NOT NULL COMMENT '电话',
  `address` varchar(100) NOT NULL COMMENT '地址',
  `dept_id` bigint(20) DEFAULT NULL COMMENT '部门ID',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '状态(1：启用  2：冻结  3：删除）',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='用户表';

-- ----------------------------
-- Records of s_user
-- ----------------------------
INSERT INTO `s_user` VALUES ('11', '袁隆平', '123456', '2021-08-12', '1', '438031498@qq.com', '18888888888', '江西九江', '3', '2', '2021-08-23 17:07:12');
INSERT INTO `s_user` VALUES ('12', '黄大年', '123456', '2021-08-12', '1', '438031498@qq.com', '18888888888', '北京', '1', '1', '2021-08-23 17:07:16');
INSERT INTO `s_user` VALUES ('17', '屠呦呦', '111111111111', '2021-08-15', '0', '438031498@qq.com', '18888888888', '北京', '1', '2', '2021-08-23 17:07:19');
INSERT INTO `s_user` VALUES ('18', '杨振宁', 'adsfasdf', '2021-08-15', '1', '438031498@qq.com', '18888888888', '北京', '1', '3', '2021-08-23 17:07:22');
INSERT INTO `s_user` VALUES ('19', '姚期智', '11111', '2021-10-18', '1', '438031498@qq.com', '18888888888', '北京', '1', '1', '2021-10-18 15:12:33');

-- ----------------------------
-- Table structure for user_role_rel
-- ----------------------------
DROP TABLE IF EXISTS `user_role_rel`;
CREATE TABLE `user_role_rel` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `role_id` bigint(20) NOT NULL COMMENT '角色ID',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='用户与角色关联表（多对多）';

-- ----------------------------
-- Records of user_role_rel
-- ----------------------------
INSERT INTO `user_role_rel` VALUES ('1', '19', '1');
INSERT INTO `user_role_rel` VALUES ('2', '19', '2');
