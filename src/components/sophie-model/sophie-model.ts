import { Component } from '@angular/core';

/**
 * Generated class for the SophieModelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sophie-model',
  templateUrl: 'sophie-model.html'
})
export class SophieModelComponent {

  text: string;
  description:string;

  constructor() {
    console.log('Hello SophieModelComponent Component');
    this.text = '我是sophie组件';
    this.description="我是sophie组件的描述";
  }

}
