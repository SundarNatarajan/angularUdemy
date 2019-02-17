import { Component } from '@angular/core';

// app component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = ''

  onBtnClick(): void{
    this.userName = ''
  } 
}
