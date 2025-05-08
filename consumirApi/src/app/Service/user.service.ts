import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable, map } from 'rxjs';
import { UserCreate, UserModel } from '../modelos/usermodulo';
import { GenericService } from './generic/generic.service';

@Injectable({ 
  providedIn: 'root' })

export class UserService extends GenericService<UserModel, UserCreate> {

  constructor(){
    super('users');
  }
}
