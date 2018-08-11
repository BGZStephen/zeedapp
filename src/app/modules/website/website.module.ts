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
    components.SectionAbout,
    components.SectionFeatures,
    components.SectionCounters,
    components.SectionScreenshots,
    components.SectionTestimonials,
    components.SectionDemo,
    components.SectionPricing,
    components.SectionTeam,
    components.SectionAppDownload,
    components.SectionNews,
  ],
  imports: [
    BrowserModule,
    websiteRoutes
  ],
  providers: [],
  bootstrap: [components.ViewWrapper]
})
export class WebsiteModule { }