import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Guest } from './../guest.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-guest-detail',
  templateUrl: './guest-detail.component.html',
  styleUrls: ['./guest-detail.component.css'],
  providers: [GuestService]
})

export class GuestDetailComponent implements OnInit {
  guestId: string;
  guestToDisplay;


  constructor(private route: ActivatedRoute, private location: Location, private guestService: GuestService) {}
  // possible alternative:  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.guestId = urlParameters['id'];
    });
    this.guestToDisplay = this.guestService.getGuestById(this.guestId);
  }

  // submitForm(title: string, artist: string, description: string) {
  //   var newAlbum: Album = new Album(title, artist, description);
  //   this.albumService.addAlbum(newAlbum);
  // }

}
