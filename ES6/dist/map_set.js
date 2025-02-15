"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var meuMap = new Map();
meuMap.set("nome", "Joao"); // Adiciona um par chave-valor ao Map
meuMap.set("stack", "HTML, CSS, JS"); // Adiciona um par chave-valor ao Map
meuMap.set("idade", 27); // Adiciona mais um par chave-valor

console.log(meuMap);
// Resposta: Map(2) { 'nome' => 'Joao', 'idade' => 27 } 
// (recupera todo o conteúdo do Map)

var nome = meuMap.get("nome"); // Obtém o valor associado à chave "nome"
var idade = meuMap.get("idade"); // Obtém o valor associado à chave "idade"

console.log(nome, idade);
// Resposta: Após armazenar as chamadas meuMap.get em uma variável, 
// conseguimos a resposta apenas do valor correspondente à chave específica.
// Saída: "Joao 27"

console.log(meuMap.size);
console.log(meuMap.has("nome"));
console.log(meuMap.size);

// Keys recuperando as chaves 
var _iterator = _createForOfIteratorHelper(meuMap.keys()),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var chave = _step.value;
    console.log(chave); //Resposta: [nome] [stack] [idade]
  }

  // value recuperando os valores  
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var _iterator2 = _createForOfIteratorHelper(meuMap.values()),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var valor = _step2.value;
    console.log(valor); //Resposta: [Joao] [HTML, CSS, JS] [27]
  }

  // entries recuperando as Entradas do map  
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
var _iterator3 = _createForOfIteratorHelper(meuMap.entries()),
  _step3;
try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var entrada = _step3.value;
    console.log(entrada); //Resposta: [ 'nome', 'Joao' ] [ 'stack', 'HTML, CSS, JS' ] [ 'idade', 27 ]
  }

  //Delete foi usado para aparagar a entrada [stack]
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}
meuMap.delete("stack");
console.log(meuMap);
//Resoosta: Map(2) { 'nome' => 'Joao', 'idade' => 27 }

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Criando um conjunto (Set) vazio
var cpfs = new Set();

// Adicionando CPFs ao conjunto (valores únicos)
cpfs.add('80896037851');
cpfs.add('97602273800');
cpfs.add('02523246848');
console.log(cpfs); // Exibe todos os CPFs armazenados no Set

console.log(cpfs.keys()); // Retorna um iterador com as chaves (no Set, as chaves são os próprios valores)
console.log(cpfs.values()); // Retorna um iterador com os valores do Set (igual ao .keys())

cpfs.forEach(function (valor) {
  console.log(valor);
});

// Set, removendo itens dublicados do array, adicionando uma nova const como set, e set nao permite array duplicados
//Um se set nao é um array 
var array = ['Pedro Paulo', 'Matheus Marcos', 'Felipe Fernandez', 'Denis Daniel', 'Denis Daniel', 'Felipe Fernandez'];
var arrayComoSet = new Set([].concat(array));
console.log(arrayComoSet);
/* Resposta:
Set(4) {
    'Pedro Paulo',
    'Matheus Marcos',
    'Felipe Fernandez',
    'Denis Daniel'
} 
*/

// passando Set para um array

var arraySemItemDublicado = _toConsumableArray(arrayComoSet);
console.log(arraySemItemDublicado);
//Reposta: [ 'Pedro Paulo', 'Matheus Marcos', 'Felipe Fernandez', 'Denis Daniel' ]