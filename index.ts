const add = (a: number, b: number): string => {
    const sum = a + b;
    return `A soma é: ${sum}`
}

const printNames = (nameList: string[]) => {
    nameList.forEach((name) => console.log(name));
}

// string, number e boolean

add(10, 10);