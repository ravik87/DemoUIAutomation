import HomePageAssert from "./home-page-assert";
import LoginPageAssert from "./login-page-assert";

class M2aMediaUiAssert {
  static homePage() {
    return new HomePageAssert();
  }

  static loginPage() {
    return new LoginPageAssert();
  }
}

export default M2aMediaUiAssert;
