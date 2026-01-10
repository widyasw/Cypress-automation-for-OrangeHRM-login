Cypress.Commands.add('login', (username, password) => {
  if (username !== '') {
    cy.get('input[name="username"]').clear().type(username)
  }

  if (password !== '') {
    cy.get('input[name="password"]').clear().type(password)
  }

  cy.get('button[type="submit"]').click()
})
