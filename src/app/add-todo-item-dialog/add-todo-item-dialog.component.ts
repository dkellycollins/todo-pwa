import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo-item-dialog',
  templateUrl: './add-todo-item-dialog.component.html',
  styleUrls: ['./add-todo-item-dialog.component.scss']
})
export class AddTodoItemDialogComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private readonly dialogRef: MatDialogRef<AddTodoItemDialogComponent>,
    private readonly formBuilder: FormBuilder,
    private readonly todoService: TodoService
  ) { }

  public ngOnInit() {
    this.form = this.formBuilder.group({
      title: [{ value: '', disabled: false }],
      details: [{ value: '', disabled: false }]
    });
  }

  public onCancel() {
    this.dialogRef.close(false);
  }

  public onSubmit() {
    const { title, details } = this.form.getRawValue();
    this.todoService.addItem(title, details);
    this.dialogRef.close(true);
  }

}
