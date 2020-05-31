import { Component } from '@angular/core';
import { ToDoDataService } from 'src/app/Services/to-do-data.service';
import { ToDo } from 'src/app/Models/to-do';

import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ToDoDataService],
})
export class AppComponent {
  title = 'todo-app';

  newTodo: ToDo = new ToDo();

  constructor(private todoDataService: ToDoDataService) {}

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new ToDo();
  }
  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }
  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
