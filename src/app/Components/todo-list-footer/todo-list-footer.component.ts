import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from 'src/app/Models/to-do';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.scss'],
})
export class TodoListFooterComponent implements OnInit {
  @Input()
  todos: ToDo[];

  constructor() {}

  ngOnInit(): void {}
}
