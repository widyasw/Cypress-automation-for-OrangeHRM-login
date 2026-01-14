describe('Quiz 3 - Login Test with Intercept', () => {

    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
  
    // 1. Login Success
    it('Login success with valid credential', () => {
      cy.intercept('POST', '**/auth/validate', {
        statusCode: 200,
        body: { success: true }
      }).as('loginSuccess')
  
      cy.get('input[name="username"]').type('Admin')
      cy.get('input[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()
  
      cy.wait('@loginSuccess')
    })
  
    // 2. Login Failed - Wrong Password
    it('Login failed with wrong password', () => {
      cy.intercept('POST', '**/auth/validate', {
        statusCode: 401,
        body: { error: 'Invalid credentials' }
      }).as('loginFailed')
  
      cy.get('input[name="username"]').type('Admin')
      cy.get('input[name="password"]').type('wrongpass')
      cy.get('button[type="submit"]').click()
  
      cy.wait('@loginFailed')
    })
  
    // 3. Login Failed - Empty Username
    it('Login failed when username is empty', () => {
      cy.intercept('POST', '**/auth/validate', {
        statusCode: 400,
        body: { error: 'Username required' }
      }).as('emptyUsername')
  
      cy.get('input[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()
  
      cy.wait('@emptyUsername')
    })
  
    // 4. Login Failed - Server Error
    it('Login failed due to server error', () => {
      cy.intercept('POST', '**/auth/validate', {
        statusCode: 500,
        body: { error: 'Internal Server Error' }
      }).as('serverError')
  
      cy.get('input[name="username"]').type('Admin')
      cy.get('input[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()
  
      cy.wait('@serverError')
    })
  
    // 5. Login with delayed response
    it('Login with delayed response', () => {
      cy.intercept('POST', '**/auth/validate', (req) => {
        req.reply((res) => {
          res.delay = 3000
          res.send({ success: true })
        })
      }).as('loginDelay')
  
      cy.get('input[name="username"]').type('Admin')
      cy.get('input[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()
  
      cy.wait('@loginDelay')
    })
  
  })
  