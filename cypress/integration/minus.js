/// <reference types="cypress" />

describe("number can minus another number and display the total", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });
  
    it("can minus two separate numbers together", () => {
      cy.get("#root > div > div > button:nth-child(15)").click();
      cy.get("#root > div > div > button:nth-child(16").click();
      cy.get("#root > div > div > button:nth-child(10)").click();
      cy.get("#root > div > div > button:nth-child(19)").click();
      cy.get(".current-sum").invoke("text").should("eql", "4");
    });
  });