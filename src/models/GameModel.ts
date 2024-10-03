import { DataTypes } from "sequelize";
import { sequelize } from "../db";

const GameModel = sequelize.define("Game", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    downloadLink: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export { GameModel };
