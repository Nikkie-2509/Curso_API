const express = require("express")
const router = express.Router()
const db = require("../db")


const router = require("./professores.routes")

router.get("/", async (req, res) =>{
    const [cursos] = db.execute ("SELECT * FROM curso")
    res.json(cursos)
})

router.post("/", async (req, res) =>{
    const {nome, descricao, professorId} = req.body

    if(!nome || !descricao || !professorId){
        return res(400).json({error: "Nome, descrição e o id do professor são obrigatórios!"})
    }
    
    const [resultado] = await db.execute(
        "INSERT INTO curso (nome, descricao, professor_id) VALUES (?, ?, ?)", 
        [nome, descricao, professorId]
    )
    return res.status(201).json({id: resultado.insertId, nome, descricao, professorId})
})

router.delete("/:id", async (req, res) =>{
    const id = req.params.id //pegar id pela url
    const [resultado] = await db.execute(
        "DELETE FROM curso WHERE id = ?", 
        [id]
    )

    if(resultado.affectedRows === 0){
        return res.status(404).json({error: "Curso não encontrado"})
    }
    return res.status(204).end()
})

module.exports = router