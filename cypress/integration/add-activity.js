/// <reference types="cypress" />

describe('Visit', () => {
	beforeEach(() => {
		cy.visit('/add');
	});
	it('Add Activity', () => {
		cy.intercept(
			'POST',
			'https://react-dashboard-task-e9408-default-rtdb.firebaseio.com/activities.json',
			{
				body: {
					startDate: '2021-03-30T01:00',
					endDate: '2021-03-30T03:00',
					name: 'sleep'
				},
				status: 200
			}
		).as('post');

		cy.get('#startDate').type('2021-03-30T01:00');
		cy.get('#endDate').type('2021-03-30T03:00');
		cy.get('#name').select('sleep');
		cy.get('.submit-btn').click();

		cy.wait('@post');

		cy.seedAndVisit();
	});
});
