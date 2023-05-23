// Libs
import { Builder, By, Key, WebDriver, until } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";

import LoggerModel from "./loggerModel";

// Class
class BrowserModel {
  private static driver?: WebDriver;
  private static logger = LoggerModel.get();
  private static mail = process.env.CONTAAZUL_CREDENTIAL_MAIL!;
  private static pass = process.env.CONTAAZUL_CREDENTIAL_PASS!;

  /**
   * A method to login in the ContaAzul System and return the account auth.
   */
  public static async loginIntoService(): Promise<string> {
    // Check if the driver is initialized.
    if (!this.driver) this.driver = await this.defineDriver();

    // Go to the login page.
    this.logger.info(`Trying to login into ContaAzul...`);
    await this.driver.navigate().to(process.env.CONTAAZUL_LOGIN!);
    this.logger.info(`Accessed.`);

    // Get the forms and put the credentials.
    const form = await this.driver.findElement(By.css("form"));
    const inputs = await form.findElements(By.css("input"));
    const submit = await form.findElement(By.css("button"));
    await inputs[0].sendKeys(this.mail);
    await inputs[1].sendKeys(this.pass);
    await submit.click();

    await this.driver.wait(until.urlContains("app.contaazul.com"));
    this.logger.info(await this.driver.getCurrentUrl());
    return "";
  }

  /**
   * A method to start and define the driver.
   */
  private static async defineDriver(): Promise<WebDriver> {
    // Define driver.
    const opt = new Options()
      .headless()
      .setChromeBinaryPath("/usr/bin/chromium-browser")
      .windowSize({ width: 1920, height: 1080 });
    opt.addArguments("--no-sandbox");

    return new Builder().forBrowser("chrome").setChromeOptions(opt).build();
  }
}

// Code
export default BrowserModel;
