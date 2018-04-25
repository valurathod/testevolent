export class ContactModel {
    firstname : string;
    lastname : string;
    emailaddress : string;
    phonenumber : number;
    status : string;
    constructor(values: Object = {}) {
        /*Constructor initialization*/
        Object.assign(this, values);
    }
}
