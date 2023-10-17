const pool = require('../../db');
const queries = require('./queries');

const getEstudantes = (req, res) => {
    pool.query(queries.getEstudantes, (error, results ) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getEstudanteById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getEstudanteById, [id], (error, results ) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addEstudantes = (req, res) => {
    const { nome, email, dt_nascimento, idade } = req.body;

    pool.query(queries.checkExisteEmail, [email], (error, results) => {
        if (results.rows.length){
            res.send("email já existente.");
        }

        pool.query(queries.addEstudantes, [ nome, email, dt_nascimento, idade ], (error, results) => {
            if (error) throw error;
            res.status(201).send("Estudante cadastrado com sucesso!");
            console.log("Estudante cadastrado")
        })
    })
}

const removeEstudante = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getEstudanteById, [id], (error, results ) => {
        const nenhumEstudanteEncontrado = !results.rows.length;
        if (nenhumEstudanteEncontrado){
            res.send("Estudante não existe no banco de dados.");
        }

        pool.query(queries.removeEstudante, [id], (error, results ) => {
            if (error) throw error;
            res.status(200).send("Estudante removido!");
        })
    })
}

const updateEstudante = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome } = req.body;

    pool.query(queries.getEstudanteById, [id], (error, results ) => {
        const nenhumEstudanteEncontrado = !results.rows.length;
        if (nenhumEstudanteEncontrado){
            res.send("Estudante não existe no banco de dados.");
        }

        pool.query(queries.updateEstudante, [nome, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Estudante atualizado!");
        });
    });
}

module.exports = {
    getEstudantes,
    getEstudanteById,
    addEstudantes,
    removeEstudante,
    updateEstudante,
};