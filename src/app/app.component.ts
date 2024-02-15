import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lifecycle-hooks';

  inputval: string = '';
  toDestroy: boolean = false; 

  constructor(){
    console.log('AppComponent constructor called.');
  }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit from AppComponent ');
  // }
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked from AppComponent ');
  // }

  DestroyComponent(){
    this.toDestroy = !this.toDestroy;
  }


  onBtnClicked(inputEl: HTMLInputElement){
    this.inputval = inputEl.value; 
  }
}
