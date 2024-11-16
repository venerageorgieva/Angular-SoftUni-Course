import { Injectable, OnDestroy } from '@angular/core';
import { SimpleUser } from '../types';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class UserService implements OnDestroy {
  appUsers: SimpleUser[] = [
    { name: 'Petko', age: 18 },
    { name: 'Maria', age: 34 },
    { name: 'Kircho', age: 28 },
  ];
  constructor() { }

  ngOnDestroy(): void {
    // Unsubscribe from events
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
