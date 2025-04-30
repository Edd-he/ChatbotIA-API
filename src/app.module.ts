import { Module } from '@nestjs/common';

import { ChatModule } from './modules/chat/chat.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './providers/prisma/prisma.module';
import { LoggerModule } from './modules/logger/logger.module';
import { CloudinaryModule } from './providers/cloudinary/cloudinary.module';
import { GeminiAIModule } from './providers/gemini-ai/gemini-ai.module';
import { TopicsModule } from './modules/topics/topics.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { GeminiChatRunnerModule } from './modules/gemini-chat-runner/gemini-runner.module';
import { ConversationsModule } from './modules/conversations/conversations.module';
import { ReniecModule } from '@providers/reniec/reniec.module';
import { DocumentsModule } from './modules/documents/documents.module';
import { RunsModule } from './modules/runs/runs.module';
import { EventsModule } from '@modules/events/events.module';

@Module({
  imports: [
    ChatModule,
    PrismaModule,
    LoggerModule,
    CloudinaryModule,
    GeminiAIModule,
    ReniecModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    EventEmitterModule.forRoot({
      wildcard: true,
    }),
    TopicsModule,
    GeminiChatRunnerModule,
    ConversationsModule,
    DocumentsModule,
    RunsModule,
    EventsModule,
  ],
})
export class AppModule {}
