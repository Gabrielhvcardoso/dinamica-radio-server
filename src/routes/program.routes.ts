import { Router } from 'express'
import api from '../api'

const {
  index
} = api
const routes = Router()

// pro

routes.post('/', index)

export default routes
