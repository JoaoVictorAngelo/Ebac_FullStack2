"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _console;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
//rest

function somar() {
  var soma = 0;
  for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
}
console.log(somar(3, 20, 27));
function somarComRest() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var soma = numeros.reduce(function (total, numeroAtual) {
    total += numeroAtual;
    return total;
  }, 0);
}
console.log(somar(3, 20, 27));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//spread

var numeros = [1, 2, 3, 4];
(_console = console).log.apply(_console, numeros); // resposta: 1 2 3 4

var timesDeFutebolSp = ['Santos', 'Corinthians', 'Palmeiras', 'Sao Paulo'];
var timesDeFutebolRj = ['Flamengo', 'Botafogo', 'Fluminense', 'Vasco'];
var timesDeFutebol = timesDeFutebolSp.concat(timesDeFutebolRj);
console.log(timesDeFutebol);
/* Resposta: 
    [
    'Santos',
    'Corinthians',
    'Palmeiras',
    'Sao Paulo',
    'Flamengo',
    'Botafogo',
    'Fluminense',
    'Vasco'
    ]
*/

var timesDeFutebol2 = [].concat(timesDeFutebolSp, timesDeFutebolRj);
console.log(timesDeFutebol2);
/* Resposta: 
    [
    'Santos',
    'Corinthians',
    'Palmeiras',
    'Sao Paulo',
    'Flamengo',
    'Botafogo',
    'Fluminense',
    'Vasco'
    ]
*/

var _timesDeFutebol = _toArray(timesDeFutebol),
  item1 = _timesDeFutebol[0],
  item2 = _timesDeFutebol[1],
  item3 = _timesDeFutebol[2],
  OutrosTimes = _timesDeFutebol.slice(3);
console.log(item1); //Resposta: Santos
console.log(item2); //Resposta: Corinthians
console.log(item3); //Resposta: Palmeiras
console.log(OutrosTimes); //Resposta: Restante dos times

var carroDaJulia = {
  carro: 'Fox',
  marca: 'Vw',
  motor: '1.0'
};
var carroDaMaria = _objectSpread(_objectSpread({}, carroDaJulia), {}, {
  motor: '1.6'
});
console.log(carroDaJulia, carroDaMaria);
//Resposta: { carro: 'Fox', marca: 'Vw', motor: '1.0' } { carro: 'Fox', marca: 'Vw', motor: '1.6' }

// Desestruturação

var motorCarroJulia = carroDaJulia.motor;
var motorCarroMaria = carroDaMaria.motor;
console.log(motorCarroJulia, motorCarroMaria);
//Resposta 1.0 1.6