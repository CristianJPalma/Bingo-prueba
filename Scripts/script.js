document.addEventListener('DOMContentLoaded', function(){
let bingo = [];
let iteracion1
let iteracion2
let contador = 0;
let tabla;
let imprimir = '';
for(iteracion1 = 0; iteracion1<5; iteracion1++){
    let interno = [];
    for (iteracion2 = 0; iteracion2<5; iteracion2++){
        contador = contador + 1;
        tabla = contador * 2;
        interno.push(tabla)
        
    }
    bingo.push(interno);
}
console.log(bingo)

for(iteracion2 = 0; iteracion2<5; iteracion2++){
    imprimir += '<table class="col-2 container">'
    imprimir += '<thead>'
    imprimir += '<tr>'
    imprimir += '<th class="col-1">B</th>'
    imprimir += '<th class="col-1">I</th>'
    imprimir += '<th class="col-1">N</th>'
    imprimir += '<th class="col-1">G</th>'
    imprimir += '<th class="col-1">O</th>'
    imprimir += '</tr>'
    imprimir += '</thead>'
    imprimir += '<tbody>'

    for(iteracion2 = 0; iteracion2 <5; iteracion2++){
        imprimir += '<tr>'
        imprimir += '<td class="letraB">'+bingo[iteracion2][0]+'</td>'
        imprimir += '<td class="letraI">'+bingo[iteracion2][1]+'</td>'
        imprimir += '<td class="letraN">'+bingo[iteracion2][2]+'</td>'
        imprimir += '<td class="letraG">'+bingo[iteracion2][3]+'</td>'
        imprimir += '<td class="letraO">'+bingo[iteracion2][4]+'</td>'

        imprimir += '</tr>'
    }
    imprimir += '</tbody>'
    imprimir += '</table>'


}


document.getElementById('tablas').innerHTML = imprimir;

// X1
console.log("equis X1\n");
for(iteracion1 = 0; iteracion1<3; iteracion1++){
    for(iteracion2 = 0; iteracion2<3; iteracion2++){
        if(iteracion1 % 2==0 && iteracion2 % 2==0){
            console.log(bingo[iteracion1][iteracion2]+"")
        }
        else if(iteracion1 % 2==1 && iteracion2 % 2==1){
            console.log(bingo[iteracion1][iteracion2]+"")
        }
        else{
            console.log("")
        }
    }    
}
// X2
console.log("equis X2\n");
for(iteracion1 = 0; iteracion1<3; iteracion1++){
    for(iteracion2 = 2; iteracion2<5; iteracion2++){
        if(iteracion1 % 2==0 && iteracion2 % 2==0){
            console.log(bingo[iteracion1][iteracion2]+"")
        }
        else if(iteracion1 % 2==1 && iteracion2 % 2==1){
            console.log(bingo[iteracion1][iteracion2]+"")
        }
        else{
            console.log("")
        }
    }    
}
// X3
console.log("equis X3\n");
for(iteracion1 = 2; iteracion1<5; iteracion1++){
    for(iteracion2 = 1; iteracion2<4; iteracion2++){
        if(iteracion1 % 2==1 && iteracion2 % 2==0){
            console.log(bingo[iteracion1][iteracion2]+"")
        }
        else if(iteracion1 % 2==0 && iteracion2 % 2==1){
            console.log(bingo[iteracion1][iteracion2]+"")
        }
        else{
            console.log("")
        }
    }    
}
// X Grande
console.log("equis grande\n");
for (iteracion1=0;iteracion1<5;iteracion1++) {
    for (iteracion2=0;iteracion2<5;iteracion2++) {
        if (iteracion1==iteracion2){
            console.log(bingo[iteracion1][iteracion2]);
        }
        else if (iteracion1+iteracion2==4) {
            console.log(bingo[iteracion1][iteracion2]);
        }
        else {
            console.log("");
        }
    }
}
});
function limpiarColores() {
    let celdas = document.getElementsByTagName('td');
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].style.backgroundColor = '';
    }
}
function letraB() {
    limpiarColores();
    let tds = document.getElementsByClassName('letraB');
    let colores = ['lightgreen'];
    for (let color = 0; color < tds.length; color++) {
        let randomColor = colores[Math.floor(Math.random() * colores.length)];
        tds[color].style.backgroundColor = randomColor;
    }
}
function letraI() {
    limpiarColores();
    let tds = document.getElementsByClassName('letraI');
    let colores = ['violet'];
    for (let color = 0; color < tds.length; color++) {
        let randomColor = colores[Math.floor(Math.random() * colores.length)];
        tds[color].style.backgroundColor = randomColor;
    }
}
function letraN() {
    limpiarColores();
    let tds = document.getElementsByClassName('letraN');
    let colores = ['lightblue'];
    for (let color = 0; color < tds.length; color++) {
        let randomColor = colores[Math.floor(Math.random() * colores.length)];
        tds[color].style.backgroundColor = randomColor;
    }
}
function letraG() {
    limpiarColores();
    let tds = document.getElementsByClassName('letraG');
    let colores = ['lightyellow'];
    for (let color = 0; color < tds.length; color++) {
        let randomColor = colores[Math.floor(Math.random() * colores.length)];
        tds[color].style.backgroundColor = randomColor;
    }
}
function letraO() {
    limpiarColores();
    let tds = document.getElementsByClassName('letraO');
    let colores = ['bisque'];
    for (let color = 0; color < tds.length; color++) {
        let randomColor = colores[Math.floor(Math.random() * colores.length)];
        tds[color].style.backgroundColor = randomColor;
    }
}
function colorearNumero(numero, color) {
    let celdas = document.getElementsByTagName('td');
    for (let i = 0; i < celdas.length; i++) {
        if (celdas[i].textContent.trim() === numero.toString()) {
            celdas[i].style.backgroundColor = color;
        }
    }
}
let bingo = [];
let iteracion1
let iteracion2
let contador = 0;
let tabla;
let imprimir = '';
for(iteracion1 = 0; iteracion1<5; iteracion1++){
    let interno = [];
    for (iteracion2 = 0; iteracion2<5; iteracion2++){
        contador = contador + 1;
        tabla = contador * 2;
        interno.push(tabla)
        
    }
    bingo.push(interno);
}
function xGrande() {
    limpiarColores();
    colorearNumero(bingo[0][0], 'green');
    colorearNumero(bingo[0][4],'green');
    colorearNumero(bingo[1][1],'green');
    colorearNumero(bingo[1][3],'green');
    colorearNumero(bingo[2][2],'green');
    colorearNumero(bingo[3][1],'green');
    colorearNumero(bingo[3][3],'green');
    colorearNumero(bingo[4][0],'green');
    colorearNumero(bingo[4][4],'green');
}

function primeraX() {
    limpiarColores();
    colorearNumero(bingo[0][0], 'blue');
    colorearNumero(bingo[0][2], 'blue');
    colorearNumero(bingo[1][1], 'blue');
    colorearNumero(bingo[2][0], 'blue');
    colorearNumero(bingo[2][2], 'blue');
}
function segundaX() {
    limpiarColores();
    colorearNumero(bingo[0][2], 'yellow');
    colorearNumero(bingo[0][4], 'yellow');
    colorearNumero(bingo[1][3], 'yellow');
    colorearNumero(bingo[2][2], 'yellow');
    colorearNumero(bingo[2][4], 'yellow');
}
function terceraX() {
    limpiarColores();
    colorearNumero(bingo[2][1], 'brown');
    colorearNumero(bingo[2][3], 'brown');
    colorearNumero(bingo[3][2], 'brown');
    colorearNumero(bingo[4][1], 'brown');
    colorearNumero(bingo[4][3], 'brown');
}
