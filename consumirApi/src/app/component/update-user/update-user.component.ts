import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { UserService } from '../../Service/user.service';
import { Router } from '@angular/router';
import { UserCreate, UserModel } from '../../modelos/usermodulo';

@Component({
  selector: 'app-update-user',
  imports: [FormularioComponent],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {


    @Input({ transform: numberAttribute })
    id!: number;
  
    private readonly servicio = inject(UserService);
    private readonly router = inject(Router);
  
  
    modelo?: UserCreate;
  
  
    ngOnInit(): void {
      // console.log(this.id)
      // if (this.modelo) {
      this.servicio.GetById(this.id).subscribe({
        next: (data) => {
          this.modelo = data;
  
        }
      })
    }
  
    GuardarCambios(entidad: UserCreate): void {
      if (this.modelo) {
        entidad.id = this.modelo.id;
  
      }
  
      this.servicio.Update(this.id,entidad).subscribe(() => {
        this.router.navigate(['/principal/user']);
      })
    }
}
