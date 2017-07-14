import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';
  num: number = 123;
  user= {
    name: "Joe",
    age: 20,
    today: new Date()
  }
}
