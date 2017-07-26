import { EncuestaWebAppPage } from './app.po';

describe('encuesta-web-app App', () => {
  let page: EncuestaWebAppPage;

  beforeEach(() => {
    page = new EncuestaWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
