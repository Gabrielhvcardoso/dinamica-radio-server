import { Router } from 'express'
import api from '../api'

const routes = Router()

// cat

routes.post('/', api.category.index)
routes.put('/', api.category.create)
routes.delete('/:categoryId', api.category.destroy)

export default routes
