import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { ListComponent } from './list/list.component';
import { routing } from './app-routing';
import { AboutComponent } from './about/about.component';
import { FilterPipe } from './filter.pipe';
import { GuestDetailComponent } from './guest-detail/guest-detail.component';
import { EditGuestComponent } from './edit-guest/edit-guest.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AboutComponent,
    FilterPipe,
    GuestDetailComponent,
    EditGuestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
