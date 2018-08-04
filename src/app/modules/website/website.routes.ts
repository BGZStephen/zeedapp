import { Routes, RouterModule } from '@angular/router';

import * as components from './components';

const WEBSITE_ROUTES: Routes = [
  {
    path: '', component: components.ViewWrapper, children: [
      { path: '', component: components.HomePage }
    ]
  }
]

export const websiteRoutes = RouterModule.forRoot(WEBSITE_ROUTES);