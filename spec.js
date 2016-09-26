describe('istockphoto :::',function(){
  it('Find the perfect image::',function(){
    browser.get('http://www.istockphoto.com/in');
    browser.driver.findElement(By.css('#search-phrase')).sendKeys("Bart Simpson");
    browser.driver.findElement(By.css('.search-bar__submit')).click();
    

  });


})