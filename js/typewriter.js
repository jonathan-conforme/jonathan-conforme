document.addEventListener("DOMContentLoaded", function(){

const nameText = "JONATHAN CONFORME";
const stackText = "DESARROLLADOR FULL-STACK";
const parrafoText = "Soy Ingeniero en Tecnologías de la Información con enfoque en desarrollo web full stack, especialmente en PHP y Laravel. He desarrollado proyectos académicos, personales y colaborativos trabajando en frontend y backend, con experiencia en bases de datos SQL y consultas optimizadas. Aplico arquitectura MVC y buenas prácticas de programación. Tengo conocimientos en metodologías de trabajo colaborativo y me adapto fácilmente al trabajo en equipo. Actualmente fortalezco habilidades en APIs REST y React, dispuesto a aprender nuevas arquitecturas y tecnologías.";



const speed = 100;
const speedparafo =30;

let i = 0;
let j = 0;


function setCursor(activeId){
    document.getElementById("typewriter").classList.remove("cursor");
    document.getElementById("stack").classList.remove("cursor"); 
    

    document.getElementById(activeId).classList.add("cursor");
}

function typeName() {
    setCursor("typewriter");

  if (i < nameText.length) {
    document.getElementById("typewriter").innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeName, speed);
  } else {
    setTimeout(typeStack, 500);
  }
}

function typeStack() {
    setCursor("stack");
  
    if (j < stackText.length) {
    document.getElementById("stack").innerHTML += stackText.charAt(j);
    j++;
    setTimeout(typeStack, speed);
  } else {
    setCursor("typewriter")
  }
  
}

typeName();
});