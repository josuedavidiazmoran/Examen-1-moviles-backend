import { conn } from "../database.js";
// const controller = {};

export const list = async (req, res) => {
    conn.query("select * from editorial;", function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al listar ' + e);
        }
    });
};

// controller.search = async (req, res) => {
export const search = async (req, res) => {
    const ideditorial = parseInt(req.params.ideditorial);
    conn.query("select * from editorial where ideditorial = ?;", [ideditorial], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al buscar ' + e);
        }
    });
};

export const save = async (req, res) => {
    const { ideditorial, nombre } = req.body;
    conn.query("insert into editorial values(?,?);", [ideditorial, nombre], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al crear ' + e);
        }
    });
};

export const edit = async (req, res) => {
    const ideditorial = parseInt(req.params.ideditorial);
    const { nombre } = req.body;
    conn.query("update editorial set nombre = ? where ideditorial = ?;", [ideditorial, nombre], function (err, result) {
        try {
            return res.status(200).json({ message: 'Modificado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al editar ' + e);
        }
    });
};

// controller.delete = async (req, res) => {
export const deletee = async (req, res) => {
    const ideditorial = parseInt(req.params.ideditorial);
    conn.query("delete from editorial where ideditorial = ?;", [ideditorial], function (err, result) {
        try {
            return res.status(200).json({ message: 'Eliminado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al eliminar ' + e);
        }
    });
};

// module.exports = controller;