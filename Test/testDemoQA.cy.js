/// <reference types = "cypress" /> 

describe('first test', () =>{
    beforeEach(() => {
        cy.visit('https://demoqa.com/')                   
    })
    it('verify link1', () => {                                
        cy.get('div.category-cards .card-body h5').contains('Elements').click()  
        cy.get('#item-0 span').contains('Text Box').click()
        // cy.get('#userName').type('Maria')
    })
})

describe('second test', ()=> {
    const expectedMenuItemNames = [
        'Elements',
        'Forms',
        'Alerts, Frame & Windows',
        'Widgets',
        'Interactions',
        'Book Store Application'
    ];

    it('Verification menu item names', function (){
        cy.visit('https://demoqa.com/') 
        cy.get ('.card').should('have.length',6). each(($el, idx) => {
                expect  ($el.text()). to.be.equal (expectedMenuItemNames[idx]);    
        })
    })
})
