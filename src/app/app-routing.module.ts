import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CunsumerComponent } from './cunsumer/cunsumer.component';
import { HomeloanComponent } from './homeloan/homeloan.component';

const routes: Routes = [
  {path:"consumer",component:CunsumerComponent },
  {path:"homeloan",component:HomeloanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
