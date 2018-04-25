import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList: number[] = [];
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.contactList = this.dataService.getAll('serverUrl goes here');
  }
  delete(id){
    //We can call service here
    const contactListArray = Object.values(this.contactList)
    contactListArray.splice(id, 1);
    localStorage.removeItem("contactData");
    localStorage.setItem("contactData", JSON.stringify(contactListArray));
    this.contactList = contactListArray;
    //console.log(this.contactList);
    //console.log(contactListArray);
  }
}
