import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/Models/to-do';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoDataService {
  // dit voor de simulatie van het optellen van de id's
  lastId: number = 0;

  todos: ToDo[] = [];

  constructor() {}

  //POST /todos
  addTodo(todo: ToDo): ToDoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  //DELETE /todos/:id
  deleteTodoById(id: number): ToDoDataService {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return this;
  }

  //PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): ToDo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  //GET /todos
  getAllTodos(): ToDo[] {
    return this.todos;
  }

  //GET /todos/:id
  getTodoById(id: number): ToDo {
    return this.todos.filter((todo) => todo.id === id).pop();
  }

  //Toggle todo complete
  toggleTodoComplete(todo: ToDo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete,
    });
    return updatedTodo;
  }
}
