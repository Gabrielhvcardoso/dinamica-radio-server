import express from 'express'
import banner from './routes/banner.routes'
import category from './routes/category.routes'
import client from './routes/client.routes'
import program from './routes/program.routes'
import scheduleProgram from './routes/scheduleProgram.routes'
import tag from './routes/tag.routes'
import user from './routes/user.routes'

const app = express()

app.use('/ban', banner)
app.use('/cat', category)
app.use('/cli', client)
app.use('/pro', program)
app.use('/sch', scheduleProgram)
app.use('/tag', tag)
app.use('/use', user)

export default app
