 CREATE TABLE `PlayerStats` (
 `Player_stats` int(11) NOT NULL,
 `Victorias` int(11) NOT NULL,
 `Derrotas`  int(11) NOT NULL, 
 PRIMARY KEY(`Player_stats`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  CREATE TABLE `match_stats` (
 `máquina` int(11) NOT NULL,
 `jugador`  int(11) NOT NULL, 
 PRIMARY KEY(`máquina`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;