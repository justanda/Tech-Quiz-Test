import Quiz from "../../client/src/components/Quiz";
import { mount } from "cypress/react";

describe("Quiz", () => {
  it("should render a quiz", () => {
    mount(<Quiz />);
    cy.get("h1").should("have.text", "Quiz");
  });
});

it("should have text shart quiz", () => {
  cy.get("button").should("have.text", "Start Quiz").click();
});

it("should have a button to start the quiz", () => {
  cy.get("button").should("have.text", "Start Quiz");
});
