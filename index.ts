// tipos primitivos
// string
// number
// boolean

let age:number;

//age = "Osvaldo";

// [] lista de alguma coisa

export const setState = (state: string[]) => {
    console.log(state);
}

let nameList = ["Osvaldo", "Petrucio", "Rodolfo"];
nameList.map((name) => name);

setState([...nameList, "Ferdinando"]);

//Inferência
// Só vou atribuir tipagem quando a inferência falha e atribuir o tipo que eu quero

// Casos que a inferência falha (casos que eu preciso apontar os tipos)

// Parâmetros de funções (props estarão inclusas nessa regra)
export const sum = (a: number, b: number) => {
    return a + b;
}

//Lista vazias 
let ageList: number[] = [];

//Variação de tipo (precisaremos apontar tipagem)
// let user: string | null = null;

//Interface: é o um recurso para construirmos tipagens de objeto (descrever um objeto)

interface IUser{
    name: string;
    email: string;
    age: number;
}

let user: IUser | null = null;

export const setUserList = (state: IUser[]) => {
    console.log(state)
}

let userList: IUser[] = [];

const newUser = { name: "Osvaldinho", email: "email@email.com", age: 32};
setUserList([...userList, newUser]);

userList.filter(user => user.name !== "Percival")

const midAge = userList.reduce((prevValue, user) => {
    return (prevValue + user.age)/userList.length;
}, 0);