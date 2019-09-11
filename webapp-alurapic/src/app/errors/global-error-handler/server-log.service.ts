import { ServerLog } from './server-log';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.serverLog;
@Injectable({ providedIn: 'root' })
export class ServerLogService {
  constructor(private http: HttpClient) {}

  log(serverLog: ServerLog) {
    return this.http.post(API + '/infra/log', serverLog);
  }
}
