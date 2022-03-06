const main=()=>{
    let element = document.getElementById("contenedor");
    console.log(element); 
    
}


cambiarColor=(id)=>{
    /*let tema1 = document.querySelector(`#${id}`);*/
    let element = document.querySelector(`#temas`);
    console.log(element.value);
    var contenedorC = document.getElementById("contenedor");
    let bloqueE;
    var variable;
    /*let contenedorC= document.querySelector(`#contenedor`)*/
    console.log(contenedorC);
    switch(Number(element.value)){
        case 1:
            if (contenedorC.className=="bloque2"){
                contenedorC.classList.replace("bloque2", "bloque");
            }
            else if(contenedorC.className=="bloque3"){
                contenedorC.classList.replace("bloque3", "bloque");
            }else{              
            }
            bloqueE=contenedorC.className;  
            break;
        case 2:
            if (contenedorC.className=="bloque"){
                contenedorC.classList.replace("bloque", "bloque2");
            }
            else if(contenedorC.className=="bloque3"){
                contenedorC.classList.replace("bloque3", "bloque2");
            }else{              
            }
            bloqueE=contenedorC.className;  
            break;
        case 3:
            if (contenedorC.className=="bloque"){
                contenedorC.classList.replace("bloque", "bloque3");
            }
            else if(contenedorC.className=="bloque2"){
                contenedorC.classList.replace("bloque2", "bloque3");
            }else{              
            }
            bloqueE=contenedorC.className;  
            break; 
        
    }
    document.getElementById("prueba").innerHTML = bloqueE;
    localStorage.setItem("txtValue", bloqueE);
    console.log("esto e suna prueba",bloqueE)
    
}



const mostarDatos=(id)=>{
    var items = document.getElementById("contenedor");
}