import { NEWT_SPACE_UID, NEWT_CDN_API_TOKEN } from 'const/newt'
import { createClient } from 'newt-client-js'
import { NextApiRequest, NextApiResponse } from 'next'
import { Article } from 'types/article'

const client = createClient({
  spaceUid: NEWT_SPACE_UID,
  token: NEWT_CDN_API_TOKEN,
  apiType: 'cdn', // You can specify "cdn" or "api".
})

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Article[]>
) => {
  const contents = await client.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
  })
  const articles = contents.items
  return res.json(articles)
}

export default handler
