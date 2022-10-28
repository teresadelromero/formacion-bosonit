import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {NavBarComponent} from './components/navbar/navBar.component';
import { FooterComponent } from './components/footer/footer.component';
import {LandigPageHeaderComponent} from './components/landigPageHeader/landigPageHeader.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LandigPageHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
