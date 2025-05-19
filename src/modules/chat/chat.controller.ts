import { Body, Controller, Post, Req, Res } from '@nestjs/common'
import { Response, Request } from 'express'
import { ApiOperation } from '@nestjs/swagger'

import { ChatService } from './chat.service'
import { RequestChatDto } from './dto/request-chat.dto'

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('/send')
  @ApiOperation({
    summary: 'Envía un mensaje y devuelve una respuesta en tiempo real',
  })
  send(
    @Res() res: Response,
    @Req() req: Request,
    @Body() body: RequestChatDto,
  ) {
    const { message, conversation_id } = body
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')
    const response = this.chatService.doStream({
      conversation_id,
      message,
    })

    const subscription = response.subscribe({
      next: (chunk) => {
        res.write(chunk)
      },
      complete: () => {
        res.end()
      },
      error: (e) => {
        res.write(`${JSON.stringify(e)}`)
        res.end()
      },
    })

    req.on('close', () => {
      subscription.unsubscribe()
    })
  }
}
