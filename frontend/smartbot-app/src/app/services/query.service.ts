import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const serverUrl = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  constructor(private http: HttpClient) {}

  sendQuery(payload: any): Observable<any> {

    return this.http.post<any>(`${serverUrl}/api/query`, payload);
  }
}
