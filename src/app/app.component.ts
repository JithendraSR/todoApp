import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-do App';
  todos = [
    {
      label: 'Bring Milk',
      done: false,
      priority: 3
    },
    {
      label: 'Recharge Mobile data',
      done: true,
      priority: 1
    },
    {
      label: 'Complete Home Work',
      done: false,
      priority: 2
    },
    {
      label: 'Take pills',
      done: true,
      priority: 4
    }
  ];

  addTodo(newTodoLabel) {
    var newTodo = {
      label : newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo)
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter( t => t.label !== todo.label);
  }
}
