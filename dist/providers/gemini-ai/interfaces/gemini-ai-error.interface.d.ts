import { IGeminiRunData } from './gemini-ai-entity.interface';
export interface IGeminiRunError {
    error: {
        message: string;
        statusCode: number;
    };
    metadata: IGeminiRunData;
}
