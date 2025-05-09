import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { PostService } from '../../../Service/post.service';
import { PostCreate } from '../../../modelos/postmodulo';

@Component({
  selector: 'app-formulario-post',
  imports: [ReactiveFormsModule,MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink,CommonModule],
  templateUrl: './formulario-post.component.html',
  styleUrl: './formulario-post.component.css'
})
export class FormularioPostComponent implements OnInit{
  private formPost = inject(FormBuilder)
  private servicio = inject(PostService)

  @Input() titulo!: string;
  @Input() modelo?: PostService;
  @Output() posteoFormulario = new EventEmitter<PostCreate>

  FormPost = this.formPost.group({
    userId : [1],
    title : [""],
    boby : [""]
  })

    ngOnInit(): void{
      if (this.modelo !== undefined){
        this.FormPost.patchValue(this.modelo); 
      }
    }

    GuardarCambios(){
      let post = this.FormPost.value as PostCreate
      this.posteoFormulario.emit(post);
      console.log(post)
    }


}
