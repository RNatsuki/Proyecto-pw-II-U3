import { DataTypes } from "sequelize";
import { sequelize } from "../db";

enum Role {
  ADMIN = "admin",
  USER = "user",
}

const AuthModel = sequelize.define("Auth", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM(Role.ADMIN, Role.USER),
    allowNull: false,
  },
}, {
    timestamps: false,
});


export { AuthModel, Role };
