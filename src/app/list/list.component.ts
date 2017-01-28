import { Component, OnInit } from '@angular/core';
import { Guest } from '../../../src/app/guest.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { GuestService } from './../guest.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [GuestService]
})

export class ListComponent implements OnInit {
  albums: FirebaseListObservable<any[]>;

  constructor(private router: Router, private guestService: GuestService) {}

  vipCheck(guest) {

  }

  ngOnInit() {
  }

}
