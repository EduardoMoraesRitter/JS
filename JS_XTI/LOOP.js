//estrutura de repetição FOR IN


//exemplo1, percora o arrei
var numero = new array("um", "dois", "tres");
for(var i in numero){
	alert(numero[i]);
}


//exemplo 2, percore as propriedades e os valores da propridade
var car = {
	marca: "nissa",
	modelo: "350z"
};
//vai sempre para frente
for(var props in car){
	alert(props + " = " + car[props]);
}

//exemplo 3, uma lista de objetos, necessario dois FOR IN
var cars = [
	{
		marca: "nissa",
		modelo: "350z"
	},
	{
		marca: "ford",
		modelo: "hhh"
	}
];

for(var arr in cars){
	for(var car in cars[arr]){
		console.log(car + " = " + cars[arr][car]);
	}	
}

//ou
for (var i = cars.length-1; i >= 0; i--) {
	console.log(cars[i]);
};
//ou
for (var i = 0; i < cars.length; i++) {
	console.log(cars[i]);
};
//ou - melhor maneira
for (var i = 0, lista = cars.length; i < lista; i++) {
	console.log(cars[i]);
};
//ou - array com objeto
for (var i = 0; i < cars.length; i++) {
	console.log(cars[i]);
	for (var car in cars[i]) {
		console.log(car + " = " + cars[i][car]);
	};
};


//while (so mente um teste)
var i = 0;
while (i<=3){
	console.log(i);
	i++;
}
//DO..while vai executar pelomenos uma vez
var i = 0;
do{
	console.log(i);
	i++;
}while (i>=3) //(false)