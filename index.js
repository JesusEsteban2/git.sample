console.log("Greeting loaded");

function greeting() {
    const question = "Dime tu nombre:";
    const userName = prompt(question);
    if (userName === null || userName === "") return;

    const message = `Buenos días ${userName}`;
    alert(message);
}

const button = document.querySelector("button");
button.addEventListener("click", greeting);

/**
 * Errores comunes
 *
 * Reference error: Llamada a elemento no definido.
 * Type error: Error de utilización en un tipo.
 *
 */

function ifEncadenados() {
    const age = 12,
        userName = "Pepe",
        gender = "";

    if (age < 10) {
        console.log("Los niños no pueden entrar");
    } else if (age < 18) {
        console.log("Los menores deben estar acopañados");
    } else {
        console.log("Buenos días ", userName);
    }
}

function switchCase(numero) {
    switch (numero) {
        case 1:
            return "Uno";
            break;
        case 2:
            return "Dos";
            break;
        case 3:
            return "Tres";
            break;
        default:
            return "Otro número";
    }
}

let str = '';

function forBucle {
    for (let i = 0; i < 9; i++) {
        str = str + i;
      }
      
      console.log(str);
      // Expected output: "012345678"
}

function whileLooo (value) {
    let num=0
    while (value){

    }
}

// while, do.. while


function tryObject () {

    const user = {
        userName:"",
        age:"",
        course:"",
    }
 
    user.userName='Pepe'
    user.age=23
    user.course="Full stack"
    
    const userList =[]
    userList.push(user)

    // user.name='Juan'
    // user.age=22
    // user.course="Full stack"
    // Salida:
    //  0-Juan 22 full stack
    //  1-Juan 22 full stack
    
    userList.push({userName:'Juan',age:22,course:"Full stack"})
    console.log(userList)

   

    const matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
    ]

    console.log (matrix[1][1]) // 5
} 
