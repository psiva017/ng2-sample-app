import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

loading:boolean = true;

  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

}
