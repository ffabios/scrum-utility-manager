import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoriaComponent } from './autoria/autoria.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: 'autoria', component: AutoriaComponent },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
