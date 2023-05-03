describe('DemoQA Menu-tiles', () => {
const expectedMenuItemNames = [
  'Elements",
  'Forms', 
   'Alerts, Frame & Windows',
   'Widgets",
   'Interactions',
   'Book Store Application".
];
it("Verification menu item names - Variant 1', function () {
  cy.visit('https://demoga.com");                    //
  cy.get('.card')
    .should have.length', expectedMenuItemNames.length)
    .each((el, idx) => {
      cy.log(el) 
      expect(el.text()).to.be.equal(expectedMenuItemNames[idx]);
    });
  })
it("Verification menu item names - Variant 2', function () {
  cy.visit('https://demoga.com");
  cy.get('.card')
    .should have.length', expectedMenuItemNames.length)
    .then (($els) =>{
     cy.log(Cypress.$.makeArray($els).map($el => $el.innerText))
    });
  })
})
