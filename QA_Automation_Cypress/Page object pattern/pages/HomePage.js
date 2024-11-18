export class HomePage {
    
    validateLogout() {
        cy.get('#open-navigation-menu-mobile').should('be.visible').click();
    cy.get(':nth-child(12) > .next-bve2vl').click();
    }
}
