import { Component } from '@angular/core';
import { TodoService, TodoItem } from '../todo.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddTodoItemDialogComponent } from '../add-todo-item-dialog/add-todo-item-dialog.component';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent {

  public items: TodoItem[] = this.todoService.getItems();

  public constructor(
    private readonly todoService: TodoService,
    private readonly router: Router,
    private readonly dialog: MatDialog
  ) {

  }

  public onAddItem = () => {
    const dialogRef = this.dialog.open(AddTodoItemDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.items = this.todoService.getItems();
    });
  }

  public onEditItem = (item: TodoItem) => {
    this.router.navigateByUrl(`/todo/${item.id}`);
  }

}
