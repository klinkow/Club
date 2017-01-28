import { Component, OnInit } from '@angular/core';
import { Guest } from '../../../src/app/guest.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { GuestService } from './../guest.service';
import { routing } from '../app-routing';
import { Router } from '@angular/router';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [GuestService]
})

export class ListComponent implements OnInit {
  guests: FirebaseListObservable<any[]>;

  constructor(private router: Router, private guestService: GuestService){}

  // constructor(private angularFire: AngularFire) {
  //   this.guests = angularFire.database.list('guests');
  // }

  ngOnInit() {
    this.guests = this.guestService.getGuests();
  }

}
