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
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('seedAndVisit', () => {
	cy.intercept(
		'GET',
		'https://react-dashboard-task-e9408-default-rtdb.firebaseio.com/activities.json',
		{ fixture: 'activities.json' }
	).as('load');

	cy.visit('/');

	/* 
		Canvas should not be exist before picking a date
	*/
	cy.get('.chartjs-render-monitor').should('not.exist');

	cy.get('.daily-activities-date').type('2021-03-30');
	cy.get('[name="start"]').type('2021-03-25');
	cy.get('[name="end"]').type('2021-03-31');
	cy.get('.activities li').should('have.length', 6);

	/* 
		Canvas should be exist after providing dummy data
		and picking their date
	*/
	cy.get('.chartjs-render-monitor').should('exist');
});
