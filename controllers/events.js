const {response} = require('express');


const getUser = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'getUser'
    })
}

const crearUser = (req, res = response) => {

    //Verificar que tenga el usuario
    console.log( req.body );

    res.json({
        ok: true,
        msg: 'crearUser'
    }
    )
}

const actualizarUser = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'actualizarUser'
    }
    )
}

const borrarUser = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'borrarUser'
    })
}
// const obtenerUsuario = async (req, res = response) => {
//     const { id } = req.params;
//     const { body } = req;
//     const usuario = await Usuario.findByPk(id);

//     await usuario.find(body);

//     // const usuarios = await Usuario.findAll();
//     res.json({ ok: true, usuario });
// }


module.exports = {
    getUser,
    crearUser,
    actualizarUser,
    borrarUser,
    // obtenerUsuario
}





