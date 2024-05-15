describe('Test suite for test case 3',function(){

    it('Test case for webtable', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('table.table-display tbody tr').find('td').each( ($ele1,index,$list) => {
            
            if($ele1.text() ==="WebServices / REST API Testing with SoapUI"){

                cy.get($ele1).eq(index).next().then(function(price){
                    const tt = price.text()
                    expect(tt).to.equal('35')
                })
            
            }
           
        })

    })

    it('Test case for window alert ', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("input#alertbtn").click()
        cy.get("input#confirmbtn").click()
        cy.on('window:alert',(str) => {
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })
    })

    it('Test case for windows tab',() =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.get('#opentab').invoke('removeAttr','target').click()
      //  cy.get('#opentab').click()
       cy.origin('https://www.qaclickacademy.com',()=>{
        cy.wait(10000)
            cy.get('#navbarSupportedContent a[href*="contact"]').click()
        })
        
    })

})