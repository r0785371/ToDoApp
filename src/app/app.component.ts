import { Component } from '@angular/core';
import { ToDoDataService } from 'src/app/Services/to-do-data.service';
import { ToDo } from 'src/app/Models/to-do';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {
  title = 'todo-app';

  public todosDone = '';
  //wordt door Header component uitgevoerd
  // newTodo: ToDo = new ToDo();

  constructor(private todoDataService: ToDoDataService) {}

  //wordt door Header component uitgevoerd en vervangen door onAddTodo
  // addTodo() {
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo = new ToDo();
  // }

  onAddTodo(todo: ToDo) {
    this.todoDataService.addTodo(todo);
  }

  onToggleTodoComplete(todo: ToDo) {
    this.todoDataService.toggleTodoComplete(todo);
  }
  onRemoveTodo(todo: ToDo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
