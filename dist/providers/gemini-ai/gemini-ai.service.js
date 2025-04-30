"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiAIService = void 0;
const common_1 = require("@nestjs/common");
const generative_ai_1 = require("@google/generative-ai");
const rxjs_1 = require("rxjs");
const gemini_ai_run_entity_1 = require("./entities/gemini-ai-run.entity");
let GeminiAIService = class GeminiAIService {
    constructor(genAI) {
        this.genAI = genAI;
    }
    streamQuery(query, geminiModel, contextInstructions) {
        const model = this.genAI.getGenerativeModel({
            model: geminiModel,
            systemInstruction: contextInstructions,
            generationConfig: {
                temperature: 1,
            },
        });
        return new rxjs_1.Observable((observer) => {
            let errorDetails = null;
            const run = new gemini_ai_run_entity_1.GeminiRunData();
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
                    run.setTokens((await result.response).usageMetadata.totalTokenCount);
                    observer.next(JSON.stringify(run.finish()));
                    observer.complete();
                }
                catch (e) {
                    errorDetails = `Error en el flujo del stream: ${e.message}`;
                    run.setError(errorDetails);
                    observer.error(JSON.stringify({
                        error: {
                            message: errorDetails,
                            statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                        },
                        metadata: run.finish(),
                    }));
                    observer.complete();
                }
            })
                .catch((e) => {
                errorDetails = `Error en la llamada al modelo de Google: ${e.statusText}`;
                run.setError(errorDetails);
                observer.error(JSON.stringify({
                    error: {
                        message: errorDetails,
                        statusCode: common_1.HttpStatus.SERVICE_UNAVAILABLE,
                    },
                    metadata: run.finish(),
                }));
                observer.complete();
            });
        });
    }
};
exports.GeminiAIService = GeminiAIService;
exports.GeminiAIService = GeminiAIService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [generative_ai_1.GoogleGenerativeAI])
], GeminiAIService);
//# sourceMappingURL=gemini-ai.service.js.map