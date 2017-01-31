import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GuestDetailComponent } from './guest-detail/guest-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
   path: 'guests/:id',
   component: GuestDetailComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
