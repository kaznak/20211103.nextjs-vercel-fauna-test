// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiHandler } from 'next'

interface NameApiResponse {
  name: string
}

const handler: NextApiHandler<NameApiResponse> = (_, res) => {
  res.status(200).json({ name: 'John Doe' })
}

export default handler
