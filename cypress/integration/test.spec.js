/// <reference types="cypress"/>
describe('Work with', () => {

  let userone
  let usertwo
  let userthr
  let userfour

    it('slider', () => {
        cy.visit('http://the-internet.herokuapp.com/horizontal_slider')
        cy.get('[type="range"]')
          .invoke("val", 1)
          .trigger("change")
        cy.get('#range').should('contain', 1)
        cy.get('[type="range"]')
          .invoke("val", 3)
          .trigger("change")
        cy.get('#range').should('contain', 3)
        cy.get('[type="range"]')
          .invoke("val", 5)
          .trigger("change")
          .click({force:true});
        cy.get('#range').should('contain', 5)
        
    })

    it('upload', () => {
      cy.visit('http://the-internet.herokuapp.com/upload')
      const file = 'images/bee-on-daisy.jpg'
      cy.get('#file-upload').attachFile(file)
      cy.get('#file-submit').click()
      cy.get('#uploaded-files').contains('bee-on-daisy.jpg')
    })

    it('status codes', () => {
      cy.visit('https://the-internet.herokuapp.com/status_codes')
      cy.request('https://the-internet.herokuapp.com/status_codes/200').then((response) => {
        expect(response.status).to.eq(200)}),
      cy.request('https://the-internet.herokuapp.com/status_codes/301').then((response) => {
        expect(response.status).to.eq(301)})
      /*cy.request('https://the-internet.herokuapp.com/status_codes/404').then((response) => {
          expect(response.status).to.eq(404)}),
      cy.request('https://the-internet.herokuapp.com/status_codes/500').then((response) => {
        expect(response.status).to.eq(500)})
      */
    })

    it ('table data', () => {
      cy.visit('https://the-internet.herokuapp.com/tables#delete')
      cy.get('#table1 > tbody > tr:nth-child(1) > td:nth-child(3)').then(($td) => {
        userone = $td.text();
        cy.log(userone);
      })
      
      cy.get('#table1 > tbody > tr:nth-child(2) > td:nth-child(3)').then(($td) => {
        usertwo = $td.text();
        cy.log(usertwo);
      })

      cy.get('#table1 > tbody > tr:nth-child(3) > td:nth-child(3)').then(($td) => {
        userthr = $td.text();
        cy.log(userthr);
      })

      cy.get('#table1 > tbody > tr:nth-child(4) > td:nth-child(3)').then(($td) => {
        userfour = $td.text();
        cy.log(userfour);
      })

    })

})