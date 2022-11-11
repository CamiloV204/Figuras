function encender() {
    var bombilla = document.getElementById('foco');
    bombilla.src ='img/pic_bulbon.gif';
}
function apagar(){
    var bombilla1 = document.getElementById('foco');
    bombilla1.src = 'img/pic_bulboff.gif';
}
function ocultar(){
    var bombilla =document.getElementById('foco');
    bombilla.style.display='none';
}
function mostrar(){
    var bombilla = document.getElementById('foco');
    bombilla.style.display = 'block';
}
function fondo(){
    var fondo = document.getElementById('fondo');
    fondo.style.background=  '#7fff00';
}
function volver(){
    var fondo = document.getElementById('fondo');
    fondo.style.background=  '#ffffff';
}

function color(){
    var color = prompt("ingresar un color en ingles")
    var fondo = document.getElementById('fondo');
    fondo.style.background= color;
}

function cambiarSize(){
    var fondo = document.getElementById('foco');
    fondo.style.cssText="transition: 2s;background-color:purple; width: 250px;"
}

function circulo(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("circulo");
}

function rombo(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("rombo");
}

function arriba(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("top");
}

function izquierda(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("Left");
}

function abajo(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("Butom");
}

function derecha(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("Right")
}

function diagonaliz(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("DiagonalIzSup")
}
function diagonalde(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("DiagonalDeInf")
}
function triangulo() {
    var figura= document.getElementById('figura');
    figura.classList.toggle("triangulo")
}



function mostrargif(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("gif")  
}
function luna(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("luna")  
}
function semicirculo(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("semicirculo")  
}