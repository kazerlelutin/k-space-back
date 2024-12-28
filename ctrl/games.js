const { GiphyFetch } = require('@giphy/js-fetch-api')
const gf = new GiphyFetch(process.env.GIPHY_KEY)

module.exports = {
  method: 'GET',
  url: '/games',
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            title: { type: 'string' },
            short_text: { type: 'string' },
            cover_url: { type: 'string' },
            url: { type: 'string' },
            type: { type: 'string' },
          },
        },
      },
    },
  },
  preHandler: async (request, reply) => {
    // E.g. check authentication
  },
  handler: async () => {
    const res = await fetch(
      `https://itch.io/api/1/${process.env.ITCHIO_KEY}/my-games`
    )

    const { games } = await res.json()

    return games.filter(
      (game) => game.published && game.classification === 'game'
    )
  },
}
