import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList("David", [
    new TodoItem("Build basic angular app", true),
    new TodoItem("Play God of War Ragnarok"),
    new TodoItem("Rest"),
    new TodoItem("Rest some more"),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  addItem(newItem: string) {
    if (!newItem) return;
    this.list.addItem(newItem);
  }

  showComplete: boolean = true;
}
