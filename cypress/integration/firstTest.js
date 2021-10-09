describe('My First Test', () => {
    it('Visits the Kitchen Sink "type"', () => {
      cy.visit('http://localhost:4200/')
    //   cy.contains('Reset code').click()
      
      //cy.contains('Search')
      // Get an input, type into it and verify that the value has been updated
    cy.get('input')
    .type('1234')
    .should('have.value', '1234')
    cy.contains('Guess it!').click()

    cy.get('.text-center').contains('XXXX')
    })
  })