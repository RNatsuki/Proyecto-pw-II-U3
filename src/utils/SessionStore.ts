import * as session from "express-session"; // Importar el módulo de sesiones para express
import expressMysqlSession from "express-mysql-session";
import config from "../config";

const MySQLStore = expressMysqlSession(session); // Crear la instancia de MySQLStore utilizando express-mysql-session

const sessionStore = new MySQLStore({
  host: config.DB.HOST, // Host de la base de datos desde las variables de entorno o "localhost" por defecto
  port: config.DB.PORT, // Puerto de la base de datos desde las variables de entorno o 3306 por defecto
  user: config.DB.USER, // Usuario de la base de datos desde las variables de entorno o "root" por defecto
  password: config.DB.PASSWORD, // Contraseña de la base de datos desde las variables de entorno o "" por defecto
  database: config.DB.NAME, // Nombre de la base de datos desde las variables de entorno o "games-db" por defecto
});

export { sessionStore };
