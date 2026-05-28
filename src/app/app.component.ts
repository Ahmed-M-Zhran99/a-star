import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  todos: string[] = [];
  title = 'a-star-onlineShopping';
  hamda: string = 'hamda';

  addItem(value: string) {
    this.todos.push(value);
    console.log(this.todos);
  }
}
