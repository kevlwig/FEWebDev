(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _wsClient = _interopRequireDefault(require("./ws-client.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = /*#__PURE__*/_createClass(function ChatApp() {
  _classCallCheck(this, ChatApp);

  _wsClient["default"].init('ws://localhost:3031');

  _wsClient["default"].registerOpenHandler(function () {
    var msg = new ChatMessage({
      message: "pow"
    });

    _wsClient["default"].sendMessage(msg.serialize());
  });

  _wsClient["default"].registerMessageHandler(function (data) {
    console.log(data);
  });
});

var ChatMessage = /*#__PURE__*/function () {
  function ChatMessage(_ref) {
    var m = _ref.message,
        _ref$user = _ref.user,
        u = _ref$user === void 0 ? 'anonymous' : _ref$user,
        _ref$timestamp = _ref.timestamp,
        t = _ref$timestamp === void 0 ? new Date().getTime() : _ref$timestamp;

    _classCallCheck(this, ChatMessage);

    this.message = m;
    this.user = u;
    this.timestamp = t;
  }

  _createClass(ChatMessage, [{
    key: "serialize",
    value: function serialize() {
      return {
        user: this.user,
        message: this.message,
        timestamp: this.timestamp
      };
    }
  }]);

  return ChatMessage;
}();

var _default = ChatApp;
exports["default"] = _default;

},{"./ws-client.js":3}],2:[function(require,module,exports){
"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _app["default"]();

},{"./app":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var socket;

function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

function registerOpenHandler(handlerFn) {
  socket.onopen = function () {
    console.log('open');
    handlerFn();
  };
}

function registerMessageHandler(handlerFn) {
  socket.onmessage = function (e) {
    console.log('message', e.data);
    var data = JSON.parse(e.data);
    handlerFn(data);
  };
}

function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}

var _default = {
  init: init,
  registerOpenHandler: registerOpenHandler,
  registerMessageHandler: registerMessageHandler,
  sendMessage: sendMessage
};
exports["default"] = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0lBQ00sTyw2QkFDSixtQkFBYTtBQUFBOztBQUNYLHVCQUFPLElBQVAsQ0FBWSxxQkFBWjs7QUFDQSx1QkFBTyxtQkFBUCxDQUEyQixZQUFJO0FBQzdCLFFBQUksR0FBRyxHQUFHLElBQUksV0FBSixDQUFnQjtBQUFDLE1BQUEsT0FBTyxFQUFFO0FBQVYsS0FBaEIsQ0FBVjs7QUFDQSx5QkFBTyxXQUFQLENBQW1CLEdBQUcsQ0FBQyxTQUFKLEVBQW5CO0FBQ0QsR0FIRDs7QUFJQSx1QkFBTyxzQkFBUCxDQUE4QixVQUFDLElBQUQsRUFBUTtBQUNwQyxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBWjtBQUNELEdBRkQ7QUFHRCxDOztJQUdHLFc7QUFDSiw2QkFHeUM7QUFBQSxRQUY5QixDQUU4QixRQUZ2QyxPQUV1QztBQUFBLHlCQUR2QyxJQUN1QztBQUFBLFFBRGpDLENBQ2lDLDBCQUQvQixXQUMrQjtBQUFBLDhCQUF2QyxTQUF1QztBQUFBLFFBQTVCLENBQTRCLCtCQUF2QixJQUFJLElBQUosRUFBRCxDQUFhLE9BQWIsRUFBd0I7O0FBQUE7O0FBRXJDLFNBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxTQUFLLElBQUwsR0FBWSxDQUFaO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLENBQWpCO0FBQ0g7Ozs7V0FFRCxxQkFBVztBQUNULGFBQU87QUFDTCxRQUFBLElBQUksRUFBRyxLQUFLLElBRFA7QUFFTCxRQUFBLE9BQU8sRUFBRSxLQUFLLE9BRlQ7QUFHTCxRQUFBLFNBQVMsRUFBRSxLQUFLO0FBSFgsT0FBUDtBQUtEOzs7Ozs7ZUFFWSxPOzs7Ozs7QUNqQ2Y7Ozs7QUFDQSxJQUFJLGVBQUo7Ozs7Ozs7OztBQ0RBLElBQUksTUFBSjs7QUFFQSxTQUFTLElBQVQsQ0FBYyxHQUFkLEVBQWtCO0FBQ2hCLEVBQUEsTUFBTSxHQUFHLElBQUksU0FBSixDQUFjLEdBQWQsQ0FBVDtBQUNBLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0Q7O0FBRUQsU0FBUyxtQkFBVCxDQUE2QixTQUE3QixFQUF1QztBQUNyQyxFQUFBLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFlBQUk7QUFDbEIsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLE1BQVo7QUFDQSxJQUFBLFNBQVM7QUFDVixHQUhEO0FBSUQ7O0FBRUQsU0FBUyxzQkFBVCxDQUFnQyxTQUFoQyxFQUEwQztBQUN4QyxFQUFBLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFVBQUMsQ0FBRCxFQUFPO0FBQ3hCLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLENBQUMsQ0FBQyxJQUF6QjtBQUNBLFFBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFMLENBQVcsQ0FBQyxDQUFDLElBQWIsQ0FBWDtBQUNBLElBQUEsU0FBUyxDQUFDLElBQUQsQ0FBVDtBQUNELEdBSkQ7QUFLRDs7QUFFRCxTQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBNkI7QUFDM0IsRUFBQSxNQUFNLENBQUMsSUFBUCxDQUFZLElBQUksQ0FBQyxTQUFMLENBQWUsT0FBZixDQUFaO0FBQ0Q7O2VBRWM7QUFDYixFQUFBLElBQUksRUFBSixJQURhO0FBRWIsRUFBQSxtQkFBbUIsRUFBbkIsbUJBRmE7QUFHYixFQUFBLHNCQUFzQixFQUF0QixzQkFIYTtBQUliLEVBQUEsV0FBVyxFQUFYO0FBSmEsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBzb2NrZXQgZnJvbSAnLi93cy1jbGllbnQuanMnO1xuY2xhc3MgQ2hhdEFwcHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzb2NrZXQuaW5pdCgnd3M6Ly9sb2NhbGhvc3Q6MzAzMScpO1xuICAgIHNvY2tldC5yZWdpc3Rlck9wZW5IYW5kbGVyKCgpPT57XG4gICAgICBsZXQgbXNnID0gbmV3IENoYXRNZXNzYWdlKHttZXNzYWdlOiBcInBvd1wifSlcbiAgICAgIHNvY2tldC5zZW5kTWVzc2FnZShtc2cuc2VyaWFsaXplKCkpO1xuICAgIH0pO1xuICAgIHNvY2tldC5yZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKChkYXRhKT0+e1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSk7XG4gIH1cbn1cblxuY2xhc3MgQ2hhdE1lc3NhZ2V7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBtZXNzYWdlOiBtLFxuICAgIHVzZXI6IHU9J2Fub255bW91cycsXG4gICAgdGltZXN0YW1wOiB0ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKX0pe1xuXG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtO1xuICAgICAgdGhpcy51c2VyID0gdTtcbiAgICAgIHRoaXMudGltZXN0YW1wID0gdDtcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpe1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyIDogdGhpcy51c2VyLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgdGltZXN0YW1wOiB0aGlzLnRpbWVzdGFtcFxuICAgIH07XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENoYXRBcHA7XG4iLCJpbXBvcnQgQ2hhdEFwcCBmcm9tICcuL2FwcCc7XG5uZXcgQ2hhdEFwcCgpO1xuIiwibGV0IHNvY2tldDtcblxuZnVuY3Rpb24gaW5pdCh1cmwpe1xuICBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCk7XG4gIGNvbnNvbGUubG9nKCdjb25uZWN0aW5nLi4uJyk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyT3BlbkhhbmRsZXIoaGFuZGxlckZuKXtcbiAgc29ja2V0Lm9ub3BlbiA9ICgpPT57XG4gICAgY29uc29sZS5sb2coJ29wZW4nKTtcbiAgICBoYW5kbGVyRm4oKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcihoYW5kbGVyRm4pe1xuICBzb2NrZXQub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbWVzc2FnZScsIGUuZGF0YSk7XG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgaGFuZGxlckZuKGRhdGEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShwYXlsb2FkKXtcbiAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQsXG4gIHJlZ2lzdGVyT3BlbkhhbmRsZXIsXG4gIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIsXG4gIHNlbmRNZXNzYWdlXG59XG4iXX0=
