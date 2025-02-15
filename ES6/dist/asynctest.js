"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Produtos = /*#__PURE__*/function () {
  function Produtos(id, nome, preco) {
    _classCallCheck(this, Produtos);
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }
  return _createClass(Produtos, [{
    key: "exibirProdutos",
    value: function exibirProdutos() {
      console.log("ID: ".concat(this.id, ", Nome: ").concat(this.nome, ", Preco: ").concat(this.preco));
    }
  }]);
}(); // criando instancias de produtos
var produto1 = new Produtos(1, "Teclado", 250);
var produto2 = new Produtos(2, "Notebook", 3500);
var produto3 = new Produtos(3, "Mouse", 150);
var produtos = [produto1, produto2, produto3];
console.log(produtos);

// funcao para procurar se existe um id

function buscarId(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var produto = produtos.find(function (item) {
        return item.id === id;
      });
      if (produto) {
        resolve(produto);
      } else {
        reject("Produto nao encontrado");
      }
    }, 2000);
  });
}
buscarId(5).then(function (produto) {
  return console.log(produto);
}).catch(function (erro) {
  return console.log(erro);
});