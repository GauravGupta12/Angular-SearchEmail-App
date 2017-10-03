import { SearchEmailAppPage } from './app.po';

describe('search-email-app App', () => {
  let page: SearchEmailAppPage;

  beforeEach(() => {
    page = new SearchEmailAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
