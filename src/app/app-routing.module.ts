import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoDetailsPageComponent } from './todo-details-page/todo-details-page.component';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';

const routes: Routes = [
  {
    path: 'todo/:id',
    component: TodoDetailsPageComponent
  },
  {
    path: '',
    component: TodoListPageComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
