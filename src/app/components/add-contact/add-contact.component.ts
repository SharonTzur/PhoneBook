import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'app/services/contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: []
})
export class AddContactComponent implements OnInit {

  contact: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.contact = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(2), Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(2)]],
      picture: ['', []]
    });
  }

  onSubmit({ value, valid }: { value: any, valid: boolean }) {
    if (valid) {
      this.contactService.saveContact(value).subscribe((contact) => {
        console.log('contact saved.')
        this.router.navigate(['/contact', contact.id])
      })
    }
  }

}
