describe('Team Member Card Structure and Hover Effects', () => {
    // Visit the page where the team members are listed
    beforeEach(() => {
        cy.loginWithBasicAuth();
    });

    it('should display all team member cards correctly', () => {
        // Check if there are team member cards displayed
        cy.get('a[class="relative group w-full block"]').should('have.length', 5); // Adjust the count based on the actual number of cards

        // Check each team member card for the following:
        cy.get('div.relative.group').each(($card) => {
            // Check if image is visible
            cy.wrap($card).find('img').should('be.visible');

            // Check if the name is displayed
            cy.wrap($card).find('h3').eq(0).should('not.be.empty'); // The name should not be empty

            // Check if the role is displayed
            cy.wrap($card).find('p').should('not.be.empty'); // The role should not be empty
        });
    });

    it('should navigate to the team member details page when clicking on a card', () => {
        // Check if clicking a team member card navigates to the correct page
        cy.get('div.relative.group').first().find('a').click();

        // Ensure the URL changes to the team member details page
        cy.url().should('include', '/team-member#slide1'); // Adjust based on the href for each team member
    });
});
