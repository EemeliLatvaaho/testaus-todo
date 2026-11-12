describe('Todo app', () => {
  it('creates a task in the application', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.reload();

    cy.get('#topic').type('Test the todo app');
    cy.get('#description').type('Created by Cypress');
    cy.get('#task-form').submit();

    cy.get('#task-list').should('contain.text', 'Test the todo app');
    cy.get('#task-list').should('contain.text', 'Created by Cypress');
  });
});