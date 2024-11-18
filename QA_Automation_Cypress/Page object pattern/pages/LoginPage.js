export class LoginPage {
    navigateLogin() {
        cy.visit("https://www.edu.goit.global/account/login");
    }

    validateLogin() {
        cy.get('#user_email').type("user888@gmail.com");
        cy.get('#user_password').type("1234567890");
        cy.get('.eckniwg2').click();
    }
}
