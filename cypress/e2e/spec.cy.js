describe('Automation Panda', () => {


  before(() => {
    cy.visit('https://automationpanda.com/2021/12/29/want-to-practice-test-automation-try-these-demo-sites/');
    cy.log("Launch the website in chrome browser")
  })

  it('verify the header ', () => {
    cy.get('#menu-item-10593 > a').click();
    cy.url().should('contain', 'https://automationpanda.com/speaking/');
    cy.url().should('contain', 'https://widgets.wp.com/likes/master.html');
    cy.url().should('contain', 'https://syndication.twitter.com/srv/timeline-profile/screen-name/AutomationPanda');
    cy.get('.entry-title').then(function(e) {
      const t = e.text()
      expect(t).to.contain('SPEAKING')
    });

    cy.get('.wp-block-heading:nth-child(2)').then(function(e) {
      const y = e.text()
      expect(y).to.containn('Keynote Addresses')
    });

  })
})