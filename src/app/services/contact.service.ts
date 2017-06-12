import { Injectable } from '@angular/core';
import { CONTACTS } from './mock-contacts';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  getContacts(): Observable<any[]> {
    // return Observable.from(CONTACTS);
    return this.http.get('assets/mock-contacts.json')
    .map((res) => {
      return res.json().contacts;
    });
  }

  getContactsSlowly(): Observable<any[]> {
    return Observable
      .interval(200)
      .timeInterval()
      .take(CONTACTS.length)
      .map(({ value }) => CONTACTS[value]);
  }

  saveContact({ firstName, lastName, email, phone }): Observable<any> {
    CONTACTS.push({ first_name: firstName, last_name: lastName, email, phone, id: CONTACTS.length });
    return this.getContact(CONTACTS.length - 1);
  }

  getContact(id): Observable<any> {
    // return Observable.from(CONTACTS).filter(contact => contact.id === id).take(1);
    return this.http.get('assets/mock-contacts.json')
    .flatMap((res) => {
      return res.json().contacts.filter((contact) => contact.id === id)
    })
    .take(1);
  }

  deleteContact(contactId) {
    // CONTACTS = CONTACTS.filter(item => item.id !== contactId);
  }
}
