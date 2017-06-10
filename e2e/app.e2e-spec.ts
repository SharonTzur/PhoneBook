import { PhonebookAppPage } from './app.po';

describe('phonebook-app App', () => {
  let page: PhonebookAppPage;

  beforeEach(() => {
    page = new PhonebookAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
