import { Router } from 'express'

const routes = Router()

// cli

routes.get('/', (req, res) => {
  res.send({ hello: 'world' })
})

export default routes
