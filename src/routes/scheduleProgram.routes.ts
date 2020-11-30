import { Router } from 'express'
import api from '../api'

const routes = Router()

// sch

routes.post('/', api.scheduleProgram.updateWeekday)

export default routes
