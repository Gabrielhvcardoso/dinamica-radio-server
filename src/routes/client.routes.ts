import { Router } from 'express'
import api from '../api'

const routes = Router()

// cli

routes.post('/auth', api.client.login)

export default routes
