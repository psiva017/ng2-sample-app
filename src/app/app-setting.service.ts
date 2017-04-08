import { Injectable } from '@angular/core';

@Injectable()
export class AppSetting {

  public static API_ENDPOINT = 'http://localhost:8080';
   public static  NUMBER_ONLY_REGEX = /^\d+$/;

  constructor() { }

}
