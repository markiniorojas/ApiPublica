import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable, map } from 'rxjs';
import { FilmDetail } from '../modelos/filmmodulo';

@Injectable({ providedIn: 'root' })
export class FilmsService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiURL}films`;

  // Traer todos los films con los campos deseados
  public GetAll(): Observable<FilmDetail[]> {
    return this.http.get<{ message: string; result: any[] }>(this.baseUrl).pipe(
      map(res => {
        console.log('Respuesta de GetAll:', res);
        return res.result.map(film => ({
          uid: film.uid,
          title: film.properties.title,
          episode_id: film.properties.episode_id,
          director: film.properties.director,
          producer: film.properties.producer,
          release_date: film.properties.release_date
        }));
      })
    );
  }

  // Traer un film por ID
  public GetById(id: string): Observable<FilmDetail> {
    return this.http.get<{ message: string; result: { uid: string; properties: any } }>(`${this.baseUrl}/${id}`).pipe(
      map(res => {
        const p = res.result.properties;
        return {
          uid: res.result.uid,
          title: p.title,
          episode_id: p.episode_id,
          director: p.director,
          producer: p.producer,
          release_date: p.release_date
        };
      })
    );
  }
}
