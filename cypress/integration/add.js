/// <reference types="cypress" />

describe("numbers can add together", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays title of app", () => {
    cy.contains("Quick Maths");
  });

  it("can add two separate numbers together", () => {
    cy.get("#root > div > div > button:nth-child(5)").click();
    cy.get("#root > div > div > button:nth-child(12)").click();
    cy.get("#root > div > div > button:nth-child(6)").click();
    cy.get("#root > div > div > button:nth-child(19)").click();
    cy.get(".current-sum").invoke("text").should("eql", "3");
  });
});
