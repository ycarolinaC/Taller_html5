const recibir=()=>{
    var datos =localStorage.getItem("valor1");   
    console.log("vamos por buen camino ",datos);   
    var contenedorC = document.getElementById("contenedor");
    contenedorC.className=datos;
    var datos1 =localStorage.getItem("valor2");  
    console.log("vamos por buen camino ",datos1); 
    var contenedorP = document.getElementById("botonA");
    contenedorP.className=datos1;

}