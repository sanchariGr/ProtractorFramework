describe('istockphoto :::',function(){
  it('Find the perfect image::',function(){
    browser.get('http://www.istockphoto.com/in');
    browser.driver.findElement(By.css('#search-phrase')).sendKeys("Bart Simpson");
    browser.driver.findElement(By.css('.search-bar__submit')).click();

    // #refine_search
    browser.driver.findElement(By.css('.refine-text')).click();
    browser.driver.findElement(By.css('label[for="sort_mostpopular"]')).click();
    browser.driver.findElement(By.css('label[for="alloweduse_editorialuseonly"]')).click();
    browser.driver.findElement(By.css('label[for="orientations_horizontal"]')).click();
    // console.log('333333333')
    browser.driver.findElement(By.css('.accordion.number-of-people')).click();
    // browser.driver.wait(10000)
    browser.driver.findElement(By.css('label[for="numberofpeople_one"]')).click();
    
    
    browser.driver.findElement(By.css('a[data-asset-id="458652479"]')).click();
    console.log('333333333')
    browser.driver.findElement(By.css('#lightbox-btn')).click();
    browser.driver.findElement(By.css('.search-bar__submit')).click();
    browser.driver.findElement(By.css('a[data-asset-id="516109480"]')).click();

    #login flow
    browser.driver.findElement(By.css('#register_email')).sendKeys("abc@mailinator.com");
    browser.driver.findElement(By.css('#register_password')).sendKeys("abcd12345678");
    browser.driver.findElement(By.css('.#register_password_confirmation')).sendKeys("abcd12345678");
    browser.driver.findElement(By.css('#register-button')).click();
    expect(browser.driver.findElement(By.css('li[data-istock-user-id="0"]'))).toEqual('Account');

    #choose item
    browser.driver.findElement(By.css('a[data-asset-id="516109480"]')).click();
    browser.driver.findElement(By.css('.refine-text')).click();
    browser.driver.findElement(By.css('.refine-text')).click();
    browser.driver.findElement(By.css('.refine-text')).click();
    browser.driver.findElement(By.css('.refine-text')).click();
    expect(browser.driver.findElement(By.css('h1[ng-hide="showFullTitle"]'))).toEqual('Life size Bart Simpson - Stock image');

    #Buy Item
    browser.driver.findElement(By.css('download-button')).click();
    expect(browser.driver.findElement(By.css('#checkout-view"]'))).toEqual("Checkout");
    browser.driver.findElement(By.css('#firstNameInput')).sendKeys("Test");
    browser.driver.findElement(By.css('#lastNameInput')).sendKeys("User");
    browser.driver.findElement(By.css('#addressInput')).sendKeys("Somewhere in the world");
    browser.driver.findElement(By.css('#cityInput')).sendKeys("SomeCity");
    browser.driver.findElement(By.css('select[name="stateProvGetty"]')).click();
    browser.driver.findElement(By.css('option[value="DL"]')).click();
    browser.driver.findElement(By.css('#zipInput')).sendKeys("123456");
    browser.driver.findElement(By.css('#phoneInput')).sendKeys("4567898098");
    browser.driver.findElement(By.css('#ccNumberInput')).sendKeys("1234678909876453");
    browser.driver.findElement(By.css('#ccExpInput')).sendKeys("09/22");
    browser.driver.findElement(By.css('ccSecurityInput')).sendKeys("678");
    browser.driver.findElement(By.css('.super-cta')).click();

  });



})