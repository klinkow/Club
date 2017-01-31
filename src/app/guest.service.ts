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

  addGuest(newGuest: Guest) {
    this.guests.push(newGuest);
  }

  getGuestById(guestId: string){
    return this.angularFire.database.object('guests/' + guestId);
  }

  updateGuest(localUpdatedGuest){
  var guestEntryInFirebase = this.getGuestById(localUpdatedGuest.$key);
  guestEntryInFirebase.update({name: localUpdatedGuest.name,
                              friends: localUpdatedGuest.friends,
                              vip: localUpdatedGuest.vip});
  }

  deleteGuest(localGuestToDelete){
    var guestEntryInFirebase = this.getGuestById(localGuestToDelete.$key);
    guestEntryInFirebase.remove();
  }

}
