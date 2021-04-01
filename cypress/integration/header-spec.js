/// <reference types="cypress" />

describe('header test', () => {
	before(() => {
		cy.visit('/');
	});

	it('Test the header', () => {
		cy.contains('h1', 'Schedule Dashboard');
	});
});
