//produto herança
var Product = Object.create(CoisaBase);

Product.caso2 = function (nome) {
  alert('nome product: ' + nome);
};

Product.caso3 = function (nome) {
  ProductB2.casoX(nome);
};
