// https://docs.cypress.io/api/introduction/api.html

import { Page } from "../support/pages";

describe("Contacts", () => {
  beforeEach(() => {
    cy.visit(Page.Contacts);
  });

  it("should open contacts page", () => {
    cy.contains("h1", "Контакты");
  });

  it("should load contacts table", () => {
    cy.get("[cy-test=contacts-table-col-email]")
      .should("have.length.gte", 20)
      .first()
      .should("have.text", "brendon.cremin91@gmail.com");
  });

  it("should load lists select", () => {
    cy.get("[cy-test=lists-select]")
      .should("have.value", "")
      .within(() => cy.get("option").should("have.length.gte", 20));
  });

  it("should load contacts of selected list", () => {
    cy.get("[cy-test=lists-select]")
      .should("have.value", "")
      .select("c407a7bd-7930-43bc-8241-2aafd058ed39");

    cy.get("[cy-test=contacts-table-col-email]")
      .first()
      .should("have.text", "camryn90@yahoo.com");
  });
});
