import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserObject } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  private http = inject(HttpClient);

  apiUrl = `${environment.SERVERURL}/jderest/v2/tokenrequest`;

  retrieveToken(data: any): Observable<UserObject> {
    return this.http.post<UserObject>(this.apiUrl, JSON.stringify(data), {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }
}
