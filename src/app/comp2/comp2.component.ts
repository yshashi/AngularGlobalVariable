import { Component, OnInit } from '@angular/core';
import { Global } from '../global';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  
  global !: Global;
  constructor(private globals : Global) {
    this.global = globals
   }
ngOnInit(): void {
}

}