import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { map, Observable } from 'rxjs';

export class GenericService<T, ICreate> {
  public _endpont: string;
  protected Http = inject(HttpClient);
  private URLBase = environment.apiURL;

  constructor(enpoint: string) {
    this._endpont = `${this.URLBase}/${enpoint}`;
  }

  // Para obtener todos los recursos (ej. /films, /people)
  public GetAll(): Observable<T[]> {
    return this.Http.get<T[]>(this._endpont)

  }

  // Para obtener un recurso por ID (ej. /films/1)
  public GetById(id: number): Observable<T> {
    return this.Http.get<T>(`${this._endpont}/${id}`);
  }

  public Create(entity: ICreate): Observable< ICreate> {
    return this.Http.post< ICreate>(this._endpont, entity);
  }

  public Update(id:number,entity: ICreate): Observable<any> {
    // const id = (entity as any).id;
    return this.Http.put<any>(`${this._endpont}/${id}`, entity);
  }

  public Delete(id: number): Observable<any> {
    return this.Http.delete<any>(`${this._endpont}/${id}`);
  }
}
