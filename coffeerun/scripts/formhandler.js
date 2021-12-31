(function(window){
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector)
  {
    if(!selector){
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    if(this.$formElement.length === 0){
      throw new Error('Could not find element with selector: '+selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function (fn) {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function(e){
      e.preventDefault();
      var data = {};
      $(this).serializeArray().forEach( function(item){
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data)
      .then(function(){
        this.reset();
        this.elements[0].focus();
      }.bind(this));
    });
  }

  FormHandler.prototype.addInputHandler = function (fn) {
    console.log('Setting input handler for field');
    this.$formElement.on('input', '[name="emailAddress"]', function(e){
      var email = e.target.value;
      var message = '';
      if(fn(email)){
        e.target.setCustomValidity('');
      }else{
        message = email + ' is not an authorized email address!'
        event.target.setCustomValidity(message);
      }

    });
  }
  App.FormHandler = FormHandler;
  window.App = App;
})(window);
