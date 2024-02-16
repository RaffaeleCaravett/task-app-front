import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
{
  path:'profilo/:id',
  loadChildren: () => import('./components/profilo/profilo.module').then(m => m.ProfiloModule),canActivate:[AuthGuard]
},
{
  path:'task/:id',
  loadChildren: () => import('./components/task/task.module').then(m => m.TaskModule),canActivate:[AuthGuard]
},
{
  path:'form',
  loadChildren: () => import('./components/form/form.module').then(m => m.FormModule)
},
{
  path:"**",
  component:HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
