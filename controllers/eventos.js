const { response } = require('express')
const { Eventos } = require('../models/Eventos')
const { Usuario } = require('../models/association');


const getEventos = async (req, res = response) => {

    try {

        const eventos = await Eventos.findAll({
            include: {
                model: Usuario,
                attributes: ['nombre', 'apellidoP', 'apellidoM', 'numControl', 'rol']
            }
        })

        res.json({
            ok: true,
            eventos
        });

    } catch (error) {
        console.log(error)

    }
}

const crearEvento = async (req, res = response) => {

    // console.log(req.body)
    const evento = new Eventos(req.body);
    try {

        await evento.save()

        res.json({
            ok: true,
            evento
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'hable con el administrador'
        })
    }
}
const actualizarEvento = async (req, res = response) => {
    const eventoId = req.params.id;
    const uid = req.id;

    try {

        const evento = await Eventos.findByPk(eventoId);

        if (!evento) {
            res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese ID'
            })
        }

        if (evento.id_userEvento !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'no tiene provilegios de editar este evento'
            })
        }

        const nuevoEvento = {
            ...req.body,
            id_userEvento: uid
        }

        await evento.update(nuevoEvento)

        res.json({
            ok: true,
            evento: nuevoEvento
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}
const eliminarEvento = async (req, res = response) => {
    const eventoId = req.params.id;
    const uid = req.id;

    try {

        const evento = await Eventos.findByPk(eventoId);

        if (!evento) {
            res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese ID'
            })
        }

        if (evento.id_userEvento !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'no tiene provilegios de eliminar este evento'
            })
        }
        await evento.destroy()
        res.json({
            ok: true,
            evento
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}