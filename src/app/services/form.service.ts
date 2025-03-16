import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { getOrdersResponse } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private http = inject(HttpClient);

  apiUrl = `${environment.SERVERURL}/jderest/v2/formservice`;

  constructor() {}

  getOrders(data: any) {
    return this.http.post<getOrdersResponse>(
      this.apiUrl,
      JSON.stringify(data),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      }
    );
  }

}
