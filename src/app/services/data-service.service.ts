import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {
  dataArr: number[] = []; 
  constructor(private http: Http) { }
  getAll(url) {
    /*return this.http.get(url)
    .map(response => response.json());*/
    
    if (typeof(Storage) !== "undefined") {
        if(localStorage.getItem("contactData") !== null){
          return JSON.parse(localStorage.getItem("contactData"));
        }
    }    
  }

  addData(resource, url) {
    //commented code is used when resfull service is available
    /*let headers = new Headers({ 'Content-Type': 'application/json'});

  let options = new RequestOptions({ headers: headers });
    return this.http.post(url, JSON.stringify(resource), options)
        .map(response => response.json());*/

      if (typeof(Storage) !== "undefined") {
        if(localStorage.getItem("contactData") === null){
          let id = 0;
          this.dataArr[id] = resource;
          localStorage.setItem("contactData", JSON.stringify(this.dataArr));
          }else{
          this.dataArr = JSON.parse(localStorage.getItem("contactData"));
          let id = this.dataArr.length;
          this.dataArr[id] = resource;
          localStorage.setItem("contactData", JSON.stringify(this.dataArr));
          return "Data inserted successfully!";
        }
      } else {
          return "Sorry! No Web Storage support..";
      }      
}

delete(url, id){
  return this.http.delete(url + '/' + id).map(response => response.json());
}

edit(contactData, id, url){
  //Here we can use server service
  this.dataArr = JSON.parse(localStorage.getItem("contactData"));
  this.dataArr[id] = contactData;
  localStorage.setItem("contactData", JSON.stringify(this.dataArr));
 return 'Data updated successfully!';
}

}
