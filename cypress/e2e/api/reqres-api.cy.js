describe('Reqres API Automation using Cypress', () => {

    const baseUrl = 'https://reqres.in/api'
    const apiKey = Cypress.env('API_KEY')
  
    const headers = {
      'x-api-key': apiKey,
      'Content-Type': 'application/json'
    }
  
    // GET
  
    it('GET - List Users', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/users?page=1`,
        headers
      }).then(res => {
        expect(res.status).to.eq(200)
      })
    })
  
    it('GET - List Users 2', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/users?page=2`,
        headers
      }).then(res => {
        expect(res.status).to.eq(200)
      })
    })
  
    it('GET - Single User - Valid', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/users/2`,
        headers
      }).then(res => {
        expect(res.status).to.eq(200)
        expect(res.body.data.id).to.eq(2)
      })
    })
  
    it('GET - Single User - Not Found', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/users/23`,
        headers,
        failOnStatusCode: false
      }).then(res => {
        expect(res.status).to.eq(404)
      })
    })
  
    it('GET - Delayed Response', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/users?delay=3`,
        headers
      }).then(res => {
        expect(res.status).to.eq(200)
      })
    })
  
    // POST
  
    it('POST - Create User', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/users`,
        headers,
        body: {
          name: 'Widya',
          job: 'QA Engineer'
        }
      }).then(res => {
        expect(res.status).to.eq(201)
      })
    })
  
    // PUT
  
    it('PUT - Update User', () => {
      cy.request({
        method: 'PUT',
        url: `${baseUrl}/users/2`,
        headers,
        body: {
          name: 'Widya',
          job: 'Senior QA'
        }
      }).then(res => {
        expect(res.status).to.eq(200)
      })
    })
  
    // PATCH
  
    it('PATCH - Update User - sebagian data', () => {
      cy.request({
        method: 'PATCH',
        url: `${baseUrl}/users/2`,
        headers,
        body: {
          job: 'Lead QA'
        }
      }).then(res => {
        expect(res.status).to.eq(200)
      })
    })
  
    // DELETE
  
    it('DELETE - Delete User', () => {
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/users/2`,
        headers
      }).then(res => {
        expect(res.status).to.eq(204)
      })
    })
  
    // REGISTER
  
    it('POST - Register - Success', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/register`,
        headers,
        body: {
          email: 'eve.holt@reqres.in',
          password: 'pistol'
        }
      }).then(res => {
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property('token')
      })
    })
  
    it('POST - Register - Not Success', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/register`,
        headers,
        failOnStatusCode: false,
        body: {
          email: 'sydney@fife'
        }
      }).then(res => {
        expect(res.status).to.eq(400)
      })
    })
  
    // LOGIN
  
    it('POST - Login - Success', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/login`,
        headers,
        body: {
          email: 'eve.holt@reqres.in',
          password: 'cityslicka'
        }
      }).then(res => {
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property('token')
      })
    })
  
    it('POST - Login - Not Found', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/login`,
        headers,
        failOnStatusCode: false,
        body: {
          email: 'notfound@test.com',
          password: 'random'
        }
      }).then(res => {
        expect(res.status).to.eq(400)
      })
    })
  
    it('POST - Login tanpa password', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/login`,
        headers,
        failOnStatusCode: false,
        body: {
          email: 'peter@klaven'
        }
      }).then(res => {
        expect(res.status).to.eq(400)
      })
    })
  
  })
  