import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DataServiceService } from './services/data-service.service';

const appRoute: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'add-contact', 
    component: AddContactComponent 
  },
  { 
    path: 'contact-list', 
    component: ContactListComponent 
  },
  {
    path: 'edit-contact/:id',
    component: EditContactComponent
  },
  { 
    path: '**', 
    component: NotFoundComponent 
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddContactComponent,
    ContactListComponent,
    NotFoundComponent,
    HomeComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [DataServiceService, {provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
