class LoginPage {

    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
    }
  
    inputUsername(username) {
      cy.get('input[name="username"]').clear().type(username)
    }
  
    inputPassword(password) {
      cy.get('input[name="password"]').clear().type(password)
    }
  
    clickLogin() {
      cy.get('button[type="submit"]').click()
    }
  
    login(username, password) {
      if (username) this.inputUsername(username)
      if (password) this.inputPassword(password)
      this.clickLogin()
    }
  }
  
  export default new LoginPage()
  