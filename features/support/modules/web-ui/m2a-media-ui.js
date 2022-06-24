import HomePage from "./pages/home-page";

// Factor class to provision M2A Media UI pages
class M2aMediaUI {
    static home() {
        return new HomePage;
    }
}

export default M2aMediaUI