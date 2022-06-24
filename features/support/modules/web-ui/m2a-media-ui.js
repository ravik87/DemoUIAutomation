import HomePage from "./pages/home-page";
import LoginPage from "./pages/login-page";

// Factory class to provision M2A Media UI pages
class M2aMediaUI {
    static home() {
        return new HomePage();
    }

    static login() {
        return new LoginPage();
    }
}

export default M2aMediaUI