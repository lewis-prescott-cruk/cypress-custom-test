export const custom = () => {
    cy.log("custom command")
}

Cypress.Commands.add('custom', custom)