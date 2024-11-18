
Cypress.Commands.add('login', (email, password) => {
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});

describe('Testy logowania i wylogowywania', () => {
    it("Test 2 - Logowanie testowyqa@qa.team i wylogowanie", () => {
      cy.visit("https://www.edu.goit.global/account/login");
      cy.login("testowyqa@qa.team", "QA!automation-1");
      cy.get('#open-navigation-menu-mobile').click();
      cy.get(':nth-child(8) > .next-bve2vl').click();
      cy.get('[data-testid="FeedbackModal__textarea"]').type("Polecam 10/10");  
      cy.get('.e13jv6of0 > .next-1jphuq5').click();
      cy.get(':nth-child(8) > .next-bve2vl').click();
      cy.url().should('include', '/account/login');
    });
  });