import { Component, OnInit } from '@angular/core';
import { Global } from '../global';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  global !: Global;
  constructor(private globals : Global) {
    this.global = globals
   }

  ngOnInit() {

  }

}