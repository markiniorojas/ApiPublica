import { Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { CharactersComponent } from './component/characters/characters.component';
import { PlanetsComponent } from './component/planets/planets.component';
import { SpeciesComponent } from './component/species/species.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { CrearUserComponent } from './component/crear-user/crear-user.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { DeleteduserComponent } from './component/deleteduser/deleteduser.component';


export const routes: Routes = [
    {path: '', redirectTo: 'principal', pathMatch: 'full'},
    {path: 'principal',component: PrincipalComponent,
        children:[
            { path: 'user', component: UserComponent},
            { path: 'user/create', component: CrearUserComponent},
            { path: 'user/update/:id', component: UpdateUserComponent},
            {path: 'user/delete/:id' , component : DeleteduserComponent},

            { path: 'characters', component: CharactersComponent},
            { path: 'planets', component: PlanetsComponent},
            { path: 'species', component: SpeciesComponent},
            { path: '', redirectTo: '', pathMatch: 'full'}

            
        ]
    }

];

