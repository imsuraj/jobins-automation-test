describe('Career Opening Page Tests', () => {
    beforeEach(() => {
        cy.loginWithBasicAuth();
    });

    it('Test job filtering functionality', () => {
        const tabs = [
            { label: 'キャリア採用' },
            { label: '新卒採用' },
            { label: '長期インターン採用' },
        ];

        tabs.forEach(tab => {
            cy.contains('button', tab.label)
                .should('be.visible')
                .click();

            // Verify the corresponding panel is active
            cy.get('[data-state="active"]')
                .should('contain.text', tab.label);
        });
    });

    it('Validate job listing links', () => {
        cy.get('[data-state="active"] a[href]')
            .each($el => {
                const href = $el.attr('href');
                expect(href).to.match(/\/career\/.+/); // Validate the link format

                // Visit the job listing
                cy.visitWithAuth(href);

                // Validate the URL and some content
                cy.url().should('include', href);
                cy.get('a').should('be.visible'); // Adjust the selector as needed

                // Navigate back to the career page
                cy.go('back');
            });
    });
});
