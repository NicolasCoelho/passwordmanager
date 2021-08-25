import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/_interfaces/user';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  step: number;

  user: User;

  confirmPassword: String;

  constructor() {
    this.step = 1;
    this.user = {name: '', password: ''};
    this.confirmPassword = '';
  }

  ngOnInit(): void {
  }

  nextStep() {
    this.step += 1;
  }

  save(event:any) {
    if(this.validateInputs()) {
      console.log("save");
    } else {
      this.setError();
    }
  }

  validateInputs() {
    if(this.user.name === '' || this.user.password === '' || this.confirmPassword === '') return false;
    return (this.confirmPassword === this.user.password && this.user.password.length >= 8);
  }

  setError() {
    console.log("error");
  }

}
