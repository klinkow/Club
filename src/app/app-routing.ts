import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListComponent
  }, {
    path: 'about',
    component: AboutComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
