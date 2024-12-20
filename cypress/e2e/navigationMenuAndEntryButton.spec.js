describe('Navigation Menu and Entry Button Tests', () => {

  beforeEach(() => {
    // Visit the website
    cy.loginWithBasicAuth();
  });

  it('should validate navigation menu links and navigate to each page', () => {
    // Define the navigation links
    const navLinks = [
      { text: 'ホーム', href: '/' },
      { text: 'JoBinsについて', href: '/about-us' },
      { text: 'メンバー紹介', href: '/team-member' },
      { text: '働き方', href: '/working' }
    ];

    // Check each link in the navigation menu
    navLinks.forEach((link) => {
      // Validate the link's href attribute and visibility
      cy.contains('a', link.text)
        .should('have.attr', 'href', link.href)
        .and('be.visible');

      // Click on the link and check if it navigates to the correct page
      cy.contains('a', link.text).click();

      // Verify the URL after navigation
      cy.url().should('include', link.href);

      // Optionally, verify the page content to ensure the correct page loaded
      // For example, checking if the page contains specific content related to the page
      cy.get('body').should('not.contain', 'Loading...'); // You can replace this with more page-specific content checks
    });
  });


  it('should check the visibility and functionality of the Entry button', () => {
    cy.contains('a[href="/career"]', 'エントリー').click();

    // Verify the button is clickable and navigate correctly
    // cy.get('a[href="/career"]').click();  // Click the button
    cy.url().should('include', '/career');  // Ensure it navigates to the correct page
  });

});
