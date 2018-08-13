import express from 'express'
import bodyParser from 'body-parser'

import users from './../routes/users'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.get('/api/v1/users', users.all)
app.post('/api/v1/users', users.create)
app.delete('/api/v1/users/:id', users.remove)
app.put('/api/v1/users/:id', users.update)

export default app