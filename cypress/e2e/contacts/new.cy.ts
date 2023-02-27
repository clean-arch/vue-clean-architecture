import { Page } from "../../support/pages";

describe("Create contact", () => {
  beforeEach(() => {
    cy.visit(Page.CreateContact);
  });

  it("should create a contact", () => {
    const email = "foo@example.com";

    cy.get("[data-test=createContact-formField-email]").type(email);
    cy.get("[data-test=createContact-button]").click();

    cy.location("pathname").should("eq", Page.Contacts);

    cy.get("[data-test=contacts-table-col-email]")
      .first()
      .should("have.text", email);
  });
});
