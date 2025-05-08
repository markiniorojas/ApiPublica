import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule} from '@angular/material/table';
import { UserService } from '../../Service/user.service';
import { UserModel } from '../../modelos/usermodulo';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, RouterLink,CommonModule ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  model : UserModel[] = [];

  displayedColumns: string[] = ['No', 'name', 'username', 'email', 'actions'];

  servicesUser = inject(UserService);

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.servicesUser.GetAll().subscribe({
      next: (data:any) => {
        this.model = data;
        console.log(this.model)
      }
    })
  }
}