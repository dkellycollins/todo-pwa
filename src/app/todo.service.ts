import { Injectable } from '@angular/core';

export interface TodoItem {
  id: number;
  title: string;
  details: string;
  isComplete: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private items: TodoItem[];

  private defaultItems: TodoItem[] = [
    { id: 0, title: 'Create PWA', details: 'Create a PWA with Angular and Material.', isComplete: true },
    { id: 1, title: 'Create Ionic App', details: 'Update PWA to use Ionic', isComplete: false },
    { id: 2, title: 'Create TWA', details: 'Create a TWA using the PWA', isComplete: false },
  ];

  public constructor() {
    this.items = this.load() || this.defaultItems;
  }

  public getItems = (): TodoItem[] => {
    return this.items;
  }

  public getItem = (id: number): TodoItem => {
    return this.items.find(item => item.id === id);
  }

  public addItem = (title: string, details: string) => {
    this.items.push({
      id: this.items.length,
      title,
      details,
      isComplete: false
    });
    this.save();
  }

  public completeItem = (id: number) => {
    const item = this.getItem(id);
    item.isComplete = true;
    this.save();
  }

  private save = () => {
    localStorage.setItem('todo.items', JSON.stringify(this.items));
  }

  private load = () => {
    const value = localStorage.getItem('todo.items');
    if (!value) {
      return undefined;
    }
    return JSON.parse(value);
  }
}
