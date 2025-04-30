import { HttpStatus, Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Observable } from 'rxjs';
import { GeminiRunData } from './entities/gemini-ai-run.entity';
import { GeminiModel } from './interfaces/gemini-ai-models.enum';
import { IGeminiRunError } from './interfaces/gemini-ai-error.interface';
@Injectable()
export class GeminiAIService {
  constructor(private readonly genAI: GoogleGenerativeAI) {}

  streamQuery(
    query: string,
    geminiModel: GeminiModel,
    contextInstructions: string,
  ): Observable<any> {
    const model = this.genAI.getGenerativeModel({
      model: geminiModel,
      systemInstruction: contextInstructions,
      generationConfig: {
        temperature: 1,
      },
    });

    return new Observable((observer) => {
      let errorDetails = null;
      const run = new GeminiRunData();
      run.setInput(query);
      run.setModel(model.model);
      model
        .generateContentStream([query])
        .then(async (result) => {
          try {
            for await (const chunk of result.stream) {
              const text = chunk.text();
              run.addChunk(text);
              observer.next(text);
            }
            run.setTokens(
              (await result.response).usageMetadata.totalTokenCount,
            );
            observer.next(JSON.stringify(run.finish()));
            observer.complete();
          } catch (e) {
            errorDetails = `Error en el flujo del stream: ${e.message}`;
            run.setError(errorDetails);
            observer.error(
              JSON.stringify({
                error: {
                  message: errorDetails,
                  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                },
                metadata: run.finish(),
              } as IGeminiRunError),
            );
            observer.complete();
          }
        })
        .catch((e) => {
          errorDetails = `Error en la llamada al modelo de Google: ${e.statusText}`;
          run.setError(errorDetails);
          observer.error(
            JSON.stringify({
              error: {
                message: errorDetails,
                statusCode: HttpStatus.SERVICE_UNAVAILABLE,
              },
              metadata: run.finish(),
            } as IGeminiRunError),
          );
          observer.complete();
        });
    });
  }
}
