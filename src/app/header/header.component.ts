import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private log: LoggerService) { }

  ngOnInit() {
    this.log.log('HeaderComponent initialized');
    $('.nav a').on('click', function () {
      $('.navbar-toggle').click();
    });
  }
}
