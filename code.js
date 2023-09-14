// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name){
    if (name === true)
         return ("Hello, World!");
    else if (name === false){
        return ("Hello, World!");
    }else if (typeof name === 'number') {
        return ("Hello, World!");
    }else {
        return ("Hello, " + (name) + "!");
    }
}




