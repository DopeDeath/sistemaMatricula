import { browser, by, element } from 'protractor';

export class SistemaMatriculaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('semdf-root h1')).getText();
  }
}
