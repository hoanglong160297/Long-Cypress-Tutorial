describe('SignUp botton', () => {
    it('Click Signup and Fill the blank', () => {
        cy.visit('https://staging-app.e-ra.io/login')
        cy.get('[testid="ROW_SIGN_UP"]').click();
        cy.get('[id="standard-basic"]').eq(0).type('aaaa').should('have.value', 'aaaa');
        cy.get('[id="standard-basic"]').eq(1).type('aaaa@gmail.com').should('have.value', 'aaaa@gmail.com');
        cy.get('[id="standard-basic"]').eq(2).type('').should('have.value', '0359579079');
        cy.get('[id="standard-adornment-password"]').eq(0).type('Long1111').should('have.value', 'Long1111');
        cy.get('[id="standard-adornment-password"]').eq(1).type('Long1111').should('have.value', 'Long1111');
        cy.get('[class="ant-checkbox-input"]').click();
        cy.get('[testid="TEXT_COMMON"]').click({ multiple: true });
        
    });

})