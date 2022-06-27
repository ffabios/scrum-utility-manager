import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoriaComponent } from './autoria/autoria.component';
import { EstoriaComponent } from './estoria/estoria.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: 'autoria', component: AutoriaComponent },
  { path: 'sobre/:data', component: SobreComponent },
  { path: 'estoria', component: EstoriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
