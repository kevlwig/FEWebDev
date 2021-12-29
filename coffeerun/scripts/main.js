(function(window){
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]'
  var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';

  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var CheckList = App.CheckList;

  var remoteDS = new RemoteDataStore(SERVER_URL);
  var myTruck = new Truck('ncc-1701', remoteDS);
  window.myTruck = myTruck;

  var formHandler = new FormHandler(FORM_SELECTOR);
  //replacing bind with call to invoke createOrder and Row
  //formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));

  var checkList = new CheckList(CHECKLIST_SELECTOR);
  formHandler.addSubmitHandler(function(data){
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });
  formHandler.addInputHandler(Validation.isCompanyEmail);
  checkList.addClickHandler(myTruck.deliveredOrder.bind(myTruck));

})(window);
