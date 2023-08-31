/*
Exercício 1
const filme = {
    direcao: "Steven Spielberg",
    nome: "Jurassic Park",
    anoDeLancamento: 1998, 
    elenco: ["Tom Hank", "Brad Pitt", "Angelina Jolie", "Tom Holland"],
    visto: true
};

console.log(filme.direcao);
console.log(filme.nome);
console.log(filme.anoDeLancamento);
console.log(filme["elenco"]);
console.log(filme["visto"]);
*/

/*
Exercício 2
const pessoa = {
    nome: "Rodolfo",
    idade: 23,
    generoMusical: "Rock"
};
*/

/*
Forma 1
console.log("O nome da pessoa é " + pessoa.nome + " ela tem " + pessoa.idade + " anos e gosta muito de " + pessoa.generoMusical + ".");
*/
/*
Forma 2
const frase = `O nome da pessoa é ${pessoa.nome} ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}.`;
console.log(frase);
*/

/*
Execício 3
const filme = {
    direcao: "Steven Spielberg",
    nome: "Jurassic Park",
    anoDeLancamento: 1998, 
    elenco: ["Tom Hank", "Brad Pitt", "Angelina Jolie", "Tom Holland"],
    visto: true
};

filme.personagens = ["T-Rex", "Velociraptor", "Brontossauro", "Irritator"];
console.log(filme.elenco[0], "-", filme.personagens[0]);
console.log(filme.elenco[1], "-", filme.personagens[1]);
console.log(filme.elenco[2], "-", filme.personagens[2]);
console.log(filme.elenco[3], "-", filme.personagens[3]);
filme.elenco[0] = "Xuxa";

console.log(filme);
*/

/*
const estudante2022 = {
    nome: "Anderson",
    idade: 15
};

const estudante2023 = {
    ...estudante2022
    idade:16
};

console.log(estudante2022);
console.log(estudante2023)
*/

/*
Exercício 4

const pessoa = {
    nome: "Rodolfo",
    idade: 23,
    generoMusical: "Rock"
};

const alterarPessoa = (obj) => {
const novaPessoa = {
    ...obj,
    comidasPreferidas: ["xis", "lasanha", "pizza"],
    melhorAmigo: {
        nome: "Fulano",
        idade: 32
    }
 };


 const frase = `O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas 
 são ${novaPessoa.comidasPreferidas[0]}, ${novaPessoa.comidasPreferidas[1]} e 
 ${novaPessoa.comidasPreferidas[2]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e 
 tem ${novaPessoa.melhorAmigo.idade} anos.`;
 console.log(frase);
};

alterarPessoa(pessoa);
*/



// Exercícios de Interpretação

/*
Exercício 1
Resposta A:

Matheus Nachtergaele
Virgínia Cavendish
canal: "Globo" horario: "14h"
*/

/*
Exercício 2
Resposta A:

nome: "Juca", 	
idade: 3, 	
raca: "SRD"

nome: "Juba", 	
idade: 3, 	
raca: "SRD"

nome: "Jubo", 	
idade: 3, 	
raca: "SRD"

Resposta B:
Copia o objeto e seus propriedades, possibilitando alterações.
*/

/*
Exercício 3
Resposta A:
false
undefined

Resposta B:
'false' foi imprimido no console por ser declarado assim na propriedade do objeto (backender) e 'undefined' foi imprimido porque faltou esta chave dentro do objeto.
*/

/*
const exercicioPessoaApelido = {
            nome: "Guilherme",
            apelidos: ["Gui", "Guga", "Guilhe"]
}

const funcaoExercicioPA = (objeto) => {
            const exercicioResposta = objeto
            console.log(exercicioResposta)
}

funcaoExercicioPA(exercicioPessoaApelido.apelidos)


Resposta B:
const pessoa = {
    nome: "Guilherme",
    apelidos:["Gui", "Guga", "Guilhe"]
}

function mensagem (x){
    console.log(`Sou o ${x.nome}, mas pode me chamar de: ${x.apelidos[0]}, ${x.apelidos[1]} ou ${x.apelidos[2]}.`)
}
mensagem(pessoa)

const pessoa2 = {...pessoa, apelidos:["Gege", "Guil", "Lime"]}
mensagem(pessoa2)
*/

/*
const alterarFuncaoExercicioPA = (mensagem) => {
    const novaFuncaoExercicioPA = {
        ...exercicioPessoaApelido
        nome: "Jonas",
        apelidos: ["Jojo", "Jo", "JJ"]
    }
}
*/

/*
Exercício 2 (Incompleto)
Resposta A:

const primeiraPessoa = {
    nome: "Robson",
    idade: 28,
    profissao: "Médico"
}
const segundaPessoa = {
    nomeDois: "Claiton",
    idadeDois: 42,
    profissaoDois: "Policial"
}

let tamanhoNomePrimeiraPessoa = console.log(primeiraPessoa.nome.length)
let tamanhoProfissaoPrimeiraPessoa = console.log(primeiraPessoa.profissao.length)
let tamanhoSegundaPessoa = console.log(segundaPessoa.nomeDois.length)
let tamanhoProfissaoSegundaPessoa = console.log(segundaPessoa.profissaoDois.length)

const funcaoPessoa = (x) => {
    const resultado = [primeiraPessoa.nome, x.tamanhoNomePrimeiraPessoa, primeiraPessoa.idade, primeiraPessoa.profissao, x.tamanhoProfissaoPrimeiraPessoa]
    return resultado
}

const funcaoPessoaDois = (x) => {
    const resultado = [segundaPessoa.nome, x.tamanhoNomeSegundaPessoa, segundaPessoa.idade, segundaPessoa.profissao, x.tamanhoProfissaoSegundaPessoa]
    return resultado
}


console.log(funcaoPessoa(primeiraPessoa))
console.log(funcaoPessoa(segundaPessoa))
*/