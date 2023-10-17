const getEstudantes = "SELECT * FROM estudantes";
const getEstudanteById = "SELECT * FROM estudantes WHERE id = $1";
const checkExisteEmail = "SELECT s FROM estudantes s WHERE email = $1";
const addEstudantes = "INSERT INTO estudantes (nome, email, dt_nascimento, idade) VALUES ($1, $2, $3, $4)";
const removeEstudante = "DELETE FROM estudantes WHERE id = $1";
const updateEstudante = "UPDATE estudantes SET nome = $1 WHERE id =$2";


module.exports = {
    getEstudantes,
    getEstudanteById,
    checkExisteEmail,
    addEstudantes,
    removeEstudante,
    updateEstudante,
};
