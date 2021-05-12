import { rest } from 'msw'

export const handlers = [
  rest.get('/', (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            name: 'test',
            origin: {
              name: 'world'
            }
          }
        ]
      })
    )
  }),
]