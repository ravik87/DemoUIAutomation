import AbstractUiAssert from "../abstract-ui-assert";
import M2aMediaUI from "../../../modules/web-ui/m2a-media-ui";
import UiContent from "../../../general/enums/ui-content";

const loginPage = M2aMediaUI.login();

class LoginPageAssert extends AbstractUiAssert {
  hasInvalidLoginErrMsg() {
    this.equalIgnoreCase(
      UiContent.LOGIN_PAGE_INVALID_CRED_MSG,
      loginPage.getErrorMessage()
    );
  }
}

export default LoginPageAssert;
