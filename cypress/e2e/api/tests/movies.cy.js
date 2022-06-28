/// <reference types="Cypress" />
describe('Movies API Tests', function () {
	let access_token = ''
	before('Generate Token -Signing Up', () => {
		cy.request({
			method: 'POST',
			url: `https://the-one-api.dev/auth/login?email=kevinse@hotmail.com&password=Super`,
		}).then(response => {
			expect(response.status).to.eql(200)
			access_token = response.body.access_token
		})
	})
	it('GET --- All the Movies (Inclding the hobbit trilogy)', () => {
		cy.request({
			method: 'GET',
			url: 'https://the-one-api.dev/v2/movie',
			headers: {
				Authorization: 'Bearer ' + access_token,
			},
		}).then(function (response) {
			expect(response.status).to.eq(200)
			expect(response.body.docs[0]).that.includes.all.keys([
				'_id',
				'name',
				'runtimeInMinutes',
				'budgetInMillions',
				'boxOfficeRevenueInMillions',
				'academyAwardNominations',
				'academyAwardWins',
				'rottenTomatoesScore',
			])
		})
	})
})
