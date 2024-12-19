// Requirir los módulos

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routerVeterinarios from './routers/Veterinario_routers.js'
import routerPacientes from './routers/paciente_routers.js'

//inicializaciones
const app = express()
dotenv.config()

//Configuraciones
app.set('port', process.env.PORT || 3000)
app.use(cors())  //cors: pone un prefijo y permite comunicarse con varios dominios


//Middlewares
app.use(express.json())

//Variables globales


// Rutas
app.get('/', (req,res)=> {
    res.send("Server on")
})

// Rutas para veterinario
app.use('/api/', routerVeterinarios)

// Rutas para pacientes
app.use('/api', routerPacientes)



//Rutas no encontradas
app.use((req, res)=>res.status(404).send("Endpoint no encontrado - 404"))



// Exportar la instancia 
export default app