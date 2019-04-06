import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService, TodoItem } from '../todo.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-details-page',
  templateUrl: './todo-details-page.component.html'
})
export class TodoDetailsPageComponent implements OnInit {

  public item$: Observable<TodoItem>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly todoService: TodoService
  ) {

  }

  public ngOnInit() {
    this.refresh();
  }

  public goBack = () => {
    this.router.navigateByUrl('/');
  }

  public onCompleteItem = (id: number) => {
    console.log(`onCompleteItem(${id})`);
    this.todoService.completeItem(id);
    this.refresh();
  }

  private refresh() {
    this.item$ = this.route.params.pipe(
      map(this.getItem)
    );
  }

  private getItem = (params: {id: string}): TodoItem | undefined => {
    const id = parseInt(params.id, 10);
    return this.todoService.getItem(id);
  }

}
