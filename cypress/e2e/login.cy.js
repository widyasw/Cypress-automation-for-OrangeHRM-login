describe('OrangeHRM Login Feature (TC based on spreadsheet)', () => {

    beforeEach(() => {
      cy.visit('/web/index.php/auth/login')
    })
  
    it('TC-01 Login dengan data valid', () => {
      cy.fixture('loginData').then(data => {
        cy.login(data.valid.username, data.valid.password)
  
        cy.url().should('include', '/dashboard')
        cy.get('h6').should('contain', 'Dashboard')
      })
    })
  
    it('TC-02 Sistem menolak login karena data tidak valid', () => {
      cy.fixture('loginData').then(data => {
        cy.login(data.invalid.username, data.invalid.password)
  
        cy.get('.oxd-alert-content-text')
          .should('be.visible')
          .and('contain', 'Invalid credentials')
      })
    })
  
    it('TC-03 Login dengan username valid & password kosong', () => {
      cy.fixture('loginData').then(data => {
        cy.login(data.valid.username, '')
  
        cy.get('.oxd-input-group__message')
          .should('be.visible')
          .and('contain', 'Required')
      })
    })
  
    it('TC-04 Login dengan username kosong & password valid', () => {
      cy.fixture('loginData').then(data => {
        cy.login('', data.valid.password)
  
        cy.get('.oxd-input-group__message')
          .should('be.visible')
          .and('contain', 'Required')
      })
    })
  
    it('TC-05 Login dengan username & password kosong', () => {
      cy.login('', '')
  
      cy.get('.oxd-input-group__message')
        .should('have.length.at.least', 2)
        .and('contain', 'Required')
    })
  
  })
  