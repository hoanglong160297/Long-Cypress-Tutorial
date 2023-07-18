describe('CheckMap', () => {
    it('Login Successful', () => {
        cy.visit('https://staging-app.e-ra.io/login');
        cy.get('[id="standard-basic"]').first().type('0901603859').should('have.value', '0901603859');
        cy.get('[id="standard-adornment-password"]').first().type('Doloi123').should('have.value', 'Doloi123');
        // Use .first() to select the first matching input element
        cy.get('[class="jss8"]').click();
        cy.get('[testid="LOGIN_BUTTON"]').click();
        cy.get('[testid="DASHBOARD_MAP_SECTION"]').click();
        //cy.contains('EoH Office').click();
        cy.get('[class="undefined scale-button"]').eq(4).click()
        cy.get('[testid="WRAP_DIV"]').eq(2).click()

        //cy.get('[class="ant-dropdown-trigger"]').should('be.visible'); 

    })

   
})