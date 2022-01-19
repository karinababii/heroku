describe('Work with', () => {

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
})
