import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private log: LoggerService) { }

  ngOnInit() {
    this.log.log('SignupComponent initialized');
  }
  doSignup() {
    this.router.navigate(['/dashboard']);
  }
  ngOnDestroy() {
    this.log.log('SignupComponent Destroyed');
  }
}
