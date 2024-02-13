import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lifecycle-hooks';

  inputval: string[] = ['Hello','Hi There'];

  constructor(){
    console.log('AppComponent constructor called.');
  }

  onBtnClicked(inputEl: HTMLInputElement){
    this.inputval.push(inputEl.value); 
  }
}
