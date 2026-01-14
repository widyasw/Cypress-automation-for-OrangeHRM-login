import LoginPage from '../../pages/loginPage'
import loginData from '../../fixtures/pom/loginData.json'

describe('Login Automation with POM', () => {

  beforeEach(() => {
    LoginPage.visit()
  })

  // 1. Login Success
  it('Login success with valid credentials', () => {
    LoginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    )
  })

  // 2. Login failed - wrong password
  it('Login failed with wrong password', () => {
    LoginPage.login(
      loginData.invalidPassword.username,
      loginData.invalidPassword.password
    )
  })

  // 3. Login failed - empty username
  it('Login failed with empty username', () => {
    LoginPage.login(
      loginData.emptyUsername.username,
      loginData.emptyUsername.password
    )
  })

  // 4. Login failed - empty password
  it('Login failed with empty password', () => {
    LoginPage.login(
      loginData.emptyPassword.username,
      loginData.emptyPassword.password
    )
  })

  // 5. Login failed - both fields empty
  it('Login failed when username and password empty', () => {
    LoginPage.login('', '')
  })

})
