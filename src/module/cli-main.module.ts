import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { CommandsModule } from './cli/commands.module';
import { ConfigModule } from './config/config.module';
import { YoutrackSdkModule } from './youtrack_sdk/youtrack-sdk.module';
import { YoutrackModule } from './youtrack/youtrack.module';
import { HubModule } from './hub-youtrack/hub.module';
import { HttpPbiModule } from './http-pbi/http-pbi.module';

@Module({
  imports: [
    ConfigModule.register(process.cwd() + '/.env'),
    CommandsModule,
    DatabaseModule,
    YoutrackSdkModule,
    YoutrackModule,
    HubModule,
    HttpPbiModule
  ],
})
export class CliMainModule {
}
