import { Router } from 'express'
import api from '../api'
const routes = Router()

// tag

routes.put('/', api.tag.create)
routes.delete('/:tagId', api.tag.destroy)

export default routes
