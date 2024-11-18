import { LoginPage } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const LoginPageTest = new LoginPage();
const HomePageTest = new HomePage();

describe("Page Object Example", () => {
  it("Login and Logut page test", () => {
    LoginPageTest.navigateLogin();
    LoginPageTest.validateLogin();
    HomePageTest.validateLogout(); 
  });
});