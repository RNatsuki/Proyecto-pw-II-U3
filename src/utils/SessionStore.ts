import * as session from "express-session"; // Importar el módulo de sesiones para express
import expressMysqlSession from "express-mysql-session";


const MySQLStore = expressMysqlSession(session); // Crear la instancia de MySQLStore utilizando express-mysql-session

const sessionStore = new MySQLStore({
    host: process.env.DB_HOST || "localhost", // Host de la base de datos desde las variables de entorno o "localhost" por defecto
    port: Number(process.env.DB_PORT) || 3306, // Puerto de la base de datos desde las variables de entorno o 3306 por defecto
    user: process.env.DB_USER || "root", // Usuario de la base de datos desde las variables de entorno o "root" por defecto
    password: process.env.DB_PASSWORD || "password", // Contraseña de la base de datos desde las variables de entorno o "password" por defecto
    database: process.env.DB_NAME || "games-db", // Nombre de la base de datos desde las variables de entorno o "example-db" por defecto
  });

  export { sessionStore };
