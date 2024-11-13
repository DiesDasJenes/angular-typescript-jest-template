import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const BasePath = 'todo-app';

const routes: Routes = [
  { path: '', redirectTo: BasePath, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
