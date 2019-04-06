import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {

  @Input()
  public items: TodoItem[];

  @Output()
  public editItem: EventEmitter<TodoItem> = new EventEmitter();

  public onClick = (item: TodoItem) => {
    this.editItem.emit(item);
  }
}
