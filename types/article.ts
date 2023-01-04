import { Author } from './author'
import { Category } from './category'
import { NewtImage } from './newtImage'

// Newtは型インポート機能がないため、自身で行う必要がある
export type Article = {
  _id: string
  author: Author
  body: string
  categories: Category[]
  coverImage: NewtImage
  slug: string
  title: string
  meta: any
}
