import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../contact-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
  providers: [DataServiceService]
})
export class AddContactComponent implements OnInit {
  private contact : ContactModel;
  message: string = '';
  constructor(private dataService: DataServiceService){
    this.contact = new ContactModel({
      firstname: '',
      lastname: '',
      emailaddress: '',
      phonenumber: '',
      status: ''
      });
  }
  ngOnInit() {
  }
  onFormSubmit({ value}: { value: ContactModel }, valid: NgForm) {
    this.contact = value;
    //console.log(this.contact);
    this.message = this.dataService.addData(this.contact, 'serverUrl');
    //console.log(this.message);
    valid.reset();
    this.contact = new ContactModel({
      firstname: '',
      lastname: '',
      emailaddress: '',
      phonenumber: '',
      status: ''
      });
}
}
