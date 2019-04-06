import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem, TodoService } from '../todo.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  @Output()
  public completeItem: EventEmitter<number> = new EventEmitter();

  public form: FormGroup;

  private _item: TodoItem | undefined;

  public constructor(
    private readonly formBuilder: FormBuilder
  ) {

  }

  public ngOnInit() {
    this.form = this.formBuilder.group({
      title: [{ value: this.item && this.item.title, disabled: true }],
      details: [{ value: this.item && this.item.details, disabled: true }]
    });
  }

  public get item(): TodoItem | undefined {
    return this._item;
  }

  @Input()
  public set item(value: TodoItem) {
    this._item = value;

    if (!!this.form) {
      this.form.patchValue(value);
    }
  }

  public onCompleteItem = () => {
    if (!this.item) {
      return;
    }

    console.log(`onCompleteItem => ${this.item.id}`);
    this.completeItem.emit(this.item.id);
  }
}
