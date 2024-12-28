require('dotenv').config()
const games = require('./ctrl/games')
const gifs = require('./ctrl/gifs')
const name = require('./ctrl/name')
const fastify = require('fastify')({
  logger: process.env.NODE_ENV !== 'production',
})

const fastifyCors = require('@fastify/cors')
async function start() {
  // TEST
  fastify.route(name)
  fastify.route(gifs)
  fastify.route(games)

  await fastify.register(fastifyCors, {
    origin: process.env.CORS_ORIGIN,
  })

  if (typeof PhusionPassenger !== 'undefined') {
    fastify.listen({ path: 'passenger', host: '127.0.0.1' })
  } else {
    fastify.listen({ port: 3000 }, (err) => {
      if (err) {
        fastify.log.error(err)
        process.exit(1)
      }
    })
  }
}

start()
