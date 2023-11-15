const reqURL = "https://automationpanda.com/2021/12/29/want-to-practice-test-automation-try-these-demo-sites/"
const reqTitle = 'Speaking | Automation Panda'
const keynoteStr = 'Keynote Addresses'
beforeEach(() => {
    cy.visit(reqURL)
    cy.wait(1000)
})

it('TC_1_VerifyUrl', () => {
    cy.url().then((url) => {
        cy.log('Current URL:', url);
        expect(reqURL).to.eq(url)
    });
})

it('TC_2_VerifyTitle', () => {
    cy.wait(2000)
    cy.get('#menu-item-10593 > a').click()
    cy.title().should('eq', reqTitle);
})
it('TC_3_Verify KeyNoteAddresses', () => {

    cy.get('#menu-item-10593 > a').click()
    cy.wait(2000)
    cy.get('.wp-block-heading:nth-of-type(1)').then(($ele) => {
        const textdisplay = $ele.text()
        cy.log(textdisplay)
        expect(textdisplay).to.eq(keynoteStr)
    })
})

//


