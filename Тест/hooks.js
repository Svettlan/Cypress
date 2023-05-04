before('',() => {
   cy.log('Global Before');
})
beforeEach('',() => {
   cy.log('Global Before Each');
})
after('',() => {
    cy.log ('Global After');
 });
   afterEach('',() => {
    cy.log ('Global After each');
 });
