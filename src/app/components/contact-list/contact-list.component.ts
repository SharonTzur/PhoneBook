import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from 'app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, OnDestroy {

  contacts: any[] = [];
  contactsSubscription;
  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.contactsSubscription = this.contactService.getContacts().subscribe((contacts) => {
      // this.contacts.push(contact);
      this.contacts = contacts;
    })
  }

  goToProfile(id): void {
    this.router.navigate(['/contact', id]);
  }

  ngOnDestroy() {
    this.contactsSubscription.unsubscribe();
  }
}
