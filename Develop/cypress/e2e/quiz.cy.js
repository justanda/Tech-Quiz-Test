import Quiz from "../../client/src/components/Quiz";
import { mount } from "cypress/react";

describe("Quiz", () => {
  mount(<Quiz />);
  cy.get("h1").should("have.text", "Quiz");
});
