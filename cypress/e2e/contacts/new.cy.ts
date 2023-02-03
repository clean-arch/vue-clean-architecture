import { Page } from "../../support/pages";

describe("Create contact", () => {
  beforeEach(() => {
    cy.visit(Page.CreateContact);
  });

  it("should create a contact", () => {
    const email = "foo@example.com";

    cy.get("[cy-test=createContact-form-field-email]").type(email);
    cy.get("[cy-test=createContact-button]").click();

    cy.location("pathname").should("eq", Page.Contacts);

    cy.get("[cy-test=contacts-table-col-email]")
      .first()
      .should("have.text", email);
  });
});
