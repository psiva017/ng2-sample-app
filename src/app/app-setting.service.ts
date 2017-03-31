import { Injectable } from '@angular/core';

@Injectable()
export class AppSetting {

  public static API_ENDPOINT = 'http://localhost:8080';

  constructor() { }

}
