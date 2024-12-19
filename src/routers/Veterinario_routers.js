import {Router} from 'express'
import { comprobarTokenPassword, confirmEmail, login, nuevoPassword, perfilUsuario, recuperarPassword, registro } from '../controllers/Veterinario_controller.js'
import { verificarAutenticacion } from '../helpers/crearJWT.js'

const router = Router()

// Rutas públicas

router.post('/registro',registro)
router.get('/confirmar/:token', confirmEmail)
router.post('/login',login)
router.post('/recuperar-password',recuperarPassword)
router.get('/recuperar-password/:token', comprobarTokenPassword)
router.post('/nuevo-password/:token',nuevoPassword)


//Rutas privadas

router.get('/perfilvet',verificarAutenticacion, perfilUsuario)
router.put('/actualizarPerfilVet/:token',verificarAutenticacion, perfilUsuario)
router.get('/actualizarPasswordVet/:token',verificarAutenticacion, perfilUsuario)



export default router