const name = require('../ctrl/name')

const fastify = require('fastify')({
  logger: process.env.NODE_ENV !== 'production',
})

fastify.route(name)

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
