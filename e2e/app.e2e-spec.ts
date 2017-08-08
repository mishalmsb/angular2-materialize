import { Angular2MaterializePage } from './app.po';

describe('angular2-materialize App', () => {
  let page: Angular2MaterializePage;

  beforeEach(() => {
    page = new Angular2MaterializePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
