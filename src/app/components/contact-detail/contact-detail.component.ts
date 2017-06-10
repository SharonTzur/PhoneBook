import { Component, OnInit } from '@angular/core';
import { ContactService } from 'app/services/contact.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  public contact;

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.contactService.getContact(+params['id']))
      .subscribe(contact => this.contact = contact);
  }

}
