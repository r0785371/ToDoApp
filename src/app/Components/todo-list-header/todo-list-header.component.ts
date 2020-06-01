import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/Models/to-do';

/* Dit is een "dom" component, deze weet niet wat er buiten zichzelf gebeurt
enkel ontvangen inputs via binding en zal data emitten als events */
@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss'],
})
export class TodoListHeaderComponent implements OnInit {
  newTodo: ToDo = new ToDo();

  //de dataservice wordt niet geinjecteerd om de nieuwe Todo te saven
  //=> add event wordt geemit en geeft de nieuwe Todo door als argument

  //component emits zijn eigen events met eventemitter met de @Output
  //decorator
  @Output()
  add: EventEmitter<ToDo> = new EventEmitter();

  constructor() {}

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new ToDo();
  }

  ngOnInit(): void {}
}
