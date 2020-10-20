describe('Open Site', () => {
    it('test', () => {
        //   cy.visit()
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Layouts').click()

    })
    it('inline Form', () => {
        cy.get('[placeholder="Jane Doe"]').type('Lintang Kusuma Adjie')
        cy.get('[type="text"][placeholder="Email"]')
            .type('lintangadjie641@gmail.com')
        cy.contains('Remember me').first().click()
        // cy.contains('Inline form').get('[class="custom-checkbox"]').should('be.checked')
    });

    it('using the Grid', () => {
        cy.get('[data-cy="imputEmail1"]').type('lintangadjie641@gmail.com')
        cy.get('#inputPassword2').type('Lintang145')
        cy.contains('Option 1').click()
        // cy.contains('Option 2').click()

    });
    
    it('Basic Form', () => {
        cy.get('#exampleInputEmail1').type('lintangadjie641@gmail.com')
        cy.get('#exampleInputPassword1').type('Lintang145')
        cy.contains('Check me out').click()
    });

    it('Form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('Lintang')
        cy.get('[placeholder="Subject"]').type('Kusuma')
        cy.get('[placeholder="Message"]').type('Adjie')
    });

    it('Block Form', () => {
        cy.get('#inputFirstName').type('Lintang')
        cy.get('#inputLastName').type('Adjie')
        cy.get('#inputEmail').type('lintangadjie641@gmail.com')
        cy.contains('Website').type('hndr91.github.io/demo-ui/')
    });

    it('Horizontal Form', () => {
        cy.get('#inputEmail3').type('lintangadjie641@gmail.com')
        cy.get('#inputPassword3').type('Lintang145')
        cy.get('.custom-checkbox').last().click()
    });
})