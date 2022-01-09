import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private HttpClient: HttpClient) {}

  getCountries(): Observable<any> {
    return this.HttpClient.get<any>('http://localhost:7000/countries');
  }
}
