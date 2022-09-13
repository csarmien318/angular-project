import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isClicked = false;
  clickCount = 0;
  numClicks = [0];

  handleClickCount() {
    this.clickCount++;
    this.numClicks.push(this.clickCount);
  }

  // checkCount() {
    
  // }
}
