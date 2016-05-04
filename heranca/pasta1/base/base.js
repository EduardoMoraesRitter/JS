//Base prototipo
var CoisaBase = {
  caso1: function(nome) {
    
    var _this = this;
    
    setTimeout(function () {
      _this.caso2(nome);
    }, 100);
    
    //CoisaBase.caso3(nome); //assim nao chama o sobrescrito
    _this.caso3(nome);
    
  },
  caso2: function(nome) {
      alert('base nome : ' + nome);
  },
  caso3: function(nome) {
      CoisaBase2.casoX(nome);//vai ser sobre escrito, entao nem vai ser chamado
  }
};
