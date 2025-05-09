import { Component } from '@angular/core';
import { FormularioComponent } from '../../formulario/formulario.component';

@Component({
  selector: 'app-crear-post',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './crear-post.component.html',
  styleUrl: './crear-post.component.css'
})
export class CrearPostComponent {

}
