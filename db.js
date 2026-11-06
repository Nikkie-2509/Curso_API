// conectar com o banco de dados
// db é só um nome para variavel, no caso, Data Base
const mysql = require("mysql2/promise")

export const db = mysql.createPool({ 
    host: "localhost",
    user: "root",
    password: "root",
    database: "escola"
})

module.exports = db 