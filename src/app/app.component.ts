import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lifecycle-hooks';

  inputval: string = '';

  constructor(){
    console.log('AppComponent constructor called.');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit from AppComponent ');
  }

  onBtnClicked(inputEl: HTMLInputElement){
    this.inputval = inputEl.value; 
  }
}
