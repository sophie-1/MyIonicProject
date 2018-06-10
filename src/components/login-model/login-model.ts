import { Component } from '@angular/core';

/**
 * Generated class for the LoginModelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-model',
  templateUrl: 'login-model.html'
})
export class LoginModelComponent {

  text: string;

  constructor() {
    console.log('Hello LoginModelComponent Component');
    this.text = 'Hello World';
  }

}
