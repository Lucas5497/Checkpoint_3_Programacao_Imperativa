//Importação do módulo que está na outra pasta. O que está em parenteses é o caminho para importar o módulo.
let curso = require('./curso');

//Função construtora
function Aluno(nome, quantidadeFaltas, notas){
    
    //Atributos, para imprimir as propriedades dos objetos basta por objeto.atributo, exemplo, console.log(aluno2.nome);
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;

    //Método faltas, quando invocado soma 1 a variável quantidadeFaltas do Aluno. 
    this.faltou = function(){
        this.quantidadeFaltas +=1;
    console.log(this.nome + ' faltou e está com ' + this.quantidadeFaltas + ' faltas');
}   

    //Método calcularMedia, quando invocado soma os elementos do array e divide a soma pela quantidade de elementos do array.
    this.calcularMedia = function(){
        let somaNota = 0;
        
         for(let i=0; i <this.notas.length; i++){
             somaNota += this.notas[i];   
         }
         console.log("A média das notas do(a) " + this.nome + ' é: ' + somaNota / this.notas.length);
         return somaNota / this.notas.length;
    }
}

//Alunos
let aluno1 = new Aluno("José", 5, [8, 8, 6, 7, 6]);
let aluno2 = new Aluno("João", 2, [5, 7, 7, 5, 5]);
let aluno3 = new Aluno("Alice", 2, [8, 8, 9, 7, 6]);
let aluno4 = new Aluno("Lucas", 2, [7, 5, 8, 6, 9]);
let aluno5 = new Aluno("Julia", 2, [5, 5, 7, 6, 5]);


//Acessando as propriedades do objeto curso que está dentro da pasta curso no arquivo index.js


//Método adicionar alunos ao curso
curso.curso.adcionarEstudante(aluno1); 
curso.curso.adcionarEstudante(aluno2);
curso.curso.adcionarEstudante(aluno3);
curso.curso.adcionarEstudante(aluno4);
curso.curso.adcionarEstudante(aluno5);

//console.log(curso);
//acessando a Lista de alunos matriculados no curso
//console.log(curso.curso.listaAlunos);


//Invocando o método faltou obs:o console.log já está dentro da função 
//aluno1.faltou();
//aluno2.faltou();


//console.log(aluno2.nome);
//console.log(aluno1.nome);

//console.log(aluno2.quantidadeFaltas);
//console.log(aluno1.quantidadeFaltas);

//console.log(aluno2.notas);
//console.log(aluno1.notas);

//Invocando o método calcularMedia obs:o console.log está dentro da função
aluno1.calcularMedia();
aluno2.calcularMedia();
aluno3.calcularMedia();
aluno4.calcularMedia();
aluno5.calcularMedia();
//Acessando o resultado dos alunos, aprovado ou reprovado
curso.curso.resultado(aluno1);
curso.curso.resultado(aluno2);





//curso.curso.listaResultado();





//aluno2.calcularMedia();
//curso.cursoresultado(aluno2);

//console.log(curso.curso.listaResultado());


