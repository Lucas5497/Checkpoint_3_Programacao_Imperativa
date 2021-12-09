module.exports = {
    curso: {
        nomeCurso: 'Lógica de programação',
        notaAprovacao: 6,
        faltasMaximas: 5,
        listaAlunos: [],
        //Método que adciona alunos no array listaAlunos do objeto curso.
        adcionarEstudante: function (estudante) {
            this.listaAlunos.push(estudante);
        },

        //Método para saber o status de aprovação.
        resultado: function (aluno){

            let media = aluno.calcularMedia();
            let resultado;

            //Se o aluno tiver  menos faltas que faltas máximas & uma média igual ou acima da nota de aprovação APROVADO
            if (aluno.quantidadeFaltas < this.faltasMaximas && media >= this.notaAprovacao) {
                resultado = console.log(aluno.nome + " foi aprovado" );

            //Se a quantidade de faltas for igual a faltasMaximas & e a média maior que a nota de aprovação + 10% APROVADO 
            } else if(aluno.quantidadeFaltas === this.faltasMaximas && media > (this.notaAprovacao * 1.1)){   
                resultado = console.log(aluno.nome + " atingiu a quantidade maxima de faltas porém foi aprovado pela média maior que 10% da nota de aprovação" );

            //Se não atender a nenhuma das condições acima REPROVADO
            } else {
                resultado = console.log( aluno.nome + " foi reprovado" );
                
            }
            return resultado;
        },

        //Método que percorre o array lista de alunos e retorna a média e se foi aprovado ou não.
        listaResultado: function(){
            let resultadoFinal= [];
            for (let i = 0; i < this.listaAlunos.length; i++) {
               resultadoFinal.push(this.resultado(this.listaAlunos[i]));
            }
            return resultadoFinal;
        }
    }
}




