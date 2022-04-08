export interface logType {
  email: string
  password: string
  checkPass?: string
  avatarSrc?: string
}
export interface user {
  email: string
  password: string
}

export interface articleReqType {
  title: string
  body: string
  favorite: string
  articleType: string
  belong: string
}

export interface nodesReqType {
  belong: string
  offset: number
  limit: number
}

export interface articleType {
  articleType: string
  author: string
  belong: string
  body: string
  createAt: string
  favorite: string
  tagList: []
  title: string
  updatedAt: string
  __v: number
  _id: string
}

export interface articleRseType {
  articles: articleType[]
  articlesCount: number
}
