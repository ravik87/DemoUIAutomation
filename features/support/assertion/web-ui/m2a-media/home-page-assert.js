import AbstractUiAssert from "../abstract-ui-assert";
import M2aMediaUI from "../../../modules/web-ui/m2a-media-ui";
import UiContent from "../../../general/enums/ui-content";

const homePage = M2aMediaUI.home();

class HomePageAssert extends AbstractUiAssert {
  hasWelcomeMessage() {
    this.equalIgnoreCase(
      UiContent.HOME_PAGE_WELCOME_MSG,
      homePage.getWelcomeMessage()
    );
  }
}

export default HomePageAssert;
