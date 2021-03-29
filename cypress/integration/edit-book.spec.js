import bookEdit from '../fixtures/book-edit.json'

let name = bookEdit.name;
let author = bookEdit.author;
describe ( 'When the user wants to edit a book', ()=>{

    before (()=>{
        cy.visit('/');  
        cy.clearCookies();
        cy.contains('10 / page').click();
        cy.contains('50 / page').click();

        cy.get('table').contains('tr', name).invoke('index').then((i) =>{
            cy.get(`.ant-table-tbody > :nth-child(${i+1}) > :nth-child(4)`).click();
        })
    });

    it("Then the book should be edit name", () =>{
        cy.get('#name').clear();
        name="PRUEBA";
        cy.get('#name').type(name);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.wait(4000);
    });

    it("Then the book should be edit author", () =>{

        cy.get('table').contains('tr', name).invoke('index').then((i) =>{
            cy.get(`:nth-child(${i+1}) > :nth-child(4) > .ant-btn`).click();
        })
        name = bookEdit.name;
        cy.get('#name').clear();
        cy.get('#name').type(name);
        cy.get('#author').clear();
        author="PRUEBA 2";
        cy.get('#author').type(author);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
    });

}); 