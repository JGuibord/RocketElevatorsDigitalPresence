function residential(){
    var apts = parseInt(document.getElementById('#num-apartments').value);
    var flos = parseInt(document.getElementById('#num-floors').value);
    
    var af = apts/flos;

    console.log(af);
};