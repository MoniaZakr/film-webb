"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

require("./App.css");

var _MowieCard = _interopRequireDefault(require("./components/MowieCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e32129d4';

function App() {
  var searchMovies = function searchMovies(title) {
    var response, data;
    return regeneratorRuntime.async(function searchMovies$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch("".concat(API_URL, "&s=").concat(title)));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(response.json());

          case 5:
            data = _context.sent;
            console.log(data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  (0, _react.useEffect)(function () {
    searchMovies("Spiderman");
  }, []);
  return div.app > h1;
}

var _default = App;
exports["default"] = _default;
//# sourceMappingURL=App.dev.js.map
