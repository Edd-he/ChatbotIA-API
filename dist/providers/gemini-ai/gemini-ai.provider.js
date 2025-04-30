"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiProvider = void 0;
const generative_ai_1 = require("@google/generative-ai");
exports.GeminiProvider = {
    provide: generative_ai_1.GoogleGenerativeAI,
    useFactory: () => {
        const apiKey = process.env.GEMINI_API_KEY;
        return new generative_ai_1.GoogleGenerativeAI(apiKey);
    },
};
//# sourceMappingURL=gemini-ai.provider.js.map