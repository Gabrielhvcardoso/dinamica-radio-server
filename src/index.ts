import app from './server'
require('dotenv').config()

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Listening https://localhost:${port}`)
})
