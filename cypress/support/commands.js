// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
Cypress.Commands.add('get_token', () => {
	cy.request({
		method: 'POST',
		url: `https://the-one-api.dev/auth/login?email=kevinse_92@hotmail.com&password=Zaca%23kse2200`,
	}).then(response => {
		expect(response.status).to.eql(200)
		localStorage.setItem('token', response.body.access_token)
		expect(localStorage.getItem('token')).not.null
		cy.log(localStorage.getItem('token'))
	})
})
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
