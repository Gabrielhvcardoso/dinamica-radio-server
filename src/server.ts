import express from 'express'
import functions from './functions'

const app = express()

app.get('/', async (req, res) => res.send(await functions.client.index()))

app.listen(3333)
