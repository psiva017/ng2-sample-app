import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-output-examlpe',
  templateUrl: './input-output-examlpe.component.html',
  styleUrls: ['./input-output-examlpe.component.css']
})
export class InputOutputExamlpeComponent implements OnInit {

 @Input()
    count:number = 0;
  constructor() { }

increase(){
  this.count++;
}
decrease(){
  this.count--;
}
  ngOnInit() {
   console.log(this.count);
   
  }

}
