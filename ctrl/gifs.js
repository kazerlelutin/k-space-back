const { GiphyFetch } = require('@giphy/js-fetch-api')
const gf = new GiphyFetch(process.env.GIPHY_KEY)

module.exports = {
  method: 'GET',
  url: '/gifs',
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            title: { type: 'string' },
            url: { type: 'string' },
            embed_url: { type: 'string' },
            images: {
              type: 'object',
              properties: {
                downsized_small: {
                  type: 'object',
                  properties: {
                    width: { type: 'string' },
                    height: { type: 'string' },
                    mp4: { type: 'string' },
                  },
                },
                fixed_height_still: {
                  type: 'object',
                  properties: {
                    width: { type: 'string' },
                    height: { type: 'string' },
                    url: { type: 'string' },
                  },
                },
                fixed_height_small: {
                  type: 'object',

                  properties: {
                    width: { type: 'string' },
                    height: { type: 'string' },
                    url: { type: 'string' },
                  },
                },
                preview_webp: {
                  type: 'object',
                  properties: {
                    width: { type: 'string' },
                    height: { type: 'string' },
                    url: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  preHandler: async (request, reply) => {
    // E.g. check authentication
  },
  handler: async () => {
    const { data: gifs } = await gf.search('', {
      channel: 'kazerlelutin',
      limit: 16,
      sort: 'revalent',
    })
    return gifs
  },
}
