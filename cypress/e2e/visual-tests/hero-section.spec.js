describe('Responsive Visual Testing', () => {


    beforeEach(() => {
        cy.loginWithBasicAuth();
    });


    it("Captures snapshot test", () => {

        cy.wait(10000).get('section.pt-20').should('be.visible').then(() => {
            cy.percySnapshot("0.1% DOM Section", { widths: [1920] });
            cy.percySnapshot("0.1% DOM Section Mobile", { widths: [390] });
        });
    });
});

