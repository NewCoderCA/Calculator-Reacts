describe("Display Calculator Reacts app page", () => {
    beforeEach(() => {
        cy.visit("https://localhost:3000/");
    });

    it("contains title", () => {
        cy.contains("Quick Maths!");
    });

    it("contains logo, title and image", () => {
        cy.get(".flagAfrica").find("img").should("inlcude", "flagAfrica");
        cy.get(".App-logo").find("img").should("have.attr", "src", "App-logo");
        cy.contains("Quick Maths!");
    });
});