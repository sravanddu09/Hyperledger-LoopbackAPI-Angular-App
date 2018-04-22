import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for bank-angularapp', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be bank-angularapp', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('bank-angularapp');
    })
  });

  it('navbar-brand should be bank-network@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('bank-network@0.0.1');
  });

  
    it('Account component should be loadable',() => {
      page.navigateTo('/Account');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Account');
    });

    it('Account table should have 4 columns',() => {
      page.navigateTo('/Account');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });

  

});
