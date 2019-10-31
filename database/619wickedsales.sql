-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 31, 2019 at 01:09 AM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `619wickedsales`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `created`) VALUES
(1, '2019-10-02 03:44:55'),
(3, '2019-10-12 00:31:45'),
(4, '2019-10-12 00:36:29'),
(5, '2019-10-17 04:35:34'),
(6, '2019-10-18 23:24:21'),
(7, '2019-10-22 00:13:11'),
(8, '2019-10-30 22:03:50');

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

DROP TABLE IF EXISTS `cartItems`;
CREATE TABLE `cartItems` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `productID` mediumint(8) UNSIGNED NOT NULL,
  `count` smallint(5) UNSIGNED NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cartID` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cartItems`
--

INSERT INTO `cartItems` (`id`, `productID`, `count`, `price`, `added`, `updated`, `cartID`) VALUES
(109, 2, 3, 28, '2019-10-04 02:06:05', '2019-10-04 02:06:45', 1),
(112, 1, 4, 2999, '2019-10-04 02:07:11', '2019-10-04 02:08:31', 3),
(116, 2, 10, 2595, '2019-10-04 02:08:56', '2019-10-07 22:34:19', 3),
(121, 1, 1, 2999, '2019-10-12 00:26:12', '2019-10-12 00:26:12', 2),
(122, 2, 1, 2595, '2019-10-12 00:29:22', '2019-10-12 00:29:22', 2),
(123, 3, 1, 2900, '2019-10-12 00:31:45', '2019-10-12 00:31:45', 3),
(124, 1, 3, 2999, '2019-10-12 00:36:29', '2019-10-14 20:29:01', 4),
(125, 4, 2, 999, '2019-10-12 00:37:36', '2019-10-12 00:43:45', 4),
(128, 2, 1, 2595, '2019-10-14 20:22:23', '2019-10-14 20:22:23', 4),
(129, 3, 1, 2900, '2019-10-14 20:22:38', '2019-10-14 20:22:38', 4),
(130, 6, 1, 830, '2019-10-14 20:28:40', '2019-10-14 20:28:40', 4),
(131, 2, 1, 2595, '2019-10-17 04:35:34', '2019-10-17 04:35:34', 5),
(132, 3, 1, 2900, '2019-10-17 04:44:55', '2019-10-17 04:44:55', 5),
(133, 5, 1, 9900, '2019-10-17 04:45:06', '2019-10-17 04:45:06', 5),
(134, 6, 1, 830, '2019-10-17 04:45:17', '2019-10-17 04:45:17', 5),
(135, 1, 2, 2999, '2019-10-18 23:24:21', '2019-10-18 23:36:45', 6),
(136, 2, 4, 2595, '2019-10-18 23:24:44', '2019-10-19 01:03:28', 6),
(138, 3, 1, 2900, '2019-10-19 01:03:02', '2019-10-19 01:03:02', 6),
(142, 5, 1, 9900, '2019-10-19 01:03:32', '2019-10-19 01:03:32', 6),
(143, 2, 2, 2595, '2019-10-22 00:13:11', '2019-10-23 22:05:51', 7),
(144, 1, 2, 2999, '2019-10-22 23:27:58', '2019-10-23 01:16:01', 7),
(146, 5, 1, 9900, '2019-10-23 19:23:40', '2019-10-23 19:23:40', 7),
(147, 6, 1, 830, '2019-10-23 19:23:44', '2019-10-23 19:23:44', 7),
(148, 2, 1, 2595, '2019-10-30 22:03:50', '2019-10-30 22:03:50', 8);

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

DROP TABLE IF EXISTS `data`;
CREATE TABLE `data` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(14) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `image` varchar(22) DEFAULT NULL,
  `shortDescription` varchar(119) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`id`, `name`, `price`, `image`, `shortDescription`) VALUES
(1, 'Shake Weight', 2999, 'https://bit.ly/2JtVNE6', 'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.'),
(2, 'ShamWow', 2595, 'https://bit.ly/2w9C3Nm', 'It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!'),
(3, 'Snuggie', 2900, 'https://bit.ly/2LVHYAk', 'Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!'),
(4, 'Wax Vac', 999, 'https://bit.ly/2EjCU2a', 'Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.'),
(5, 'Ostrich Pillow', 9900, 'https://bit.ly/2VD80b8', 'Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.'),
(6, 'Tater Mitts', 830, 'https://bit.ly/2w9EmzO', '8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `image_id` int(10) UNSIGNED NOT NULL,
  `image_url` varchar(200) CHARACTER SET utf16 COLLATE utf16_unicode_ci NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`image_id`, `image_url`, `product_id`) VALUES
(1, '/.imaging/mte/steinway-us-theme/XL-Rectangle/dam/pianos/fpo_pianos_environments/renders_model_a_fma.jpg', 1),
(2, 'https://media3.giphy.com/media/YMlUABR5loCbe/giphy.gif', 1),
(5, 'https://dpzone-dysfunctionalpar.netdna-ssl.com/wp-content/uploads/2011/08/shake_feat.jpg', 1),
(6, 'https://i.ytimg.com/vi/DKMbRSV3wcc/maxresdefault.jpg', 1),
(7, 'https://i.ytimg.com/vi/hF4OlKKrFfI/maxresdefault.jpg', 1),
(8, 'https://img.huffingtonpost.com/asset/5bb597722100000001c860fb.jpeg?ops=scalefit_630_noupscale', 2),
(9, 'https://i5.walmartimages.com/asr/7184e439-8acc-4fbe-96be-f9c17e3e5d4d_1.4bbc07567b8b5332ea2a5474bca7cbd1.jpeg', 3),
(10, 'https://ng.jumia.is/Icw1eaV4rRlSR0xBzP7E9llwJ2M=/fit-in/500x500/filters:fill(white):sharpen(1,0,false):quality(100)/product/86/365433/1.jpg?5459', 4),
(11, 'http://www.thetimes.co.uk/imageserver/image/methode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F2935c43a-01c6-11e8-9830-aa0ac4f2bc04.jpg?crop=2667%2C1500%2C0%2C0&resize=685', 5),
(12, 'http://www.dtirz.com/media/I-Got-My-Dog-An-Ostrich-Pillow-By-RussianAnnaB-On-DeviantArt.jpg', 5),
(13, 'https://lisabonnice.files.wordpress.com/2011/12/tater-mitts-002.jpg', 6),
(14, 'https://images.yaoota.com/9LJ5VKsoXqaYgWAS-xw7DNcNcl0=/trim/yaootaweb-production-ng/media/crawledproductimages/bc976e97ac1eb874317b1c0ef33b2a9dd9b2eb17.jpg', 6);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(20) CHARACTER SET utf16 COLLATE utf16_unicode_ci NOT NULL,
  `price` mediumint(9) NOT NULL,
  `image` varchar(90) CHARACTER SET utf16 COLLATE utf16_unicode_ci NOT NULL,
  `shortDescription` varchar(190) CHARACTER SET utf16 COLLATE utf16_unicode_ci NOT NULL,
  `longDescription` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `shortDescription`, `longDescription`) VALUES
(1, 'Shake Weight', 2999, 'https://bit.ly/2JtVNE6', 'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.', 'Shake ma Weight Beeches!'),
(2, 'ShamWow', 2595, 'https://bit.ly/2w9C3Nm', 'It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!', 'Wow your Sham!'),
(3, 'Snuggie', 2900, 'https://bit.ly/2LVHYAk', 'Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!', 'Snuggie wit me gurl'),
(4, 'Wax Vac', 999, 'https://bit.ly/2EjCU2a', 'Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.', 'Suck that wax out'),
(5, 'Ostrich Pillow', 9900, 'https://bit.ly/2VD80b8', 'Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.', 'his tentacles are all over my body'),
(6, 'Tater Mitts', 830, 'https://bit.ly/2w9EmzO', '8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.', 'mitt romney tater');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cartproductid` (`productID`,`cartID`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `image_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
