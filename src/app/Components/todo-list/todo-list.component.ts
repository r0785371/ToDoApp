import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/Models/to-do';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input()
  todos: ToDo[];

  @Output()
  remove: EventEmitter<ToDo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<ToDo> = new EventEmitter();

  constructor() {}

  onToggleTodoComplete(todo: ToDo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: ToDo) {
    this.remove.emit(todo);
  }

  ngOnInit(): void {}
}
