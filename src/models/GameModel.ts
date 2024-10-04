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
    },
    // Las tags son para las categorias de los juegos
    // Ejemplo: "Aventura, Acción, Shooter"
    tags: {
        type: DataTypes.JSON,
        allowNull: true,
    }
});

export { GameModel };
