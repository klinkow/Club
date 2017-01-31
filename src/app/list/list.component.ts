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
  currentRoute: string = this.router.url;
  filterType : string;
  displayEdit : boolean = false;

  constructor(private router: Router, private guestService: GuestService){}

  // constructor(private angularFire: AngularFire) {
  //   this.guests = angularFire.database.list('guests');
  // }

  ngOnInit() {
    this.guests = this.guestService.getGuests();
  }

  pipeSelected(filter) {
    this.filterType = filter;
  }

  toggleEdit() {
    if (this.displayEdit === false) {
      this.displayEdit = true;
    } else {
      this.displayEdit = false;
    }
  }

  goToDetailPage(clickedGuest) {
    this.router.navigate(['guests', clickedGuest.$key]);
  };

  submitForm(name: string, friends: number, vip: boolean) {
    var inside : boolean = false;
    var newGuest: Guest = new Guest(name, friends, vip, inside);
    this.guestService.addGuest(newGuest);
  }

}
