import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { PostModel } from '../../modelos/postmodulo';
import { PostService } from '../../Service/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [ MatTableModule, MatButtonModule, RouterLink,CommonModule,MatIconModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  model : PostModel[] = [];

  displayedColumns: string[] = ['No', 'UserId', 'Title', 'Body', 'Actions'];

  servicePort = inject(PostService);

  ngOnInit(): void {
      this.loadData();
  }

  loadData(){
    this.servicePort.GetAll().subscribe({
      next: (data:any) => {
        this.model = data;
        console.log(this.model)
      }
    })
  }

}
