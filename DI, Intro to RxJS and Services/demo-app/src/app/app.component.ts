import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SimpleUser } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo-app';
  appUsers: SimpleUser[] = [
    { name: 'Petko', age: 18 },
    { name: 'Maria', age: 34 },
    { name: 'Kircho', age: 28 },
  ];

  handleClick() {
    this.title = 'ZDR!';
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value),
    };

    // this.appUsers = [...this.appUsers, user]; //! IMPORTANT HACK
    this.appUsers.push(user);
    
    inputName.value = '';
    inputAge.value = '';
  }
}
