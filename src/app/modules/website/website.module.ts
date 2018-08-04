import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as components from './components';

import { websiteRoutes } from './website.routes'

@NgModule({
  declarations: [
    components.ViewWrapper,
    components.TopNavigation,
    components.HomePage,
    components.SectionIntro,
  ],
  imports: [
    BrowserModule,
    websiteRoutes
  ],
  providers: [],
  bootstrap: [components.ViewWrapper]
})
export class WebsiteModule { }