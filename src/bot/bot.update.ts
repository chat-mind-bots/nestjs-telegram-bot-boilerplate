import { Ctx, InjectBot, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { TelegrafExceptionFilter } from 'src/common/filters/telegraf-exeption.filter';
import { UseFilters } from '@nestjs/common';

@Update()
@UseFilters(TelegrafExceptionFilter)
class BotUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
  ) {}

  @Start()
  async start(@Ctx() ctx: Context) {
    await ctx.sendMessage("hello, world")
  }

}

export default BotUpdate;
