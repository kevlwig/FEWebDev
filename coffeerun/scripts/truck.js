(function(window) {
  'use strict';
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }

  Truck.prototype.createOrder = function(order) {
    console.log('Adding order for ' + order.emailAddress);
    return this.db.add(order.emailAddress, order);
  };

  Truck.prototype.deliveredOrder = function(customerId) {
    console.log('Delievering order for ' + customerId);
    return this.db.remove(customerId);
  };

  Truck.prototype.printOrders = function(printFn) {
    return this.db.getAll()
      .then(function(orders) {
        var customerIdArray = Object.keys(orders);

        console.log('Truck # ' + this.truckId + ' has ' + customerIdArray.length + ' pending orders.')
        customerIdArray.forEach(function(id) {
          console.log(orders[id]);

          if (printFn) {
            printFn(orders[id])
          }
        }.bind(this));
      }.bind(this));

  }
  App.Truck = Truck;
  window.App = App;

})(window);
