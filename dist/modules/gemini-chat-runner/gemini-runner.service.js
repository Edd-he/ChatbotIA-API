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
exports.GeminiChatRunnerService = void 0;
const common_1 = require("@nestjs/common");
const gemini_ai_service_1 = require("../../providers/gemini-ai/gemini-ai.service");
const rxjs_1 = require("rxjs");
const event_emitter_1 = require("@nestjs/event-emitter");
const gemini_ai_run_entity_1 = require("../../providers/gemini-ai/entities/gemini-ai-run.entity");
const run_events_interfaces_1 = require("../events/run-events/run-events.interfaces");
const gemini_ai_models_enum_1 = require("../../providers/gemini-ai/interfaces/gemini-ai-models.enum");
const instructions_const_1 = require("./constants/instructions.const");
let GeminiChatRunnerService = class GeminiChatRunnerService {
    constructor(gemini, eventEmitter) {
        this.gemini = gemini;
        this.eventEmitter = eventEmitter;
    }
    streamResponse(conversation_id, query) {
        return new rxjs_1.Observable((subscriber) => {
            const dataStream = this.gemini.streamQuery(query, gemini_ai_models_enum_1.GeminiModel.GEMINI_2_0_FLASH, instructions_const_1.ASSISTANT_INSTRUCTION);
            let previousChunk = null;
            let lastChunk = null;
            dataStream.subscribe({
                next: (data) => {
                    if (previousChunk !== null) {
                        subscriber.next(previousChunk);
                    }
                    previousChunk = data;
                    lastChunk = data;
                },
                error: async (e) => {
                    const { metadata, error } = JSON.parse(e);
                    this.emitOnRunExecutedvent(metadata, conversation_id);
                    subscriber.error(error.message);
                    subscriber.complete();
                },
                complete: async () => {
                    const metadata = JSON.parse(lastChunk);
                    this.emitOnRunExecutedvent(metadata, conversation_id);
                    subscriber.complete();
                },
            });
        });
    }
    emitOnRunExecutedvent(GeminiRunMetaDataRaw, conversation_id) {
        const metadata = Object.assign(new gemini_ai_run_entity_1.GeminiRunData(), GeminiRunMetaDataRaw);
        const dto = metadata.toCreateDto(conversation_id);
        const runExecutedEvent = {
            ...dto,
        };
        this.eventEmitter.emit(run_events_interfaces_1.RunEvents.ON_RUN_EXECUTED_EVENT, runExecutedEvent);
    }
};
exports.GeminiChatRunnerService = GeminiChatRunnerService;
exports.GeminiChatRunnerService = GeminiChatRunnerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [gemini_ai_service_1.GeminiAIService,
        event_emitter_1.EventEmitter2])
], GeminiChatRunnerService);
//# sourceMappingURL=gemini-runner.service.js.map