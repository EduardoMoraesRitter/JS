/*
Objetos, os objetos tem atributos e funçoes.

dados primitivos, nao sao objetos, nao aceitam funçoes mas o tipo primitivo tbm anda junto com o objeto - boolean, number, string

Objetos JS
	Object(generico/primitivo/arrays)
	Boolean
	Number
	String
	Array
	Date
	Math(calculos matematicos)
	RegExp(manupular expreçoes regulares)
	Function(criar funcçoes)

	(para erros)
	Error
	EvalError
	RangeError
	ReferenceError
	SintaceError
	SintaxeError
	TypeError
	URIError

*/

var nome = "edu";

alert(nome);

alert(typeof(nome));

alert(nome.length);
//igual a, fazendo isso por baixo dos panos
alert(new String(nome.length));

//se tiver trabalhando muito com chamada de funçoes e atributos de objeto é melhor que ja cria nossa variavel com o tipo de objeto equivalente
var nomes = new String('edu');








