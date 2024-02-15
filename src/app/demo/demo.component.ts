import { Component, Input, OnChanges, SimpleChanges,OnInit, ElementRef, ViewChild,DoCheck, AfterContentInit, ContentChild} from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit, DoCheck,AfterContentInit{
  
  title: string = 'Demo Component';
  @Input() message?: string;
  @ViewChild('temp') tempPara?: ElementRef;
  @ContentChild('temp') paraContent?: ElementRef;
 
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
    console.log("In a ngDoCheck", this.paraContent);

  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit hook called');
    console.log("In a ngAfterContentInit", this.paraContent?.nativeElement);

  }
}
