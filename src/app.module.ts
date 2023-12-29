import { Module } from '@nestjs/common';
import { BotModule } from './bot/bot.module';
import * as path from 'path';

@Module({
  imports: [
    BotModule,
  ],
})
export class AppModule {}
