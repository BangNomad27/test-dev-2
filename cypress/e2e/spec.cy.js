/// <reference types="Cypress" />

describe('My Project - Rest API', () => {
  // test 1
  // it('Verify GET method', () => {
  //   cy.request('GET', 'https://dummy.restapiexample.com/api/v1/employees').then((respon) => {
  //     expect(respon).to.have.property('status', 200)
  //     expect(respon.body.data).to.have.length(24)
  //   })
  // })

  // test 2
  it('Rest API Dummy', () => {
    const data = {
      "name": "Muhammad Naufal Thufailah",
      "job": "Front-End Developer",
      "id": "501" // random id
    }

    cy.request('GET', 'https://reqres.in/api/users?page=2')
    .then((respon) => {
      expect(respon).to.have.property('status', 200)
    })

    cy.request('POST', 'https://reqres.in/api/users', data)

    cy.request('PUT', 'https://reqres.in/api/users/2', data)
    cy.request('DELETE', 'https://reqres.in/api/users/2')
  })
})

// note:
// untuk buka Cypress = npm run cy