import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Passwords Manager';

  constructor(private config: PrimeNGConfig, private translateService: TranslateService) {}

  ngOnInit() {
      this.translateService.setDefaultLang('en');
  }
}
