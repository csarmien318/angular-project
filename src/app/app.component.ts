import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ERROR: servers was declared as
  // servers;

  // SOLUTION:
  servers = [];
  count = 0;

  onAddServer() {
    this.servers.push(`Another Server ${++this.count}`);
  }

  onRemoveServer(id: number) {
    const position = id + 1;

    // ERROR: 
    // const deleted = this.servers.splice(position, 1);

    // SOLUTION:
    const deleted = this.servers.splice(position - 1, 1);
    this.count = this.servers.length === 0 ? 0 : this.count;
  }
}
