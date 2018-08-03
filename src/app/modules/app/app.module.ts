import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WebsiteModule } from '../website/website.module';
import { AppComponent } from './components/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WebsiteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
