import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { ChatService } from './chat.service';
import { RequestChatDto } from './dto/request-chat.dto';
import { Response, Request } from 'express';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('/send-query')
  sendQueryGemini(
    @Res() res: Response,
    @Req() req: Request,
    @Body() body: RequestChatDto,
  ) {
    const { query, conversation_id } = body;
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    const response = this.chatService.doStreamGemini({
      conversation_id,
      query,
    });

    const subscription = response.subscribe({
      next: (chunk) => {
        res.write(chunk);
      },
      complete: () => {
        res.end();
      },
      error: (e) => {
        const errorPayload = JSON.stringify({
          error: true,
          message: e || 'Error desconocido',
        });

        res.write(`${errorPayload}`);
        res.end();
      },
    });

    req.on('close', () => {
      subscription.unsubscribe();
    });
  }
}
