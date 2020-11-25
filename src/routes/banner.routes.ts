import { Router } from 'express'
import api from '../api'

const routes = Router()

// ban

routes.post('/', api.banner.index)

export default routes
