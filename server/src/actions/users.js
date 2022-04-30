const { base64encode } = require('npm-rc4');
const pool = require('../../src/database/config');

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getUserById = (req, res) => { 
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const createUser = (req, res) => { 
    const {email, password, nome, cpf, data} = req.body


    pool.query('INSERT INTO users (email, password, tipo, nome, cpf, data_nascimento) VALUES ($1, $2, $3, $4, $5, $6)', [ email, password, 'user', nome, cpf, data ], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send(`User added`)
    })
}

const updateUser = (req, res) => { 
    const id = parseInt(req.params.id)
    const { email, senha, tipo, nome, cpf, data_nascimento } = req.body

    pool.query('UPDATE users SET email = $1, senha = $2, tipo = $3, nome = $4, cpf = $5, data_nascimento = $6 WHERE id = $7', [ email, senha, tipo, nome, cpf, data_nascimento, id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`User modified with ID: ${id}`)
    })
}

const deleteUser = (req, res) => { 
    const id = parseInt(req.params.id)
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}