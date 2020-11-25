import { Router } from 'express'

const routes = Router()

// use

routes.get('/', (req, res) => {
  res.send({ hello: 'world' })
})

export default routes
