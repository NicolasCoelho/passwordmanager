import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { Database } from 'src/app/_database/db';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

  public passwordError: boolean = false;

  public userName:string;

  public password:string;

  constructor(private config: PrimeNGConfig, private translateService: TranslateService, private router: Router, private db: Database) {
    this.userName = this.db.getUserName();
  }

  ngOnInit(): void {
    const langSelected = this.db.getLanguage();
    this.translateService.use(langSelected);
    this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
    this.db.setLanguage(langSelected);
  }

  login() {
    if(this.db.getPassword() === this.password) {
      this.passwordError = false;
      this.router.navigate(['home'])
    } else {
      this.passwordError = true;
    }
  }

}
