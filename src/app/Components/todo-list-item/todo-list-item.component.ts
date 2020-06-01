import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/Models/to-do';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: ToDo;

  @Output()
  remove: EventEmitter<ToDo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<ToDo> = new EventEmitter();

  constructor() {}

  toggleTodoComplete(todo: ToDo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: ToDo) {
    this.remove.emit(todo);
  }

  ngOnInit(): void {}
}
