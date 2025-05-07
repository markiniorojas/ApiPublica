import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService{
  private apiURL: 'https://www.swapi.tech/api/films';
  
  constructor(private http: HttpClient) { }

  filmData(): Observable<any>{
    return this.http.get(this.apiURL);
  }
}

