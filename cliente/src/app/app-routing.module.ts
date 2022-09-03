import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';

const routes: Routes = [
  {path: '', component:CrearTareaComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
