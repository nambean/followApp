-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2018 at 09:40 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `followapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `mob_no` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(15) NOT NULL,
  `rule` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `mob_no`, `user_name`, `password`, `rule`) VALUES
(4, 'Nam', 'Hoàng', 942401990, 'admin', 'namnam', 1),
(5, 'Nam', 'Hoang', 942401990, 'abc', '123456', 0);

-- --------------------------------------------------------

--
-- Table structure for table `victim`
--

CREATE TABLE `victim` (
  `id` int(5) NOT NULL,
  `sdt` int(50) NOT NULL,
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` datetime NOT NULL,
  `url_store` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `victim`
--

INSERT INTO `victim` (`id`, `sdt`, `created_date`, `update_date`, `url_store`, `status`) VALUES
(1, 942401990, '2018-07-28 00:00:00', '2018-07-28 00:00:00', '', 0),
(2, 942401991, '2018-07-28 00:00:00', '2018-07-28 00:00:00', '', 0),
(3, 942401992, '2018-07-28 00:00:00', '2018-07-28 00:00:00', '', 0),
(4, 942401993, '2018-07-28 00:00:00', '2018-07-28 00:00:00', '', 0),
(5, 912341993, '2018-07-28 00:00:00', '2018-07-28 00:00:00', '', 0),
(6, 912341994, '2018-07-28 00:00:00', '2018-07-28 00:00:00', '', 1),
(7, 912341995, '2018-07-28 00:00:00', '2018-07-28 00:00:00', '', 0),
(8, 912341996, '2018-07-28 00:00:00', '2018-07-28 00:00:00', '', 0),
(9, 912341997, '2018-07-28 00:00:00', '2018-07-28 00:00:00', '', 0),
(10, 912341998, '2018-07-28 00:00:00', '2018-07-28 00:00:00', '', 0),
(11, 912341999, '2018-07-28 00:00:00', '2018-07-28 00:00:00', '', 0),
(12, 91234100, '2018-07-28 00:00:00', '2018-07-28 00:00:00', '', 1),
(13, 922221234, '2018-07-29 02:34:15', '2018-07-18 07:25:37', '', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `victim`
--
ALTER TABLE `victim`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `victim`
--
ALTER TABLE `victim`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
