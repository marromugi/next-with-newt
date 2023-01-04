import { useCallback, useEffect, useState } from 'react'
import { Article } from 'types/article'

export const useArticle = (): Article[] => {
  const [articles, setArticles] = useState<Article[]>([])
  const getArticles = useCallback(async () => {
    const res = await fetch('/api/articles')
    const resBody = (await res.json()) as Article[]
    return resBody
  }, [])

  useEffect(() => {
    getArticles().then((b) => setArticles(b))
  }, [getArticles])

  return articles
}
