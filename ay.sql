-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2018 at 10:17 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ay`
--

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `dateor` date NOT NULL,
  `fname` text NOT NULL,
  `lname` text NOT NULL,
  `country` text NOT NULL,
  `phn` double NOT NULL,
  `email` text NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `currency` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `dateor`, `fname`, `lname`, `country`, `phn`, `email`, `username`, `password`, `currency`) VALUES
(1, '2018-04-09', 'David', 'Ehioreren', 'Afghanistan', 8023975087, 'bobibix@gmail.com', 'damilola', 'damilola', '$'),
(2, '2018-04-09', 'David', 'Ehioreren', 'Afghanistan', 8023975087, 'bobibix@gmail.com', 'damilolaa', '0f917cde2c10da2710e2ee7d4e93b275', '$'),
(3, '2018-04-09', 'David', 'Ehioreren', 'Afghanistan', 8023975087, 'bobibix@gmail.com', 'damilolaaa', '0f917cde2c10da2710e2ee7d4e93b275', '$'),
(4, '2018-04-09', 'David', 'Ehioreren', 'Afghanistan', 8023975087, 'uvazee567@gmail.com', 'damilolaaaaa', '0f917cde2c10da2710e2ee7d4e93b275', '$'),
(5, '2018-04-09', 'David', 'Ehioreren', 'Afghanistan', 8023975087, 'uvazee567@gmail.com', 'tobi', '0f917cde2c10da2710e2ee7d4e93b275', '$');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
