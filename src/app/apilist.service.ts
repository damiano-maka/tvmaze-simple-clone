import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tipo_dati } from './interfaceM';
import { singoloMovie } from './int_movie';



@Injectable({
  providedIn: 'root'
})
export class ApiListService {
  constructor(private http: HttpClient) { }
  private baseUrl: string = 'https://api.tvmaze.com/shows';

  public getAll(): Observable<Array<tipo_dati>> {
    return this.http.get<Array<tipo_dati>>(this.baseUrl);
  }

  public getByID(id : number): Observable<singoloMovie> {
    return this.http.get<singoloMovie>(`${this.baseUrl}/${id}`);
  }

}
