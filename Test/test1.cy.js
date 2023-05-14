/// <reference types = "cypress" /> 

describe('my_test', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form');                  
    })
    it('filling the form', () => {                                
        cy.get('#firstName').type('Svetlan') 
        cy.get('#lastName').type('Tr');
        cy.get('#userEmail').type('test@mail.ru');
        cy.get('#gender-radio-1').check({force: true})
        cy.get('#userNumber').type('1234567890')
        
    })
})
