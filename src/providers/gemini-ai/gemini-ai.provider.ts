import { GoogleGenerativeAI } from '@google/generative-ai'

export const GeminiProvider = {
  provide: GoogleGenerativeAI,
  useFactory: () => {
    const apiKey = process.env.GEMINI_API_KEY
    return new GoogleGenerativeAI(apiKey)
  },
}
