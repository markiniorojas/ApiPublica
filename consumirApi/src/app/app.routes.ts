import { Routes } from '@angular/router';
import { FilmsComponent } from './component/films/films.component';
import { CharactersComponent } from './component/characters/characters.component';
import { PlanetsComponent } from './component/planets/planets.component';
import { SpeciesComponent } from './component/species/species.component';


export const routes: Routes = [
    {path: '', redirectTo: 'film', pathMatch: 'full'},
    {path: 'film',component: FilmsComponent,
        children:[
            { path: 'film', component: FilmsComponent},
            { path: 'characters', component: CharactersComponent},
            { path: 'planets', component: PlanetsComponent},
            { path: 'species', component: SpeciesComponent},
            { path: '', redirectTo: '', pathMatch: 'full'}
        ]
    }

];

