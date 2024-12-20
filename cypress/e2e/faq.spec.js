

describe('FAQ Accordion Tests', () => {

    beforeEach(() => {
        // Navigate to the page containing the FAQ section
        cy.loginWithBasicAuth();
    });

    it('should open FAQ items when clicked', () => {
        // Find all FAQ items that are closed initially
        cy.get('h3[data-orientation="vertical"][data-state="closed"]').each(($faq, index) => {
            // Get the corresponding FAQ content
            const faqContent = $faq.next('div[data-orientation="vertical"]');

            cy.wait(2000);

            // Click on the FAQ item to expand it
            cy.wrap($faq).click();

            // Validate the state has changed to open for both the button and the div
            cy.wrap($faq).should('have.attr', 'data-state', 'open');
            cy.wrap(faqContent).should('have.attr', 'data-state', 'open');

            // Ensure the content is visible when open
            cy.wrap(faqContent).should('be.visible');
        });
    });





});

describe.only('FAQ Section Tests', () => {
    beforeEach(() => {
        // Visit the page containing the FAQ section
        cy.loginWithBasicAuth();
    });

    it('should display the FAQ title correctly', () => {
        // Assert that the FAQ title is displayed and correct
        cy.get('h2').contains('FAQs').should('be.visible');
    });

    it('should have 4 FAQ questions', () => {
        // Ensure there are 4 FAQ questions listed
        cy.get('h3[data-orientation="vertical"][data-state="closed"]').should('have.length', 4);
    });

    it('should have valid FAQ questions with correct numbering and text', () => {
        // Check each FAQ question is properly formatted (numbered question and text)
        cy.get('.flex-1.items-start.gap-1.text-left').each(($el, index) => {
            const questionNumber = index + 1;
            const questionText = $el.text().trim();

            // Ensure the question has a number at the beginning
            expect(questionText).to.match(new RegExp(`^${questionNumber}\\.`));

            // Ensure the question text follows the number (optional space after the dot)
            expect(questionText).to.match(new RegExp(`^${questionNumber}\\.\\s?`));
        });
    });


    it('should have a chevron icon for each FAQ question', () => {
        // Ensure each FAQ item has a chevron icon
        cy.get('.lucide-chevron-down').should('have.length', 4);
    });

    it('should display the answers when clicked', () => {
        // Click the first FAQ question to expand the answer
        cy.get('.flex-1.justify-between').first().click();

        // Ensure the answer section is expanded
        cy.get('[aria-expanded="true"]').should('be.visible');
    });
});
