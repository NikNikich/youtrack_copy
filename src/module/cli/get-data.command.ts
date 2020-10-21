import { Injectable } from '@nestjs/common';
import { Command, CommandService } from 'nestjs-command';
import { HubService } from '../hub-youtrack/hub.service';
import { ObserverScheduleService } from '../observer/observer-schedule.service';
import { YoutrackService } from '../youtrack/youtrack.service';

@Injectable()
export class GetDataCommands {
  constructor(
    private readonly observerService: ObserverScheduleService,
    private readonly hubService: HubService,
    private readonly youtrackService: YoutrackService,
    private readonly commandService: CommandService,
  ) {
  }

  @Command({
    command: 'get:data',
    autoExit: false,
  })
  async getData() {
    console.log('start filling the table with data');
    await this.youtrackService.addNewUsers();
    await this.youtrackService.addNewProjects();
    await this.youtrackService.addNewIssues();
    await this.hubService.addNewProjectTeams();
    this.commandService.exit(0);
  }
}
