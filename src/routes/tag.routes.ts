import { Router } from 'express'

const routes = Router()

// tag

routes.get('/', (req, res) => {
  res.send({ hello: 'world' })
})

export default routes