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
// switch .. case .. default:
