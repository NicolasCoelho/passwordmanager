import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/_interfaces/user';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    trigger('InOut', [
      transition(':enter', [
        style({ opacity: 0, margin: '0px 0px -100% 0px'}),
        animate('300ms ease-out', style({opacity: 1, margin: 0 }) )
      ]),
      transition(':leave', [
        style({ opacity: 1, margin: 0, position: 'absolute' }),
        animate('300ms ease-in', style({opacity: 0, margin: '0px 0px 100% 0px' }))
      ])
    ])
  ]
})
export class IntroComponent implements OnInit {

  step: number;

  user: User;

  confirmPassword: String;

  public errors: any;

  constructor() {
    this.step = 1;
    this.user = {name: '', password: ''};
    this.confirmPassword = '';
    this.errors = {
      name: false,
      password: false,
      confirmPassword: false
    }
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
    this.errors.name = (this.user.name.length === 0)
    this.errors.password = (this.user.password === '' || this.user.password.length < 8);
    this.errors.confirmPassword = (this.confirmPassword !== this.user.password && this.user.password.length > 0)

    if(this.user.name === '' || this.user.password === '' || this.confirmPassword === '') return false;
    return (this.confirmPassword === this.user.password && this.user.password.length >= 8);
  }

  setError() {
    console.log("error");
  }

}
