-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Фев 10 2023 г., 13:50
-- Версия сервера: 10.4.24-MariaDB
-- Версия PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `jptv20_games`
--

-- --------------------------------------------------------

--
-- Структура таблицы `bundle`
--

CREATE TABLE `bundle` (
  `id` int(11) NOT NULL,
  `title` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `characteristics`
--

CREATE TABLE `characteristics` (
  `id` int(11) NOT NULL,
  `title` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `publishYear` int(11) NOT NULL,
  `publisher` int(11) NOT NULL,
  `poster` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `ageLimit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `game_bundle`
--

CREATE TABLE `game_bundle` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `bundleId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `game_categories`
--

CREATE TABLE `game_categories` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `game_characteristics`
--

CREATE TABLE `game_characteristics` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `characteristicId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `game_companies`
--

CREATE TABLE `game_companies` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `companyId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `game_platforms`
--

CREATE TABLE `game_platforms` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `platformId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `game_regions`
--

CREATE TABLE `game_regions` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `regionId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `game_users`
--

CREATE TABLE `game_users` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `platforms`
--

CREATE TABLE `platforms` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `regions`
--

CREATE TABLE `regions` (
  `id` int(11) NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `reviewText` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `grade` int(11) NOT NULL,
  `gameUserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nick` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `passwords` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `salt` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `wallet` float NOT NULL,
  `avatar` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `region` int(11) NOT NULL,
  `birthDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `bundle`
--
ALTER TABLE `bundle`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `characteristics`
--
ALTER TABLE `characteristics`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `publisher` (`publisher`);

--
-- Индексы таблицы `game_bundle`
--
ALTER TABLE `game_bundle`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameId` (`gameId`),
  ADD KEY `bundleId` (`bundleId`);

--
-- Индексы таблицы `game_categories`
--
ALTER TABLE `game_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`),
  ADD KEY `gameId` (`gameId`);

--
-- Индексы таблицы `game_characteristics`
--
ALTER TABLE `game_characteristics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameId` (`gameId`),
  ADD KEY `characteristicId` (`characteristicId`);

--
-- Индексы таблицы `game_companies`
--
ALTER TABLE `game_companies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `companyId` (`companyId`),
  ADD KEY `gameId` (`gameId`);

--
-- Индексы таблицы `game_platforms`
--
ALTER TABLE `game_platforms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `platformId` (`platformId`),
  ADD KEY `gameId` (`gameId`);

--
-- Индексы таблицы `game_regions`
--
ALTER TABLE `game_regions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameId` (`gameId`),
  ADD KEY `regionId` (`regionId`);

--
-- Индексы таблицы `game_users`
--
ALTER TABLE `game_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameId` (`gameId`),
  ADD KEY `userId` (`userId`);

--
-- Индексы таблицы `platforms`
--
ALTER TABLE `platforms`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `regions`
--
ALTER TABLE `regions`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gameUserId` (`gameUserId`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `region` (`region`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `bundle`
--
ALTER TABLE `bundle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `characteristics`
--
ALTER TABLE `characteristics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `game_bundle`
--
ALTER TABLE `game_bundle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `game_categories`
--
ALTER TABLE `game_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `game_characteristics`
--
ALTER TABLE `game_characteristics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `game_companies`
--
ALTER TABLE `game_companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `game_platforms`
--
ALTER TABLE `game_platforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `game_regions`
--
ALTER TABLE `game_regions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `game_users`
--
ALTER TABLE `game_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `platforms`
--
ALTER TABLE `platforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `regions`
--
ALTER TABLE `regions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `games_ibfk_1` FOREIGN KEY (`publisher`) REFERENCES `companies` (`id`);

--
-- Ограничения внешнего ключа таблицы `game_bundle`
--
ALTER TABLE `game_bundle`
  ADD CONSTRAINT `game_bundle_ibfk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `game_bundle_ibfk_2` FOREIGN KEY (`bundleId`) REFERENCES `bundle` (`id`);

--
-- Ограничения внешнего ключа таблицы `game_categories`
--
ALTER TABLE `game_categories`
  ADD CONSTRAINT `game_categories_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `game_categories_ibfk_2` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`);

--
-- Ограничения внешнего ключа таблицы `game_characteristics`
--
ALTER TABLE `game_characteristics`
  ADD CONSTRAINT `game_characteristics_ibfk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `game_characteristics_ibfk_2` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `game_characteristics_ibfk_3` FOREIGN KEY (`characteristicId`) REFERENCES `characteristics` (`id`),
  ADD CONSTRAINT `game_characteristics_ibfk_4` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `game_characteristics_ibfk_5` FOREIGN KEY (`characteristicId`) REFERENCES `characteristics` (`id`);

--
-- Ограничения внешнего ключа таблицы `game_companies`
--
ALTER TABLE `game_companies`
  ADD CONSTRAINT `game_companies_ibfk_1` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`),
  ADD CONSTRAINT `game_companies_ibfk_2` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`);

--
-- Ограничения внешнего ключа таблицы `game_platforms`
--
ALTER TABLE `game_platforms`
  ADD CONSTRAINT `game_platforms_ibfk_1` FOREIGN KEY (`platformId`) REFERENCES `platforms` (`id`),
  ADD CONSTRAINT `game_platforms_ibfk_2` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`);

--
-- Ограничения внешнего ключа таблицы `game_regions`
--
ALTER TABLE `game_regions`
  ADD CONSTRAINT `game_regions_ibfk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `game_regions_ibfk_2` FOREIGN KEY (`regionId`) REFERENCES `regions` (`id`);

--
-- Ограничения внешнего ключа таблицы `game_users`
--
ALTER TABLE `game_users`
  ADD CONSTRAINT `game_users_ibfk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `game_users_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `game_users_ibfk_3` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `game_users_ibfk_4` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `game_users_ibfk_5` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `game_users_ibfk_6` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`gameUserId`) REFERENCES `game_users` (`id`);

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`region`) REFERENCES `regions` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
