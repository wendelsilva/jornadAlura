var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

/* tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover
    paiDoAlvo.remove();

}); */

// forma reduzida ou fatorada

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500)
    
})


/*pacientes.forEach(function(paciente){
    paciente.addEventListener("dbclick", function(){
        console.log(" Fui clicado com um duplo click");
        this.remove;
    });
});*/