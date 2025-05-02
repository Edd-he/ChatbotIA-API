import { ChatService } from './chat.service';
import { RequestChatDto } from './dto/request-chat.dto';
import { Response, Request } from 'express';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    send(res: Response, req: Request, body: RequestChatDto): void;
}
