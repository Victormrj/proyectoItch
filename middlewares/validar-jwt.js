const { response } = require('express')
const jwt = require('jsonwebtoken');

const validarJWT = ( req, res = response, next ) => {

    // x-token headers
    const token = req.header('x-token');

    if( !token ){
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        })
    }

    try {

        const { id, nombre,apellidoP, apellidoM, numControl, sexo, rol } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        req.id = id;
        req.nombre = nombre;
        req.apellidoP = apellidoP;
        req.apellidoM = apellidoM;
        req.numControl = numControl;
        req.sexo = sexo;
        req.rol = rol;


        // console.log(payload);
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        })
        
    }

    // console.log(token);

    next()

}

module.exports = {
    validarJWT
}




