-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Янв 02 2023 г., 22:22
-- Версия сервера: 10.4.25-MariaDB
-- Версия PHP: 8.1.10

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
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `title`) VALUES
(1, 'Horror'),
(2, 'Visual Novel'),
(3, 'Shooter'),
(4, 'Sandbox'),
(5, 'Factory Sim'),
(6, 'Immersive Sim'),
(7, 'Arcade'),
(8, 'Fighting'),
(9, 'Rythm'),
(10, 'Platformer'),
(11, 'Rogue like'),
(12, 'Strategy'),
(13, 'Puzzle'),
(14, 'RPG'),
(15, 'MMO'),
(16, 'Diabloid'),
(17, 'Psyhological Horror'),
(18, 'Survival horror');

-- --------------------------------------------------------

--
-- Структура таблицы `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `companies`
--

INSERT INTO `companies` (`id`, `title`) VALUES
(1, 'Bethesda'),
(2, 'Arcane Studio'),
(3, '2K'),
(4, 'Irrational Games'),
(5, 'TomHapp Games'),
(6, 'GSC GameWorld'),
(7, '4A Games'),
(8, 'CD Project Red'),
(9, 'Ubisoft'),
(10, 'Id Software'),
(11, 'Remedy'),
(12, 'TellTale'),
(13, 'Tommorow Corporation'),
(14, 'Valve'),
(15, 'Gearbox'),
(16, 'Frictional Games'),
(17, 'Edmund McMillen'),
(18, 'Scott Cawthon'),
(19, 'Devolver Digital'),
(20, 'Dennaton Games'),
(21, 'Deep Silver'),
(22, 'tobyfox'),
(23, 'Red Barrels'),
(24, 'Re-Logic'),
(25, 'ProjectMoon'),
(26, 'vanripper'),
(27, 'Illusion Softworks'),
(28, 'Wube Games'),
(29, 'Soviet Games'),
(30, 'Team Salvato'),
(31, 'Free lives'),
(32, 'Askii Soft'),
(33, '505 Games'),
(34, 'KOJIMA PRODUCTIONS'),
(35, 'Chinese Room');

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
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `games`
--

INSERT INTO `games` (`id`, `title`, `publishYear`, `publisher`, `poster`, `description`) VALUES
(1, 'SOMA', 2015, 16, 'https://pics.filmaffinity.com/Soma-652285790-large.jpg', 'Действие игры разворачивается на отдалённой подводной исследовательской базе PATHOS-II, где машины начинают обретать человеческие черты. Саймон Джаретт, протагонист игры, обнаруживает, что таинственным образом оказался на данной станции и начинает невольн'),
(2, 'Amnesia: The dark descent', 2010, 16, 'https://upload.wikimedia.org/wikipedia/en/6/62/Amnesia-The-Dark-Descent-Cover-Art.png', 'Игрок исследует помещения замка и решает головоломки для продвижения вперёд, избегая при этом монстров. Для решения головоломок иногда применяются предметы окружения, с которыми игрок может взаимодействовать: поднимать, перемещать и метать.'),
(3, 'Amnesia: A machine for pigs', 2013, 16, 'https://static.wikia.nocookie.net/amnesia/images/7/7c/Boxshotamfp.jpg/revision/latest?cb=20130816031436', 'Действие игры происходит в ночь 31 декабря 1899 на 1 января 1900 года. Её сюжет повествует о промышленнике Освальде Мандусе, подхватившем во время путешествия в Мексику загадочную лихорадку. Лежащему в бреду Освальду мерещится образ некой машины, способно'),
(4, 'Broforce', 2014, 19, 'https://static-cdn.jtvnw.net/ttv-boxart/313256_IGDB-272x380.jpg', 'В игре множество протагонистов, называющих себя «Бро». Broforce — отряд коммандос, борющихся с террористами и спасающих других Бро из плена. Миссия считается законченной, когда Бро убьют злого босса, поднимут на базе врага американский флаг и улетят на ве'),
(5, 'Bioshock', 2007, 3, 'https://m.media-amazon.com/images/M/MV5BNjBkZmI4NzktZTJmMC00NDNlLTk2M2ItNGEwODUxZGEwNmZiXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg', ''),
(6, 'Bioshock 2', 2010, 3, 'https://m.media-amazon.com/images/M/MV5BZTRmYWM4MWMtYzRiNS00MDgyLTg1NTUtZTlkZmI0MWNiMWRjXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_FMjpg_UX1000_.jpg', ''),
(7, 'Bioshock Infinite', 2013, 3, 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/35/BioShock_Infinite.jpeg/422px-BioShock_Infinite.jpeg?20130109154236', '');

-- --------------------------------------------------------

--
-- Структура таблицы `game_categories`
--

CREATE TABLE `game_categories` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `game_categories`
--

INSERT INTO `game_categories` (`id`, `gameId`, `categoryId`) VALUES
(1, 1, 1),
(2, 1, 17),
(3, 1, 18),
(4, 2, 1),
(5, 2, 18),
(6, 3, 1),
(7, 3, 18),
(8, 4, 1),
(9, 4, 0),
(10, 5, 3),
(11, 6, 3),
(12, 7, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `game_companies`
--

CREATE TABLE `game_companies` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `companyId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `game_companies`
--

INSERT INTO `game_companies` (`id`, `gameId`, `companyId`) VALUES
(1, 1, 1),
(2, 1, 6),
(3, 2, 1),
(4, 2, 6),
(5, 3, 3),
(6, 3, 5),
(7, 4, 3),
(8, 4, 1),
(9, 5, 3),
(10, 6, 3),
(11, 7, 4);

-- --------------------------------------------------------

--
-- Структура таблицы `game_platforms`
--

CREATE TABLE `game_platforms` (
  `id` int(11) NOT NULL,
  `gameId` int(11) NOT NULL,
  `platformId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `game_platforms`
--

INSERT INTO `game_platforms` (`id`, `gameId`, `platformId`) VALUES
(1, 1, 1),
(2, 1, 9),
(3, 1, 2),
(4, 2, 1),
(5, 2, 15),
(6, 2, 2),
(7, 2, 9),
(8, 3, 1),
(9, 3, 2),
(10, 3, 9),
(11, 3, 15),
(12, 4, 1),
(13, 4, 9),
(14, 4, 15),
(15, 5, 1),
(16, 5, 2),
(17, 5, 3),
(18, 5, 8),
(19, 5, 9),
(20, 5, 15),
(21, 6, 1),
(22, 6, 2),
(23, 6, 3),
(24, 6, 9),
(25, 6, 15),
(26, 6, 8),
(27, 7, 1),
(28, 7, 3),
(29, 7, 8);

-- --------------------------------------------------------

--
-- Структура таблицы `platforms`
--

CREATE TABLE `platforms` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `platforms`
--

INSERT INTO `platforms` (`id`, `title`) VALUES
(1, 'PC'),
(2, 'XBox one'),
(3, 'XBox 360'),
(4, 'XBox'),
(5, 'XBox S'),
(6, 'PlayStation'),
(7, 'PlayStation 2'),
(8, 'PlayStation 3'),
(9, 'PlayStation 4'),
(10, 'PlayStation 5'),
(11, 'PlayStation Portable'),
(12, 'PlayStation Vita'),
(13, 'PlayStation Move'),
(14, 'PlayStation VR'),
(15, 'Nintendo Switch'),
(16, 'Web');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
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
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `game_categories`
--
ALTER TABLE `game_categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `game_companies`
--
ALTER TABLE `game_companies`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `game_platforms`
--
ALTER TABLE `game_platforms`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `platforms`
--
ALTER TABLE `platforms`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT для таблицы `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT для таблицы `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `game_categories`
--
ALTER TABLE `game_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `game_companies`
--
ALTER TABLE `game_companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `game_platforms`
--
ALTER TABLE `game_platforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT для таблицы `platforms`
--
ALTER TABLE `platforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
