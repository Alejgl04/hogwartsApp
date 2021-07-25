import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'public',
    loadChildren: () => import('./hogwarts/hogwarts.module').then( m => m.HogwartsModule )
  },
  {
    path:'**',
    redirectTo: 'public'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
