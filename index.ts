// Como podemos rodar isso em um arquivo .ts sem causar erros?

let employee = {
    code: 10,
    name: 'John',
};

employee.code = 10;
employee.name = "John";

// Como podemos melhorar o esse código usando TS?

type Pessoa = {
    nome: String
    idade: Number | String
    profissao: String
}

let pessoa1: Pessoa = {
    nome: "maria",
    idade: 29,
    profissao: "atriz",
}

let pessoa2: Pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro",
}

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"

};


let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}