import { Router } from 'express'
import api from '../api'

const routes = Router()

// pro

routes.post('/', api.program.index)

export default routes
