import { Component, inject, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { FilmsService } from '../../Service/films.service';
import { FilmDetail } from '../../modelos/filmmodulo';
import { forkJoin } from 'rxjs';

const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-films',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'title', 'episode_id', 'director', 'producer', 'release_date'];
  dataSource: any[] = [];

  private filmService = inject(FilmsService);

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.filmService.GetAll().subscribe(list => {
      const peticiones = list.map(item => this.filmService.GetById(item.uid));
      forkJoin(peticiones).subscribe((films: FilmDetail[]) => {
        this.dataSource = films.map((film, i) => ({
          position: i + 1,
          title: film.title,
          episode_id: film.episode_id,
          director: film.director,
          producer: film.producer,
          release_date: film.release_date
        }));
      });
    });
  }
}