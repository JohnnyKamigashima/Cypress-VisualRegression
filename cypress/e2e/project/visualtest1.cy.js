describe('Visual testing login page', () => {
    it('visual testing- capturing base visual', () => {
        // cy.visit('/index_v2.html')--using this url when executing 'npm run test'
        cy.visit('/index_v2.html')
        cy.compareSnapshot('login-desktop', {
            capture: 'fullPage',
            errorThreshold: 0.01,
        });
        cy.viewport('ipad-2', 'portrait')
        cy.wait(200)
        cy.compareSnapshot('login-ipad-2', {
            capture: 'fullPage',
            errorThreshold: 0.01,
        });
    });
});