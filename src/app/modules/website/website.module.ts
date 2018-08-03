import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as components from './components';

@NgModule({
  declarations: [
    components.ViewWrapper,
    components.TopNavigation,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class WebsiteModule { }
