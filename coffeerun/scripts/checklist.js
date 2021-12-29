(function(window){
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;
  function CheckList(selector) {
    if(!selector){
      throw new Error('No selector provided');
    }

    this.$element = $(selector);
    if(this.$element.length === 0){
      throw new Error('Could not find element with selector: ' + selector);
    }

  }

  function Row(coffeeOrder){
    var $div = $('<div></div>', {
      'data-coffee-order':'checkbox',
      'class': 'checkbox'
    });

    var $label = $('<label></label>')

    var $input = $('<input></input>', {
      type: 'checkbox',
      value: coffeeOrder.emailAddress
    });

    var description = ' ' + coffeeOrder.size + ' ';
    if(!coffeeOrder.flavor){
      description += coffeeOrder.flavor + ' ';
    }

    description += coffeeOrder.coffee + ', ';
    description += ' (' + coffeeOrder.emailAddress + ')';
    description += ' [' + coffeeOrder.strength + 'x]';

    $label.append($input);
    $label.append(description);
    $div.append($label);

    this.$element = $div;

  }

  CheckList.prototype.addRow = function (coffeeOrder) {
    //ensure orders are unique
    this.removeRow(coffeeOrder.emailAddress);

    var rowElement = new Row(coffeeOrder);
    this.$element.append(rowElement.$element);
  }

  CheckList.prototype.removeRow = function (emaillAddress) {
    this.$element
    .find('[value="' + emaillAddress + '"]')
    .closest('[data-coffee-order=checkbox]')
    .remove();
  }

  CheckList.prototype.addClickHandler = function (fn) {
    console.log('Setting click handler for checkbox inputs');
    this.$element.on('click', 'input', function(e) {
      var email = e.target.value;
      this.removeRow(email);
      fn(email);
    }.bind(this));
  }



  App.CheckList = CheckList;
  window.App = App;
})(window);
