import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  operator = "";
  constructor (private router:Router){

  }

  str : String= "";

  add7(){
    this.str = this.str + "7";
  }

  add8(){
    this.str = this.str + "8";
  }

  add9(){
    this.str = this.str + "9";
  }

  add4(){
    this.str = this.str + "4";
  }

  add5(){
    this.str = this.str + "5";
  }

  add6(){
    this.str = this.str + "6";
  }

  add1(){
    this.str = this.str + "1";
  }

  add2(){
    this.str = this.str + "2";
  }

  add3(){
    this.str = this.str + "3";
  }

  addMin() {
    this.str = this.str + "-";
    this.operator = "-";
  }
  addPlus() {
    this.str = this.str + "+";
    this.operator = "+";
  }
  addMul() {
    this.str = this.str + "*";
    this.operator = "*";
  }

  
}
