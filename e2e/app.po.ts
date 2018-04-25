import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToAddContact() {
    return browser.get('/add-contact');
  }

  navigateToContactList() {
    return browser.get('/contact-list');
  }

  getTitle() {
    return element(by.css('app-home h3')).getText();
  }
  getAddContactFormTitle(){
    return element(by.css('app-add-contact h3')).getText();
  }
  getContactListTitle(){
    return element(by.css('app-contact-list h3')).getText();
  }
}
