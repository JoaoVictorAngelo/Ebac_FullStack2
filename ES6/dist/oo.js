"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _hp = /*#__PURE__*/new WeakMap();
var _forca = /*#__PURE__*/new WeakMap();
var _transformado = /*#__PURE__*/new WeakMap();
var Dragonbal = /*#__PURE__*/function () {
  function Dragonbal(nome, especie) {
    _classCallCheck(this, Dragonbal);
    _classPrivateFieldInitSpec(this, _hp, 100);
    _classPrivateFieldInitSpec(this, _forca, 100);
    _classPrivateFieldInitSpec(this, _transformado, false);
    this.nome = nome;
    this.especie = especie;
  }
  return _createClass(Dragonbal, [{
    key: "setNome",
    value: function setNome(novoNome) {
      this.nome = novoNome;
    }
  }, {
    key: "atacar",
    value: function atacar(nomeDoAtaque) {
      var dano = 10;
      if (_classPrivateFieldGet(_transformado, this) && _classPrivateFieldGet(_forca, this) <= 91) {
        this.desfazerTransformacao();
      }
      if (_classPrivateFieldGet(_transformado, this)) {
        dano *= _classPrivateFieldGet(_forca, this) / 100;
        _classPrivateFieldSet(_forca, this, _classPrivateFieldGet(_forca, this) - 20);
        console.log("".concat(this.nome, " atacou usando ").concat(nomeDoAtaque, " , e est\xE1 transformado causou: ").concat(dano, " de dano, voce esta com ").concat(_classPrivateFieldGet(_forca, this), ":FOR\xC7A"));
      } else {
        _classPrivateFieldSet(_forca, this, _classPrivateFieldGet(_forca, this) - 10);
        console.log("".concat(this.nome, " atacou usando ").concat(nomeDoAtaque, " e causou: ").concat(dano, " de dano"));
      }
    }
  }, {
    key: "receberDano",
    value: function receberDano() {
      _classPrivateFieldSet(_hp, this, _classPrivateFieldGet(_hp, this) - 20);
      if (_classPrivateFieldGet(_transformado, this)) {
        _classPrivateFieldSet(_hp, this, _classPrivateFieldGet(_hp, this) - 10);
        console.log("Voce recebeu dano Transformado seu HP: ".concat(_classPrivateFieldGet(_hp, this)));
      } else {
        console.log("Recebeu Dano seu HP: ".concat(_classPrivateFieldGet(_hp, this)));
      }
    }
  }, {
    key: "mostrarHp",
    value: function mostrarHp() {
      console.log("Seu HP: ".concat(_classPrivateFieldGet(_hp, this)));
    }
  }, {
    key: "mostrarForca",
    value: function mostrarForca() {
      console.log("Sua FOR\xC7A: ".concat(_classPrivateFieldGet(_forca, this)));
    }
  }, {
    key: "getForca",
    value: function getForca() {
      return _classPrivateFieldGet(_forca, this);
    }
  }, {
    key: "aumentarForca",
    value: function aumentarForca(porcentagem) {
      _classPrivateFieldSet(_forca, this, Math.floor(_classPrivateFieldGet(_forca, this) * (1 + porcentagem / 100)));
      if (_classPrivateFieldGet(_forca, this) < 70) {
        this.desfazerTransformacao();
      }
    }
  }, {
    key: "transformarSsj",
    value: function transformarSsj() {
      this.aumentarForca(90);
      _classPrivateFieldSet(_transformado, this, true);
      console.log("".concat(this.nome, " se transformou em SUPER SAYAJIN! Sua for\xE7a agora \xE9 ").concat(this.getForca(), "."));
    }
  }, {
    key: "desfazerTransformacao",
    value: function desfazerTransformacao() {
      _classPrivateFieldSet(_transformado, this, false);
      console.log("".concat(this.nome, " voltou \xE0 sua forma normal."));
    }
  }]);
}();
var Sayadins = /*#__PURE__*/function (_Dragonbal2) {
  function Sayadins(nome) {
    _classCallCheck(this, Sayadins);
    return _callSuper(this, Sayadins, [nome, "Sayadin"]);
  }
  _inherits(Sayadins, _Dragonbal2);
  return _createClass(Sayadins);
}(Dragonbal);
var goku = new Sayadins();
goku.setNome("Goku");
console.log('------------------------------------------------------------------------------------------------------------');
goku.mostrarForca();
goku.mostrarHp();
console.log('------------------------------------------------------------------------------------------------------------');
goku.atacar('Kamehamehaaaa');
console.log('------------------------------------------------------------------------------------------------------------');
goku.mostrarForca();
console.log('------------------------------------------------------------------------------------------------------------');
goku.receberDano();
console.log('------------------------------------------------------------------------------------------------------------');
goku.transformarSsj();
console.log('------------------------------------------------------------------------------------------------------------');
goku.atacar('Big Kamehamehaaaa');
console.log('------------------------------------------------------------------------------------------------------------');
goku.atacar('Big Kamehamehaaaa');
console.log('------------------------------------------------------------------------------------------------------------');
goku.atacar('Big Kamehamehaaaa');
console.log('------------------------------------------------------------------------------------------------------------');
goku.atacar('Big Kamehamehaaaa');
console.log('------------------------------------------------------------------------------------------------------------');
goku.atacar('Big Kamehamehaaaa');
console.log('------------------------------------------------------------------------------------------------------------');
goku.atacar('Big Kamehamehaaaa');
console.log('------------------------------------------------------------------------------------------------------------');
goku.atacar('Big Kamehamehaaaa');
console.log('------------------------------------------------------------------------------------------------------------');