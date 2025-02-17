import jwt from 'jsonwebtoken'
import Veterinario from '../models/Veterinario.js'

const generarJWT = (id, rol) =>{
    
    
    return jwt.sign({id,rol}, process.env.JWT_SECRET, {expiresIn:'1d'})
}


// Metodo para verificar el TOKEN

const verificarAutenticacion = async (req,res,next)=>{

    //Verifica que exista el token
    //Bearer

    if(!req.headers.authorization) return res.status(404).json({msg:"Lo sentimos, debes proprocionar un token"})    

        //Bearer
        const {authorization} = req.headers

        try {

            //[Bearer ]
            //

            const {id,rol} = jwt.verify(authorization.split(' ')[1],process.env.JWT_SECRET)
            if (rol==="veterinario"){
                req.veterinarioBDD = await Veterinario.findById(id).lean().select("-password")
                next()
            }
        } catch (error) {
            const e = new Error("Formato del token no válido")
            return res.status(404).json({msg:e.message})
        }
    }





export { 
    generarJWT,
    verificarAutenticacion
}