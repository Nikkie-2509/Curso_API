const express = require("express")
const { createPool } = require("mysql2")
const app = express()
const rotasProfessores = require("./routes/professores.routes")
const rotaCursos = require ("./routes/cursos.routes")
app.use(express.json())

// rotas do professor
app.use("/professores", rotasProfessores)
 
// rotas do curso
app.use("/cursos", rotaCursos)

app.listen(3000, () => console.log("API rodando..."))