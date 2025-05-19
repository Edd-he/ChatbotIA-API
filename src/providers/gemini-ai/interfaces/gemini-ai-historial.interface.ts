export interface IGeminiMessagePart {
  text: string
}

export interface IGeminiMessageChat {
  role: 'user' | 'model'
  parts: IGeminiMessagePart[]
}
