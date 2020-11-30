import { Router } from 'express'
import api from '../api'

const routes = Router()

// sch

routes.get('/', api.scheduleProgram.index)
routes.post('/', api.scheduleProgram.updateWeekday)

export default routes
