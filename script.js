

let message = prompt("Quel est ton prénom")


function sayHello (firstname, hour) {
    if (hour >= 18){
        message = "Bonsoir " + firstname +" !"
        document.querySelector('h1').innerText = message;
    } else {
        message = "Bonjour " + firstname +" !"
        document.querySelector('h1').innerText = message;
    }
    return message
}

console.log(sayHello(message, 11));
