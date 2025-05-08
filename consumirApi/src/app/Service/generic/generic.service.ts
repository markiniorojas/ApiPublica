import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { map, Observable } from 'rxjs';

export class GenericService<T, ICreate> {
  public _enpont: string;
  protected Http = inject(HttpClient);
  private URLBase = environment.apiURL;

  constructor(enpoint: string) {
    this._enpont = `${this.URLBase}/${enpoint}`;
  }

  // Para obtener todos los recursos (ej. /films, /people)
  public GetAll(): Observable<T[]> {
    return this.Http.get<{ message: string; results: T[] }>(this._enpont).pipe(
      map(res => res.results)
    );
  }

  // Para obtener un recurso por ID (ej. /films/1)
  public GetById(id: number | string): Observable<T> {
    return this.Http.get<{ message: string; result: T }>(`${this._enpont}/${id}`).pipe(
      map(res => res.result)
    );
  }

  // SWAPI no permite crear, actualizar ni eliminar, pero los dejamos vacíos si estás practicando arquitectura completa:
  public Create(entity: ICreate): Observable<any> {
    throw new Error('Not supported by SWAPI');
  }

  public Update(entity: ICreate): Observable<any> {
    throw new Error('Not supported by SWAPI');
  }

  public Deleted(id: number | string): Observable<any> {
    throw new Error('Not supported by SWAPI');
  }
}
