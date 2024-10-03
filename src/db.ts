import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "ibarra",
  password: "ibarra12",
  database: "games-db",
  logging: false,
});


export { sequelize }
