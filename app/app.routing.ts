import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1 }    from './pages/page1/page1';
import { Page2 }    from './pages/page2/page2';
const appRoutes: Routes = [

  { path: 'page1', component: Page1 },
  { path: 'page2', component: Page2 },
  {path: '', component: Page1},
];
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);