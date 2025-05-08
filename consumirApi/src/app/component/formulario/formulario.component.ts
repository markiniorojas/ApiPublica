import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../Service/user.service';
import { UserCreate } from '../../modelos/usermodulo';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule,MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink,CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  private form = inject(FormBuilder)
  private servicio = inject(UserService)

  @Input() titulo!: string;
  @Input() modelo?: UserCreate;
  @Output() posteoFormulario = new EventEmitter<UserCreate>
  
  Form = this.form.group({
    name : [""],
    username : [""],
    email : [""]
  })

    ngOnInit(): void{
    if (this.modelo !== undefined){
        this.Form.patchValue(this.modelo);
      }
    }

    GuardarCambios(){
      let user = this.Form.value as UserCreate
      this.posteoFormulario.emit(user);
      console.log(user)
    }
  
}

 
