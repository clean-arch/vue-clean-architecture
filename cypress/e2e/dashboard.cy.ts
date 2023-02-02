import { Page } from "../support/pages";

describe("Dashboard", () => {
  it("should redirect to contacts page", () => {
    cy.visit(Page.Dashboard);
    cy.location("pathname").should("eq", Page.Contacts);
  });
});
