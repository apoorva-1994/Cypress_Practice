describe('My first test suite',function(){

  it('My first test case',function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.get('div.product').should("have.length",5)
    cy.wait(2000)
  //  cy.get(':nth-child(3)>.product-action>button').click()
    cy.get('.products').find('.product').each(($ele,index,$list)=>{
     let veg_name =  $ele.find('h4.product-name').text()
     console.log(veg_name)
     if(veg_name.includes("Carrot")){
       cy.wrap($ele.find('button')).click()
     }  
    })
    cy.get('.cart-icon > img').click()
    cy.get('button').contains("PROCEED TO CHECKOUT").click()
    cy.get('button').contains("Place Order").click()
  })
})