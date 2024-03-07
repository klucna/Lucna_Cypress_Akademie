import { LoginPage } from "../../page-objects/sauce-demo/login_page"

describe(Login and Logout Tests), () => {
it ("Login Test", () => {
new LoginPage()
.openSauceDemo()
.typeUsername("standard_user")
.typePassword("secret_sauce")
.clickButton();
})
}