import mongoose, {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'

//Schema

const pacienteSchema = new Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    propietario:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    password:{
        type:String,
        require:true
    },
    celular:{
        type:String,
        require:true,
        trim:true
    },
    convencional:{
        type:String,
        require:true,
        trim:true
    },
    ingreso:{
        type:Date,
        require:true,
        trim:true,
        default:Date.now()
    },
    sintomas:{
        type:String,
        require:true,
        trim:true
    },
    salida:{
        type:Date,
        require:true,
        trim:true,
        default:Date.now()
    },
    estado:{
        type:Boolean,
        default:true
    },
    veterinario:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Veterinario'
    }
})


// Métodos

//Metodo para cifrar el password del paciente
pacienteSchema.methods.encrypPassword = async function(password){
    const salt = await bcrypt.genSalt(10)
    const passwordEncrypt = await bcrypt.hash(password, salt)
    return passwordEncrypt
}

//Metodo para verificar el password ingresado es el mismo de la bdd
pacienteSchema.methods.matchPassword = async function(password){
    const response = await bcrypt.compare(password, this.password)
    return response
}



//Creacion del modelo y su exportacion 

export default model('Paciente',pacienteSchema)