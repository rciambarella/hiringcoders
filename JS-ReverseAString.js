console.log(" Exercicio ReverseAString.js 03/07/2021 ");

let newString = '';

function reverseAString(oldString) {
    for (let i = oldString.length; i >= 0; i--) {
        newString += oldString[i];
        console.log(newString);
    }
}

let resultado = reverseAString('Hello Gama Academy')