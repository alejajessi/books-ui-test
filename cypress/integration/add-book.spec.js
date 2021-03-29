import bookNew from '../fixtures/book-new.json'

describe ( 'When the user wants to add book', ()=>{

    before (()=>{
        cy.visit('/');  
        cy.clearCookies();
        cy.contains('10 / page').click();
        cy.contains('50 / page').click();    
    });

    it("Then the book should be listed with the right author", () =>{
        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.get('#name').type(bookNew.name);
        cy.get('#author').type(bookNew.author);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.get('table').contains('td', bookNew.name).should('be.visible');
        cy.get('table').contains('td', bookNew.author).should('be.visible');
    });

    it("But only type author, then the  book shouldn't possible click in save button", () =>{
        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.get('#author').type(bookNew.author);
        cy.get('.ant-modal-footer > .ant-btn-primary').should('be.disabled');
    });

    it("But only type name, then the  book shouldn't possible click in save button", () =>{
        cy.get('#author').clear();
        cy.get('#name').type(bookNew.name);
        cy.get('.ant-modal-footer > .ant-btn-primary').should('be.disabled');
    });

}); 