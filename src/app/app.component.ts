import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  public title = 'Library'
public columns = 1;
public rows = 5;
constructor(){};
}
