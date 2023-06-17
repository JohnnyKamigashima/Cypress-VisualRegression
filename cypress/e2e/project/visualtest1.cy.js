describe('Visual testing login page', () => {
    it('visual testing- capturing base visual', () => {

        if (Cypress.env('type') == null) {
            Cypress.env('type', 'base')
        }
        cy.visit('/index_v2.html')
        cy.scrollTo('bottom', { ensureScrollable: false });
        cy.compareSnapshot('login-desktop', {
            capture: 'fullPage',
            errorThreshold: 0.01,
        });
        cy.viewport('ipad-2', 'portrait')
        cy.wait(200)
        cy.scrollTo(0, 0, { ensureScrollable: false });
        cy.wait(100)
        cy.scrollTo('bottom', { ensureScrollable: false });
        cy.compareSnapshot('login-ipad-2', {
            capture: 'fullPage',
            errorThreshold: 0.01,
        });
    });
});