-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 21 2021 г., 14:59
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `donutapp`
--

-- --------------------------------------------------------

--
-- Структура таблицы `gamestatistics`
--

CREATE TABLE `gamestatistics` (
  `id` int(11) NOT NULL,
  `rockPosition` int(4) NOT NULL,
  `time` datetime NOT NULL,
  `jumpPosition` int(4) NOT NULL,
  `rockSize` int(3) NOT NULL,
  `isWin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `gamestatistics`
--

INSERT INTO `gamestatistics` (`id`, `rockPosition`, `time`, `jumpPosition`, `rockSize`, `isWin`) VALUES
(32, 915, '2021-05-21 14:58:43', 837, 81, 0),
(33, 698, '2021-05-21 14:58:46', 601, 83, 0),
(34, 830, '2021-05-21 14:59:20', 767, 83, 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `gamestatistics`
--
ALTER TABLE `gamestatistics`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `gamestatistics`
--
ALTER TABLE `gamestatistics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
