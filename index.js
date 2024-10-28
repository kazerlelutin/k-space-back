const name = require('./ctrl/name')

const fastify = require('fastify')({
  logger: process.env.NODE_ENV !== 'production',
})

// TEST
fastify.route(name)

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
