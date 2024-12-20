describe("Footer Automation Tests", () => {
    const footerSelector = "footer"; // Selector for the footer element

    beforeEach(() => {
        cy.loginWithBasicAuth();
    });

    it("Validates social media links", () => {
        const socialMediaLinks = [
            { href: "https://www.wantedly.com/companies/jobins?ref=jobins.jp" },
            { href: "https://www.facebook.com/jobins.jp?ref=jobins.jp" },
        ];

        // Assuming the social media links are at indices 2 and 3
        cy.get(`${footerSelector} a[target="_blank"]`).eq(2)
            .should('have.attr', 'href')
            .and('include', socialMediaLinks[0].href);

        cy.get(`${footerSelector} a[target="_blank"]`).eq(3)
            .should('have.attr', 'href')
            .and('include', socialMediaLinks[1].href);
    });


    it("Validates footer content", () => {
        const footerLinks = [
            { text: "ホーム", href: "/" },
            { text: "エントリー", href: "/career" },
            { text: "JoBinsについて", href: "/about-us" },
            { text: "働き方", href: "/working" },
            { text: "メンバー紹介", href: "/team-member" },
            { text: "プライバシーポリシー", href: "/privacy-policy" },
        ];

        // Validate footer static content
        cy.get(footerSelector)
            .should("contain.text", "© 2024 JoBins Co. Ltd.")
            .and("contain.text", "ホーム")
            .and("contain.text", "エントリー");

        // Validate footer links
        footerLinks.forEach((link) => {
            cy.get(footerSelector)
                .find(`a[href="${link.href}"]`)
                .should("contain.text", link.text);
        });

        // Validate footer logo
        cy.get(`${footerSelector} img[alt="footer logo"]`)
            .should("have.attr", "src")
            .and("include", "/images/logo/logo.svg");


        // validate footer logo link
        const socialMediaLinks = [
            { href: "https://corp.jobins.jp/news/article-" },
            { href: "https://corp.jobins.jp/news/article-" },
        ];

        // Assuming the social media links are at indices 2 and 3
        cy.get(`${footerSelector} a[target="_blank"]`).eq(0)
            .should('have.attr', 'href')
            .and('include', socialMediaLinks[0].href);

        cy.get(`${footerSelector} a[target="_blank"]`).eq(1)
            .should('have.attr', 'href')
            .and('include', socialMediaLinks[1].href);
    });
});


