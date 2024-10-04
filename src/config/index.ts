
export default {
    DB: {
        HOST: process.env.DB_HOST || "localhost",
        PORT: Number(process.env.DB_PORT) || 3306,
        USER: process.env.DB_USER || "root",
        PASSWORD: process.env.DB_PASSWORD || "",
        NAME: process.env.DB_NAME || "games-db",
    }
}
