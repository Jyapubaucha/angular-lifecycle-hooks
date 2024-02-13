import { Component, Input, OnChanges, SimpleChanges,OnInit, ElementRef, ViewChild,DoCheck} from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit, DoCheck{
  
  title: string = 'Demo Component';
  @Input() message?: string;
  @ViewChild('temp') tempPara?: ElementRef;

  constructor(){
    console.log('DemoComponent constructor called');
    // console.log(this.title);
    // console.log(this.message);
  };

  ngOnChanges(changes: SimpleChanges){
    console.log('On changes hook called'); 
    // console.log(changes);

  }
  ngOnInit() {
    console.log('ngOnInit hook called'); 
    // console.log(this.tempPara?.nativeElement.innerHTML);

  }
  ngDoCheck() {
    console.log('ngDoCheck hook called'); 

  }
}
