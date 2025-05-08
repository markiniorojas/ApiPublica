import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { UserCreate } from '../../modelos/usermodulo';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-crear-user',
  imports: [FormularioComponent],
  templateUrl: './crear-user.component.html',
  styleUrl: './crear-user.component.css'
})
export class CrearUserComponent {
  router = inject(Router);
  servicio = inject(UserService);

  GuardarCambios(user : UserCreate){

    this.servicio.Create(user).subscribe(()=>{
      alert("Persona creada")
      this.router.navigate(['/principal/user'])
    })
  }
}
