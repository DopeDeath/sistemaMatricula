import { SistemaMatriculaPage } from './app.po';

describe('sistema-matricula App', () => {
  let page: SistemaMatriculaPage;

  beforeEach(() => {
    page = new SistemaMatriculaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to semdf!!');
  });
});
