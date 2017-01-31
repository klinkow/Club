import { Component, Input, OnInit } from '@angular/core';
import { Guest } from './../guest.model';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-edit-guest',
  templateUrl: './edit-guest.component.html',
  styleUrls: ['./edit-guest.component.css'],
  providers: [GuestService]
})
export class EditGuestComponent implements OnInit {
  @Input() selectedGuest;


  constructor(private guestService: GuestService) { }

  ngOnInit() {
  }

  beginDeletingGuest(guestToDelete){
    if(confirm("Are you sure you want to delete this guest?")){
      this.guestService.deleteGuest(guestToDelete);
    }
  }

  beginUpdatingGuest(guestToUpdate){
    this.guestService.updateGuest(guestToUpdate);
  }
}
