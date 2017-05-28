import { BusinessAppPage } from './app.po';

describe('business-app App', () => {
  let page: BusinessAppPage;

  beforeEach(() => {
    page = new BusinessAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
