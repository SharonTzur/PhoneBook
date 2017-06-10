import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactListComponent } from 'app/components/contact-list/contact-list.component';
import { ContactDetailComponent } from 'app/components/contact-detail/contact-detail.component';
import { AddContactComponent } from 'app/components/add-contact/add-contact.component';


const appRoutes: Routes = [
    { path: 'contacts', component: ContactListComponent },
    { path: 'contact/:id', component: ContactDetailComponent },
    { path: 'add-contact', component: AddContactComponent },
    {
        path: '',
        redirectTo: '/contacts',
        pathMatch: 'full'
    }
];


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


