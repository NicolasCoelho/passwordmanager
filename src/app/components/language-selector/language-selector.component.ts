import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

import { Language } from 'src/app/_interfaces/language';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  public languages: Language[];

  public selectedLanguage:Language;

  @Output() languageSelectionEvent = new EventEmitter<Boolean>();

  constructor(private config: PrimeNGConfig, private translateService: TranslateService) {
    this.languages = [
      {name: "English", code: 'en'},
      {name: "Português", code: 'pt'},
      {name: "Français", code: 'fr'},
      {name: "Deutsch", code: 'dt'}
    ]
  }

  ngOnInit(): void {
  }

  translate() {
    this.translateService.use(this.selectedLanguage.code);
    this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
    this.emitLanguageSelection();
  }

  emitLanguageSelection() {
    this.languageSelectionEvent.emit(true);
  }
}
