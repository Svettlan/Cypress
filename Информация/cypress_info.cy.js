// ----------------Подсказка - //
/// <reference types = "cypress" />    

// ----------------------------- Комады для  cypress ---------------------------
// npm init                        - инициализирует запуск проекта, создается файл package.json
// npm install cypress --save-dev  - 
// npx cypress open                - запуск тестов
// --------------------------------- ТЕСТЫ ------------------------------------
describe('first test', () =>{
    beforeEach(() => {
        cy.visit('https://example.cypress.io/')                    // Перейти на страницу - вынесли в общее для всех тестов
    })
    it.only ('verify link', () => {                                // Если нужно пройти только один тест - only (it.only)
        //cy.visit('https://example.cypress.io/')                  // Перейти на страницу
        cy.contains ('next').click()                               // Найти ссылку, кот. содержит (contain) текст 'next' и кликнуть на нее (click())
        cy.url().should('include', '/commands/traversal')          // Найти url, кот. должен включать в себя ('include') часть ссылки '/commands/traversal'
        cy.get('div.container h1').should('have.text', 'Traversal')// Обратиться к элементу через локатор(CSS) 'div.container h1'и проверить текст заголовка 'Traversal'
    })


    it.skip ('verify link2', () => {                               // Если нужно пропустить тест - .skip (it.skip)
        //cy.visit('https://example.cypress.io/')                   
        cy.contains ('assert').click()                               
        //cy.url().should('include', '/commands/assertions')      // Завалит тест, т.к. не соответствие заголовку    
    })

    it ('verify link2', () => {
        //cy.visit('https://example.cypress.io/')                          
        // Зайти на данную страницу
        cy.get('a[href="/commands/actions"]').contains('select').click() // Перейти по ссылке (href=), а именно (contains) 'select' и кликнуть на нее                            
        cy.url().should('include', '/commands/actions')                  // Найти url, включ.в себя '/commands/actions'
    })
})
