import { Nuxt, Builder } from 'nuxt'
import nuxtConfig from './../nuxt.config'
import app from './server'
import database from './database'

const nuxt = new Nuxt(nuxtConfig)
const builder = new Builder(nuxt)

builder.build().then(result => {
  app.use(nuxt.render)
  app.listen(3000, 'localhost', function() {
    console.log('Server iniciado.')
    database.start().then(() => {
      console.log('MongoDB conectado.')
    })
  })
})