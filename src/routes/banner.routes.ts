import { Router } from 'express'
import multer from 'multer'
import api from '../api'
import multerConfig from '../config/multer'

const routes = Router()

// ban

routes.get('/rm/:bannerId', api.banner.removeimage)
routes.post('/', api.banner.index)
routes.put('/', multer(multerConfig).single('file'), api.banner.create)
routes.post('/:bannerId', multer(multerConfig).single('file'), api.banner.update)
routes.delete('/:bannerId', api.banner.destroy)

export default routes
