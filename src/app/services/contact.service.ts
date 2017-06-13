import { Injectable } from '@angular/core';
import { CONTACTS } from './mock-contacts';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ContactService {

  contacts;

  constructor(private http: Http) {
    this.contacts = CONTACTS;
  }

  getContacts(): Observable<any[]> {
    return Observable.from(this.contacts);
    // return this.http.get('assets/mock-contacts.json')
    //   .map((res) => {
    //     return res.json().contacts;
    //   });
  }

  getContactsSlowly(): Observable<any[]> {
    return Observable
      .interval(200)
      .timeInterval()
      .take(this.contacts.length)
      .map(({ value }) => this.contacts[value]);
  }

  saveContact({ firstName, lastName, email, phone }): Observable<any> {
    this.contacts.push({ first_name: firstName, last_name: lastName, email, phone, id: this.contacts.length + 1 });
    return this.getContact(this.contacts.length);
  }

  getContact(id): Observable<any> {
    return Observable.from(this.contacts).filter(contact => contact['id'] === id).take(1);
    // return this.http.get('assets/mock-contacts.json')
    //   .flatMap((res) => {
    //     return res.json().contacts.filter((contact) => contact.id === id)
    //   })
    //   .take(1);
  }

  deleteContact(contactId) {
    this.contacts = this.contacts.filter(item => item.id !== contactId);
    return this.getContacts();
  }
}
