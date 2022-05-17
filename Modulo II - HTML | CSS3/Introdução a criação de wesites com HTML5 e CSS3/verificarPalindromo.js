function verifyPalin(string){
    if(!string) return;

    return (string.split("").reverse().join("") === string);
}


console.log(verifyPalin("tenet"))
