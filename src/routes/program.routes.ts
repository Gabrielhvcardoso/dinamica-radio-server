import { Router } from 'express'
import multer from 'multer'
import api from '../api'
import multerConfig from '../config/multer'

const routes = Router()

// pro

routes.post('/', api.program.index)
routes.put('/', multer(multerConfig).single('file'), api.program.create)
routes.post('/:programId', multer(multerConfig).single('file'), api.program.update)
routes.delete('/:programId', api.program.destroy)

export default routes
