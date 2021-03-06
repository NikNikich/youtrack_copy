import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { IGoogleExcelOptions } from './interface/google-excel-options-factory';

@Injectable()
export class GoogleExcelClient
  extends GoogleSpreadsheet
  implements OnApplicationBootstrap {
  private readonly ApiKey: string;

  constructor(options: IGoogleExcelOptions) {
    super(options.sheetId);
    this.ApiKey = options.useApiKey;
  }

  async onApplicationBootstrap(): Promise<void> {
    await this.useApiKey(this.ApiKey);
  }
}
