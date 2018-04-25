import { AppPage } from './app.po';

describe('evolenthealth App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Welcome to Contact detail app!');
  });

  it('should display contact form', () => {
    page.navigateToAddContact();
    expect(page.getAddContactFormTitle()).toEqual('Contact Form');
  });

  it('should display Contact list', () => {
    page.navigateToContactList();
    expect(page.getContactListTitle()).toEqual('Contact list');
  });
});
