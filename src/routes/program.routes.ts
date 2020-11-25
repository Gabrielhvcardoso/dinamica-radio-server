import { Router } from 'express'

const routes = Router()

// pro

routes.get('/', (req, res) => {
  res.send({ hello: 'world' })
})

export default routes
