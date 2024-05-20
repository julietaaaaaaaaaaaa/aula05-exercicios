class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    
    }
    saudacao(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade}anos.`);
    } 
    //01
    verificaMaioridade (){
        if (this.idade >= 18){
        console.log("É maior de idade");
        } else{
        console.log("É menor de idade");
        }
    }
    //02
    idadeEmdias(){
      console.log(this.idade * 365);
    }
    //03
    verificapessoaIdosa(){
        if (this.idade >= 60){
            console.log("É uma pessoa idosa");
            } else{
            console.log("Não é uma pessoa idosa");
            }
    }
    //04
    idadeProximoano(){
        console.log(this.idade + 1);

    }
    //05
    retornaDespedida(){
       console.log(`Até logo ${this.nome}`);

}
//06
    saudacaoformal(){
        if(this.idade > 59){
            console.log(`Olá Sr.(a) ${this.nome}` );
        }
        else if(this.idade < 60){
            console.log(`Olá ${this.nome} `);
        }
    }


}
let pessoa1 = new Pessoa ("João", 30);
let pessoa2 = new Pessoa ("Maria", 25);

pessoa2.verificaMaioridade();

pessoa1.idadeEmdias();
 
pessoa1.verificapessoaIdosa();

pessoa1.idadeProximoano();

pessoa1.retornaDespedida();

pessoa2.saudacaoformal();





