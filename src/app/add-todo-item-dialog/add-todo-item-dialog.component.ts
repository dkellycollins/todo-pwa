import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo-item-dialog',
  templateUrl: './add-todo-item-dialog.component.html'
})
export class AddTodoItemDialogComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private readonly modalController: ModalController,
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
    this.modalController.dismiss(false);
  }

  public onSubmit() {
    const { title, details } = this.form.getRawValue();
    this.todoService.addItem(title, details);
    this.modalController.dismiss(true);
  }

}
