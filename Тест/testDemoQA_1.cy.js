// Как получить информацию от группы элементов
describe('DemoQA Menu-tiles', () => {
const expectedMenuItemNames = [    // Массив из тестовой докупентации / тест кейса
  'Elements",
  'Forms', 
   'Alerts, Frame & Windows',
   'Widgets",
   'Interactions',
   'Book Store Application".
];
  before('',() => {
    cy.log ('before');
 });
  beforeEach('',() => {
    cy.log ('before Each');
 });
it("Verification menu item names - Variant 1', function () {
  cy.visit('https://demoga.com");                    // зайти на сайт с адресом
  cy.get('.card')                                    // найти .card
    .should have.length', expectedMenuItemNames.length) //
    .each((el, idx) => {
      cy.log(el) 
      expect(el.text()).to.be.equal(expectedMenuItemNames[idx]);
    });
  })
it("Verification menu item names - Variant 2', function () {    
  cy.visit('https://demoga.com");
  cy.get('.card')
    .should have.length', expectedMenuItemNames.length)     // сравнение массивов библиотекой чай
    .then (($els) =>{
     return Cypress.$.makeArray($els).map($el => $el.innerText)
    });
     //.should('deep.equal', expectedMenuItemNames)
  });
})
