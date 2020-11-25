import { Router } from 'express'

const routes = Router()

// ban

routes.get('/', (req, res) => {
  res.send({ hello: 'world' })
})

export default routes
