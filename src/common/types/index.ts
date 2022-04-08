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
