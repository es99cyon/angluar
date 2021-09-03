import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { TutorialModule } from './tutorial/tutorial.module'; 
const routes: Routes = [ 
  { 
    path: '', 
    loadChildren: () => TutorialModule
  } 
]; 
@NgModule({
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] 
  }) 
  export class AppRoutingModule {}


