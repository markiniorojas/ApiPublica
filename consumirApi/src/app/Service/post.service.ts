import { Injectable } from '@angular/core';
import { GenericService } from './generic/generic.service';
import { PostCreate, PostModel } from '../modelos/postmodulo';

@Injectable({
  providedIn: 'root'
})
export class PostService extends GenericService<PostModel, PostCreate> {

  constructor() { 
    super('posts')
  }
}
