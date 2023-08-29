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
Exercício 4 (Incompleto)
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
    };
 };


 const frase = `O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas 
 são ${novaPessoa.comidasPreferidas[0]}, ${novaPessoa.comidasPreferidas[1]} e 
 ${novaPessoa.comidasPreferidas[2]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e 
 tem ${novaPessoa.melhorAmigo.idade} anos.`;
 console.log(frase);
};

alterarPessoa(pessoa);
*/