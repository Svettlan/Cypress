/// <reference types = "cypress" />  
// Как получить информацию от группы элементов УРОК 10.2
describe('DemoQA Menu-titles', () => {        // Нвзвание группы тестов, безымянная ф-ция  () => 
  const expectedMenuItemNames = [             // Массив из тестовой докупентации / тест кейса
      'Elements',
      'Forms', 
      'Alerts, Frame & Windows',
      'Widgets',
      'Interactions',
      'Book Store Application'
  ];
    before('',() => {
      cy.log ('before');
   });
    beforeEach('',() => {
      cy.log ('before Each');
   });
  it.skip('Verification menu item names - Variant 1', function () {     // .skip - пропустить тест  , Название тестов (Verification menu item names - Variant 1)
    cy.visit('https://demoqa.com');                                     // зайти на сайт с адресом
    cy.get('.card')                                                     // найти .card -локатор
      .should ('have.length', expectedMenuItemNames.length)             // сравнить - количество элементов должно соответствовать длине массива
      .each(($el, idx) => {                                             // метод .each - перебор элементов
        cy.log($el) 
        expect($el.text()).to.be.equal(expectedMenuItemNames[idx]);     // сравнить ожидаемый рез-т $el.text() с фактическим,т.е.название кажд.эл.на сайте с эл.в массиве
      });
    })
   xit('Verification menu item names - Variant 2', function () {        // x (xit) - пропустить тест
    cy.visit('https://demoqa.com');                                     // зайти на сайт с адресом
    cy.get('.card')                                                     // найти .card -локатор
      .should ('have.length', expectedMenuItemNames.length)             // сравнение массивов (библиотекой чай)  (should - должен)
      .then (($els) =>{                                                 // берем наши эдементы $els
      return Cypress.$.makeArray($els).map($el => $el.innerText)
        // expect(actual).to.be.deep.equal(expectedMenuItemNames)       // сравнение (другой способ) актуального результата с массивом    
      });
       //.should('deep.equal', expectedMenuItemNames)
    
  //   after('',() => {
  //    cy.log ('After');
  // });
  //   afterEach('',() => {
  //    cy.log ('After each');
  // });
  })
  xit('Verification menu item names - Variant 3', function () {     // x (xit) - пропустить тест
    cy.visit('https://demoqa.com/');                               // зайти на сайт с адресом
    cy.get('.card')                                                // найти .card -локатор
      .should (have.length, expectedMenuItemNames.length )         // сравнение массивов (библиотекой чай)
      .then (($els) =>{
       return Cypress._.map($els, 'innerText')                    // возвращаемся (return) в Cypress      
      })
      .should('deep.equal', expectedMenuItemNames)
    });

// ------------------  Проверка input с плейсхолдером -----------------------
    it.only('Form filling',() => {
      cy.visit('https://demoqa.com/'); 
      // cy.visit('/');
      cy.get('.card:nth-child(2)').click();                
      cy.get('.element-group:nth-child(2)>div').click();
      cy.get('#firstName')
      .should('have.text', '')
      .type('Svetlan{enter}')
      .should('have.value', 'Svetlan')
      //--------------- Проверка соответствия цвета ----------------------
      // cy.get('#submit').click();
      // cy.get('#firstName')
      .should('have.css', 'border-color', 'rgb(40, 167, 69)');
    })

  })
