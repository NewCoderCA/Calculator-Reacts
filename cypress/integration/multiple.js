/// <reference types="cypress" />

describe("number can multiple another number and display the total", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });
  
    it("can multiple two separate numbers together", () => {
      cy.get("#root > div > div > button:nth-child(15)").click();
      cy.get("#root > div > div > button:nth-child(8)").click();
      cy.get("#root > div > div > button:nth-child(13)").click();
      cy.get("#root > div > div > button:nth-child(19)").click();
      cy.get(".current-sum").invoke("text").should("eql", "63");
    });
  });