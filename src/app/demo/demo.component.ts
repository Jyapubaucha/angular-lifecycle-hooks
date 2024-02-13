import { Component, Input } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  
  title: string = 'Demo Component';
  @Input() message: string = '';

  constructor(){
    console.log('DemoComponent constructor called');
    console.log('this.title');
    console.log('this.message');
  };
}