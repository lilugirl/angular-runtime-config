import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  private appConfig: any;
  constructor(private _http: HttpClient) { }

  loadConfig() {
    return this._http.get('https://api.myjson.com/bins/zqp0r')
      .toPromise()
      .then(res => {
        this.appConfig = res;
        console.log(res);
      });
  }

  getConfig() {
    return this.appConfig;
  }
}
