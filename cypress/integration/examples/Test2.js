/// reference types= "Cypress" />
describe('Test suite 2',function(){

    it('Test case 1',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option3','option2'])

        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')
       
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($ele1,index,$list) => {
            let ct = $ele1.text()
            if(ct == "India"){
                $ele1.click()
            }
        })

       // hide elements
        cy.get('#autocomplete').should('have.value','India')
        cy.get('#displayed-text').should("be.visible")
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
    })
})