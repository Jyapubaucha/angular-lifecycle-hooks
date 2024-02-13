import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges{
  
  title: string = 'Demo Component';
  @Input() message?: string;

  constructor(){
    console.log('DemoComponent constructor called');
    console.log(this.title);
    console.log(this.message);
  };

  ngOnChanges(changes: SimpleChanges){
    console.log('On changes hook called'); 
    console.log(changes);

  }
}
