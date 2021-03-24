class Simulacao {

  /*Simulacao é uma classe capaz de realizar qualquer função relacionada aos DDDs escolhidos pelo usuário. Ela
  conta com:
  1. O Objeto ddd.
  2. O objeto ddd possui os atributos origem e destino.
  3. Funções getters e setters para os atributos do objeto ddd.
  4. A função gerar dddDestino que gera as opções da segunda dropbox baseado na escolha do usuário na dropbox 1. 
  5. A função tarifa que retorna o valor da tarifa ligado ao conjunto de DDDs escolhidos.*/

   /*-------------------------- CONSTRUTOR DA CLASSE Simulacao -------------------------------*/
 
  constructor(origem, destino, tempo, plano) {
    this.origem = origem;
    this.destino = destino;
    this.tempo = tempo;
    this.plano = plano;
  }

 /*------------------ MÉTODOS GETTERS E SETTERS DA CLASSE Simulacao --------------------------*/
 
  get origem (){
    return this._origem;
  }

  set origem (origem){
    this._origem = origem;
  }

  get destino (){
    return this._destino;
  }

  set destino (destino){
    this._destino = destino;

  }

  get tempo (){
    return this._tempo;
  }

  set tempo (tempo){
    this._tempo = tempo;

  }

  get plano (){
    return this._plano;
  }

  set plano (plano){
    this._plano = plano;

  }

  /*------------------ MÉTODOS DA CLASSE Simulacao --------------------------*/

  /*O método GerarDDD é responsável por preencher a caixa de seleção do dddDestino com os valores possíveis
  a partir da escolha do usuário no dddOrigem*/
  GerarDDD(value){

    switch (value){
      case "1":
        document.getElementById("opt0").innerHTML = "";
        document.getElementById("opt1").innerHTML = "016";
        document.getElementById("opt2").innerHTML = "017";
        document.getElementById("opt3").innerHTML = "018";  
        break;
      case "2":
        document.getElementById("opt0").innerHTML = "";
        document.getElementById("opt1").innerHTML = "011";
        document.getElementById("opt2").innerHTML = "";
        document.getElementById("opt3").innerHTML = "";
        break;
      case "3":
        document.getElementById("opt0").innerHTML = "";
        document.getElementById("opt1").innerHTML = "011";
        document.getElementById("opt2").innerHTML = "";
        document.getElementById("opt3").innerHTML = "";
        break;
      case "4":
        document.getElementById("opt0").innerHTML = "";
        document.getElementById("opt1").innerHTML = "011";
        document.getElementById("opt2").innerHTML = "";
        document.getElementById("opt3").innerHTML = "";
        break;
        
      default:
        document.getElementById("opt0").innerHTML = "Escolha um DDD de Origem";
        document.getElementById("opt1").innerHTML = "Escolha um DDD de Origem";
        document.getElementById("opt2").innerHTML = "Escolha um DDD de Origem";
        document.getElementById("opt3").innerHTML = "Escolha um DDD de Origem";
    }
  }  

  /*O método GerarTarifa é responsável por, a partir dos DDDs escolhidos pelo usuário, gerar a tarifa correspondente
  àquela ligação. */
  GerarTarifa(origem, destino){

    var tarifa;

  if (origem == 1 && destino == 1){
    tarifa = 1.9;

  } 
  else if(origem == 1 && destino == 2){
    tarifa = 1.7;

  } 
  else if (origem == 1 && destino == 3){
    tarifa = 0.9;

  }
  else if (origem == 2 && destino == 1){
    tarifa = 2.9;

  }
  else if (origem == 3 && destino == 1){
    tarifa = 2.7;

  }
  else if (origem == 4 && destino == 1){
    tarifa = 1.9;

  }

  return tarifa;
  
}

  /*DefinirPlano é responsável por averiguar o plano escolhido pelo usuário e retornar quantos minutos gratis aquele
  plano escolhido oferece.*/
  DefinirPlano(){
    var minutosGratis;

    switch(this.plano){
      case "1":
        minutosGratis = 30;
        break;
      case "2":
        minutosGratis = 60;
        break;
      case "3":
        minutosGratis = 120;
        break;
      default:
    }

    return minutosGratis;
  }
}

/*----------------------------------------------------------------------------------------------------------------- */
/*------------------------------------------ FIM DA CLASSE Simulacao ---------------------------------------------------- */

/*Criando uma instancia da classe Simulacao para que esse objeto em questão possa chamar a função GerarDDD lá no
select dddOrigem do html, dessa maneira conseguirei popular o dddDestino com os devidos valores de ddd a partir
da escolha de dddOrigem do usuário. */
let ddd = new Simulacao();



/* A Função Simular é a função que realiza a simulação quando o botão Simular é clicado. */
function Simular(event){
  
  event.preventDefault();

  /*Agora que o usuário já escolheu seus DDDs podemos colocá-los em seus devidos atributos com um tratamento
  de erros para caso o usuário não escolha algum dos valores. */
  try{
    if (document.getElementById("dddOrigem").value > 0){
      ddd.origem = document.getElementById("dddOrigem").value;
    }else{
      throw "Erro";
    }
  } catch(e){
    alert("Escolha um DDD de origem para prosseguir com a simulação.");
    return 0;
  }
  
  try{
    if (document.getElementById("dddDestino").value > 0){
      ddd.destino = document.getElementById("dddDestino").value;
    }else if (document.getElementById("dddDestino").textContent === "Escolha um DDD de Origem"){
      throw "Erro";
    }else{
      throw "Erro";
    }
  } catch(e){
    alert("Escolha um DDD de destino para prosseguir com a simulação.");
    return 0;
  }

  try{
    if (document.getElementById("tempo").value > 0){
      ddd.tempo = document.getElementById("tempo").value;
    }else{
      throw "Erro 1";
    }
  } catch(e){
    alert("Insira um valor de tempo válido para prosseguir com a simulação.");
    return 0;
  }

  try{
    if (document.getElementById("plano").value > 0){
      ddd.plano = document.getElementById("plano").value;
    }else{
      throw "Erro 1";
    }
  } catch(e){
    alert("Escolha um plano Fale+ para prosseguir com a simulação.");
    return 0;
  }


  /*Definindo outras variáveis necessárias para os cálculos.*/
  var minutosGratis = ddd.DefinirPlano();
  var tempoComPlano = ddd.tempo - minutosGratis;
  var tarifa = ddd.GerarTarifa(ddd.origem, ddd.destino);
  
  var novaTarifa = tarifa + (tarifa  * 0.1);
  var valorSemPlano;
  var valorComPlano;

  /*Se o tempo restante de ligação for 0 ou menor mostrar que com o plano a ligação sai de graça + o preço de 
  uma ligação comum*/
  if (tempoComPlano <= 0){
    valorSemPlano = ddd.tempo * tarifa;

    document.getElementById("complano").innerHTML = "GRÁTIS";
    document.getElementById("semplano").innerHTML ="R$"+ parseFloat(valorSemPlano).toFixed(2);

  }else{ /*Do contrário mostrar os dois preços*/
    valorComPlano = tempoComPlano * novaTarifa;
    valorSemPlano = ddd.tempo * tarifa;

    document.getElementById("complano").innerHTML = "R$"+ parseFloat(valorComPlano).toFixed(2);
    document.getElementById("semplano").innerHTML ="R$"+ parseFloat(valorSemPlano).toFixed(2);
  }
  
}
