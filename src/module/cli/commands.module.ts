import { CommandModule, CommandService } from 'nestjs-command';
import { YoutrackModule } from '../youtrack/youtrack.module';
import { HubModule } from '../hub/hub.module';
import { Module } from '@nestjs/common';
import { GetDataCommands } from './get-data.command';
import { ObserverModule } from '../observer/observer.module';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { HttpYoutrackModule } from '../http-youtrack/http-youtrack.module';

@Module({
  imports: [
    ConfigModule,
    YoutrackModule,
    CommandModule,
    HubModule,
    ObserverModule,
    HttpYoutrackModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.config.HUB_BASE_URL,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [GetDataCommands],
})
export class CommandsModule {
}
