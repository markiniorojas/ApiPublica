import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteduser',
  imports: [],
  templateUrl: './deleteduser.component.html',
  styleUrl: './deleteduser.component.css'
})
export class DeleteduserComponent implements OnInit {

  @Input({ transform: numberAttribute }) id!: number;

  private readonly servicio = inject(UserService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    if (this.id) {
      this.servicio.Delete(this.id).subscribe({
        next: () => {
          alert('Usuario eliminado correctamente');
          this.router.navigate(['/principal/user']);
        },
        error: (err) => {
          console.error('Error al eliminar el usuario', err);
          alert('Error al eliminar el usuario');
          this.router.navigate(['/principal/user']);
        }
      });
    } else {
      alert('ID de usuario no proporcionado');
      this.router.navigate(['/principal/user']);
    }
  }



}
