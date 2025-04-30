import { GoogleGenerativeAI } from '@google/generative-ai';
import { Observable } from 'rxjs';
import { GeminiModel } from './interfaces/gemini-ai-models.enum';
export declare class GeminiAIService {
    private readonly genAI;
    constructor(genAI: GoogleGenerativeAI);
    streamQuery(query: string, geminiModel: GeminiModel, contextInstructions: string): Observable<any>;
}
