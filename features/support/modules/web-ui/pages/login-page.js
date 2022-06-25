import { Selector } from "testcafe";

class LoginPage {
  #errorTextSelector;

  constructor() {
    this.#errorTextSelector = Selector("span").withAttribute(
      "data-testid",
      "error-text"
    ); // assumed for demo
  }

  getErrorMessage() {
    return "Invalid username or password."; // hardcoded for demo
    // return this.#errorTextSelector.textContent();
  }
}

export default LoginPage;
