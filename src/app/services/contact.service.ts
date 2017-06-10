import { Injectable } from '@angular/core';
import { CONTACTS } from './mock-contacts';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ContactService {

  constructor() { }

  getContacts(): Observable<any[]> {
    return Observable.from(CONTACTS);
  }

  getContactsSlowly(): Observable<any[]> {
    return Observable
      .interval(200)
      .timeInterval()
      .take(CONTACTS.length)
      .map(({ value }) => CONTACTS[value]);
  }

  saveContact({ firstName, lastName, email, phone }): Observable<any> {
    CONTACTS.push({ first_name : firstName, last_name : lastName, email, phone, id: CONTACTS.length });
    return this.getContact(CONTACTS.length - 1);
  }

  getContact(id): Observable<any> {
    return Observable.from(CONTACTS).filter(contact => contact.id === id);
  }
}
