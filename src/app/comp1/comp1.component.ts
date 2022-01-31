import { Component, OnInit } from '@angular/core';
import { Global } from '../global';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  myToken: string;
  constructor(private global: Global) {}

  ngOnInit() {
    this.myToken = this.global.token;
  }
  change() {
    this.global.token = this.myToken;
  }
}
