import { Component, OnInit } from '@angular/core';
import { ContactService } from 'app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  public contacts: any[] = [];
  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe((contact) => {
      this.contacts.push(contact);
    })
  }

  goToProfile(id): void {
    this.router.navigate(['/contact', id]);
  }

}
