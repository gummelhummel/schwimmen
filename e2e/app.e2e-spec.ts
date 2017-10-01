import { SchwimmenPage } from './app.po';

describe('schwimmen App', () => {
  let page: SchwimmenPage;

  beforeEach(() => {
    page = new SchwimmenPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
