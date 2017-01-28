import { Injectable } from '@angular/core';
import { Guest } from './guest.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class GuestService {
  guests: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
  this.guests = angularFire.database.list('guests');
  }

  getGuests() {
    return this.guests;
  }

}
