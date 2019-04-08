import { Component, OnInit } from '@angular/core';
import { TodoService, TodoItem } from '../todo.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddTodoItemDialogComponent } from '../add-todo-item-dialog/add-todo-item-dialog.component';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
})
export class TodoListPageComponent {

  public items: TodoItem[] = this.todoService.getItems();

  constructor(
    private readonly todoService: TodoService,
    private readonly router: Router,
    private readonly modalController: ModalController
  ) { }

  public onAddItem = async () => {
    const modal = await this.modalController.create({
      component: AddTodoItemDialogComponent
    });
    await modal.present();
    
    const result = await modal.onDidDismiss();
    if (result.data) {
      this.items = this.todoService.getItems();
    }
  }

  public onEditItem = (item: TodoItem) => {
    this.router.navigateByUrl(`/todo/${item.id}`);
  }

}
