
let Sumar=document.getElementById("Sumar")
let Restar=document.getElementById("Restar")
let Multiplicar=document.getElementById("Multiplicar")
let Dividir=document.getElementById("Dividir")
var textoFinal=document.getElementById("textoFinal")


Sumar.addEventListener("click", (event)=>{
    let numero1=parseInt(document.getElementById("numero1").value)

    let numero2= parseInt(document.getElementById("numero2").value)

    event.preventDefault(); 
    var dato=numero1+numero2
    textoFinal.innerText=dato

    //alert(dato)   
      
})

Restar.addEventListener("click", (event)=>{
    let numero1=parseInt(document.getElementById("numero1").value)

    let numero2= parseInt(document.getElementById("numero2").value)

    event.preventDefault(); 
    var dato=numero1-numero2
    textoFinal.innerText=dato  
   
    
})
Multiplicar.addEventListener("click", (event)=>{
    let numero1=parseInt(document.getElementById("numero1").value)

    let numero2= parseInt(document.getElementById("numero2").value)

    event.preventDefault(); 
    var dato=numero1*numero2
    textoFinal.innerText=dato 
   
    
})
Dividir.addEventListener("click", (event)=>{
    let numero1=parseInt(document.getElementById("numero1").value)

    let numero2= parseInt(document.getElementById("numero2").value)

    event.preventDefault(); 
    var dato=numero1/numero2
    if(numero2==0 ){
        alert("no se puede dividir entre cero")
    }else{
        textoFinal.innerText=dato
    }
     
    
})

