import { NestFactory } from '@nestjs/core';
import { CommandModule, CommandService } from 'nestjs-command';
import { AppModule } from './module/app.module';

/**
 * Запускает модуль консольного интерфейса
 */

(async () => {
  console.log(process.env.NODE_ENV);
  const app = await NestFactory.createApplicationContext(AppModule, {});
  app.select(CommandModule).get(CommandService).exec();
})();
