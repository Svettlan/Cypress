//-----‐-------- ОБЩИЕ МЕТОДЫ Common methods ----------------

// cy.visit(' url')                 - посетить- сайт/страницу
// cy.get('css selector')           - получить- с помощью css селектора
// cy.contains('text')              - содержит-
// cy.find('css selector')          - находить- Получить дочерние элементы DOM определенного селектора
// cy.url()                         - Выдает текущий URL в виде строки
// cy.title()                       - Выдает заголовок документа в виде строки
// cy.pause()                       - пауза
// cy.log(массаж) Распечатать сообщение в журнале команда Cypress

//---‐--------------- ОБЩИЕ УТВЕРЖДЕНИЯ Common Assertyons --------------------

// ДЛИНА - length  -  cy.get('div.card-body h5').should('have.length', 6)
// КЛАСС -  class -  cy.get('#demo-tab-more').should('have.class', 'disabled')
// ЦЕНИТЬ - value - cy.get('#oldSelect Menu').select('Purple').should('have.value', '4')
// ТЕКСТОВОЕ СОДЕРЖИМОЕ - text content - cy.get('div.main-header').should('have.text', 'Elements')

// cy.get('div.main-header').should('include.text', 'Element')
// cy.get('div.main-header').should('contain', 'Element') 

// ВИДИМОСТЬ - Visibility - cy.get('header a img'//(заголовок изображения)//).should('be.visible')
// СУЩЕСТВОВАНИЕ - Existence - cy.get('#result').shound('exist') -  cy.get('#результат').должен('существовать')
// АТРИБУТ Attribute -  .should('have.attr', 'placeholder', 'Full Name') - .should('have.attr', 'заполнитель', 'Полное имя')

//----------------------- КОМАНДЫ ДЕЙСТВИЙ Action commands -----------------------

// .click()     - клик   
// .dblclick()  - 
// .rightclick()  - .правый клик() 
// .type()  - тип()
// .clear() - 
// .trigger()
// .check() / .uncheck() - проверить/снять отметку - Этот элемент должен быть <input> с флажком типа или переключателем- чекбокс или инпут
// .select() Этот элемент должен иметь тег select

// --------------------------- ПРИНУЖДЕНИЕ- Forcing ‐--------------------------

// Вы можете передать { force: true } большинству команд действий => принудительно запустить событие элемента

// Пример:
// cy.get('button').click({force: true})
// cy.get('кнопка').click({force: true})

// принудительно активировать щелчок и все последующие события, даже если этот элемент не считается «действующим»
