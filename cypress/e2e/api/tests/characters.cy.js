/// <reference types="Cypress" />
describe('Characters API Tests with Cypress', function () {
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
	it('GET --- All the characters', () => {
		cy.request({
			method: 'GET',
			url: 'https://the-one-api.dev/v2/character',
			headers: {
				Authorization: 'Bearer ' + access_token,
			},
		}).then(function (response) {
			expect(response.status).to.eq(200)
			expect(response.body.docs[0]).that.includes.all.keys([
				'_id',
				'death',
				'birth',
				'hair',
				'realm',
				'spouse',
				'gender',
				'name',
			])
		})
	})
	it('GET --- Characters by ID', () => {
		const id = '5cd99d4bde30eff6ebccfbe6'
		cy.request({
			method: 'GET',
			url: 'https://the-one-api.dev/v2/character/' + id,
			headers: {
				Authorization: 'Bearer ' + access_token,
			},
		}).then(function (response) {
			expect(response.status).to.eq(200)
			expect(response.body.docs[0]).that.includes.all.keys([
				'_id',
				'death',
				'birth',
				'hair',
				'realm',
				'spouse',
				'gender',
				'name',
			])
			expect(response.body.docs[0].name).to.equal('Aragorn II Elessar')
		})
	})
	it('GET --- Characters Quotes by ID', () => {
		const id = '5cd99d4bde30eff6ebccfbe6'
		cy.request({
			method: 'GET',
			url: 'https://the-one-api.dev/v2/character/' + id + '/quote',
			headers: {
				Authorization: 'Bearer ' + access_token,
			},
		}).then(function (response) {
			expect(response.status).to.eq(200)
			expect(response.body.total).to.equal(214)
		})
	})
})
