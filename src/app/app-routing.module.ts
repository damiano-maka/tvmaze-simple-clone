import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [ 
  {
  path: '',
  redirectTo: 'homepage',
  pathMatch: 'full'
 },
 {
  path: 'homepage',
  component: HomeComponent
},
 {
  path: 'detail/:id',
  component: DetailsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
