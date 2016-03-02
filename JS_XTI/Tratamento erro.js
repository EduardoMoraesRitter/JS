/*
OBJETO Error
message - tras o detalhe dor error
name - traz o tipo de erro
tostring()- message + name

tipo:
evalError - permite q vc podssa executar uma linha no formato javascript(dentro de uma string), nao é muito usado.
RangeError - extrapola o limite numerico
ReferenceError - uma variavel q nao foui definido.
SintaxeErro - erro de sintax, intrução de maneira errada
TypeError - operando diferente do operando esperado
URIError -uso errado de funcoes URI

*/
//try
try{//tente
	var x = a;
	var b = x+10;
	alert(b);	
} catch(err){// pegeu o erro e colocaque em uma variavel
	alert(err.name + " : " + err.message);
	//OU
	alert(err.toString());
} finally{//nao obrigatorio mais, e é executado ocorrendo sim ou nao um erro
	//....
}

//throw
var x = prompt('numero maior q 10');

try{
	if (x<10) {
		throw 'numero menos que 10';//exessao: porde lanaçar um objeto erro ou elemento(string)
	};
	alert(x);	
} catch(err){//assim eu posso escrever a mesagem de erro para o catch
	alert(err.toString());
}

//with - criação um excopo para um determinado bloco de codigo
var Carro = {
	marca : "nissa",
	modelo : "350",
	potencia : {
		cavalos : "350",
		velocidade : "350km/h"
	}
};
//alterar o escopo para acessar de uma maneira mais facil, criando um escopo diferente
with(Carro.potencia){
	alert(cavalos);
	alert(velocidade);
}


