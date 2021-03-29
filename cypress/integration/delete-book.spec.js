import bookDelete from '../fixtures/books-to-delete.json'

let name = bookDelete.name;
let author = bookDelete.author;

describe("When the user wants to delete a book", () =>{

    before("", ()=>{

        cy.clearCookies();

        cy.visit("/");
        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.get("#name").type(name);
        cy.get("#author").type(author);
        cy.get('.ant-modal-footer > .ant-btn-primary > .ng-star-inserted').click();

        cy.get('table').contains('tr', name).invoke('index').then((i) =>{
            cy.get(`:nth-child(${i+1}) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input`).click();
        })
        cy.get('[nztype="default"]').click();

    })

    it("Then the book should not be listed", ()=>{
        
        cy.get('table').contains('td', name).should('not.exist');
    })

})