describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://staging-app.e-ra.io/login');
  });

  it('i visit page iot dashboard', () => {
   })

  it('logs in without username and password', () => {
    cy.get('[testid="LOGIN_BUTTON"]').click();
    cy.contains('password: This field may not be blank').should('be.visible');  
  });

  it('Fill phonenumber', () => {
    cy.get('[id="standard-basic"]').first().type('aaaa').should('have.value', 'aaaa');
    // Use .first() to select the first matching input element
    cy.get('[testid="LOGIN_BUTTON"]').click();
    cy.contains('This field may not be blank').should('be.visible');  
  });

  it('Fill password ', () => {
    cy.get('[id="standard-adornment-password"]').first().type('aaaa').should('have.value', 'aaaa');
    // Use .first() to select the first matching input element
    cy.get('[class="jss8"]').click();
    cy.get('[testid="LOGIN_BUTTON"]').click();
    cy.contains('This field may not be blank').should('be.visible');
  }) 

  it('Fill incorrect Phonenumber and password', () => {
    cy.get('[id="standard-basic"]').first().type('aaaa').should('have.value', 'aaaa');
    cy.get('[id="standard-adornment-password"]').first().type('aaaa').should('have.value', 'aaaa');
    // Use .first() to select the first matching input element
    cy.get('[class="jss8"]').click();
    cy.get('[testid="LOGIN_BUTTON"]').click();
    cy.contains('Incorrect username or password').should('be.visible');
  }) 

  it('Fill Correct Phonenumber and password', () => {
    cy.get('[id="standard-basic"]').first().type('0901603859').should('have.value', '0901603859');
    cy.get('[id="standard-adornment-password"]').first().type('Doloi123').should('have.value', 'Doloi123');
    // Use .first() to select the first matching input element
    cy.get('[class="jss8"]').click();
    cy.get('[testid="LOGIN_BUTTON"]').click();
    cy.get('[class="ant-dropdown-trigger"]').should('be.visible'); 
  }) 
})
