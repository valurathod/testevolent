import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../contact-model';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contactList: number[] = [];
  private contact : ContactModel;
  message: string = '';
  id: number;
  constructor(private dataService: DataServiceService, private route: ActivatedRoute){
  }
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.contactList = this.dataService.getAll('serverUrl goes here');
    this.contact = new ContactModel({
      firstname: this.contactList[this.id]['firstname'],
      lastname: this.contactList[this.id]['lastname'],
      emailaddress: this.contactList[this.id]['emailaddress'],
      phonenumber: this.contactList[this.id]['phonenumber'],
      status: this.contactList[this.id]['status']
      });

  }
  onFormSubmit({ value}: { value: ContactModel }, valid: NgForm, id) {
    this.contact = value;
    this.message = this.dataService.edit(this.contact, id, 'serverUrl');
}
}
