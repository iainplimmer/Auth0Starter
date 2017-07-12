import { OauthtestPage } from './app.po';

describe('oauthtest App', () => {
  let page: OauthtestPage;

  beforeEach(() => {
    page = new OauthtestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
