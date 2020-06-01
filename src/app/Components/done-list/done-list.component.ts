import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ToDo } from 'src/app/Models/to-do';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss'],
})
export class DoneListComponent implements OnInit {
  @Input()
  todos: ToDo[];

  @Output()
  toggleComplete: EventEmitter<ToDo> = new EventEmitter();

  onToggleTodoComplete(todo: ToDo) {
    this.toggleComplete.emit(todo);
  }

  constructor() {}

  ngOnInit(): void {}
}
