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
