import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerpartComponent } from './computerpart/computerpart.component';
import { ComputerformComponent } from './computerform/computerform.component';

const routes: Routes = [
  {path:'parts',component:ComputerpartComponent},
  {path:'forms',component:ComputerformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
