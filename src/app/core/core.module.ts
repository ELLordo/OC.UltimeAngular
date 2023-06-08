import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule , registerLocaleData} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import * as fr from '@angular/common/locales/fr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ]
})
export class CoreModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
