import { conn } from "../database.js";
// const controller = {};

export const list = async (req, res) => {
    conn.query("select * from libro;", function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al listar ' + e);
        }
    });
};

// controller.search = async (req, res) => {
export const search = async (req, res) => {
    const idlibro = parseInt(req.params.idlibro);
    conn.query("select * from libro where idlibro = ?;", [idlibro], function (err, result) {
        try {
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json('Error al buscar ' + e);
        }
    });
};

export const save = async (req, res) => {
    const { idlibro, titulo,autor, paginas, edicion, ideditorial } = req.body;
    conn.query("insert into libro values(?,?,?,?,?,?);",
        [idlibro, titulo, autor, paginas, edicion, ideditorial], function (err, result) {
            try {
                return res.status(200).json(result);
            } catch (error) {
                return res.status(500).json('Error al crear ' + e);
            }
        });
};

export const edit = async (req, res) => {
    const idlibro = parseInt(req.params.idlibro);
    const { titulo, autor, paginas, edicion, ideditorial } = req.body;
    conn.query("update libro set titulo = ?, autor = ?, paginas = ?, edicion = ?, ideditorial = ? where idlibro = ?;",
        [idlibro, titulo, autor, paginas, edicion, ideditorial], function (err, result) {
            try {
                return res.status(200).json({ message: 'Modificado correctamente' });
            } catch (error) {
                return res.status(500).json('Error al editar ' + e);
            }
        });
};

// controller.delete = async (req, res) => {
export const deletee = async (req, res) => {
    const idlibro = parseInt(req.params.idlibro);
    conn.query("delete from libro where idlibro = ?;", [idlibro], function (err, result) {
        try {
            return res.status(200).json({ message: 'Eliminado correctamente' });
        } catch (error) {
            return res.status(500).json('Error al eliminar ' + e);
        }
    });
};

// module.exports = controller;