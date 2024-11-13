import { Component } from '@angular/core';
import { UserItemComponent } from './user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users = [
    { name: 'Pesho',  age: 22 },
    { name: 'Ivan',  age: 33 },
    { name: 'Mira',  age: 18 },
    { name: 'Denis',  age: 55 },
    { name: 'Kircho',  age: 43 },
  ];
}
