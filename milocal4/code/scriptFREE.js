
function obtenerEstadoNegocio() {
    // Obtiene la fecha y hora actual
    const fechaActual = new Date();
    const diaActual = fechaActual.getDay(); // Número del día (0 es domingo, 1 es lunes, etc.)
    const horaActual = fechaActual.getHours(); // Hora actual (0-23)
    
    // Verifica si está abierto o cerrado
    const estaAbierto = horarios[horaActual][diaActual];
    
    // Devuelve la imagen según el estado
    return estaAbierto ? "a3_status.png" : "a3_status_2.png";
}
// Selecciona la imagen y cambia el src según el horario
function actualizarImagen() {
    const imagenstatus = document.getElementById('imagenstatus');
    const nuevaImagen = obtenerEstadoNegocio(); // Devuelve "abierto.png" o "cerrado.png"
    imagenstatus.src = `../${nuevaImagen}`; // Cambia la fuente de la imagen
}

// Llama a la función cuando se carga la página
window.onload = actualizarImagen;



// Obtenemos el tbody de la tabla donde insertaremos las filas
const tbody = document.getElementById('horarios-table-body');

// Etiquetas para los días de la semana
const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const horasDia = ["12 am", "1 am", "2 am", "3 am", "4 am", "5 am", "6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm", "9 pm", "10 pm", "11 pm"];

// Obtenemos la hora y el día actuales
const fechaActual = new Date();
const horaActual = fechaActual.getHours();
const diaActual = fechaActual.getDay();  // 0 es Domingo, 1 es Lunes, etc.

// Definimos el rango de horas: 3 horas antes y 7 horas después de la hora actual
const horasInicio = (horaActual - 3 + 24) % 24;  // Aseguramos que no sea negativo
const horasFin = (horaActual + 7) % 24;

// Variable para manejar si está en modo 24 horas o en el rango original
let mostrando24Horas = false;

// Función para generar un rango circular de horas (considerando el ciclo de 24 horas)
function generarRangoHoras(inicio, fin) {
const horasRango = [];
for (let i = inicio; i !== fin; i = (i + 1) % 24) {
horasRango.push(i);
}
horasRango.push(fin);  // Añadimos la última hora
return horasRango;
}

// Función para generar la tabla
function generarTabla(horasRango) {
// Limpiamos el contenido anterior de la tabla
tbody.innerHTML = '';

// Recorremos las horas en el rango calculado para generar las filas de la tabla
for (let i = 0; i < horasRango.length; i++) {
const hora = horasRango[i];

// Creamos una nueva fila para cada hora
const fila = document.createElement('tr');

// Creamos la celda de la hora
const horaCelda = document.createElement('td');
horaCelda.textContent = horasDia[hora]; // Ponemos la hora en formato 12h (am/pm)
fila.appendChild(horaCelda); // Añadimos la celda de la hora a la fila

// Recorremos los días de la semana (0 a 6, es decir, Domingo a Sábado)
for (let dia = 0; dia < 7; dia++) {
    const celdaDia = document.createElement('td');

    // Verificamos si está abierto o cerrado (esto depende de tu lógica en el arreglo horarios)
    if (horarios[hora][dia]) {
        celdaDia.classList.add('open');  // Si está abierto, clase 'open'
    } else {
        celdaDia.classList.add('closed'); // Si está cerrado, clase 'closed'
    }

    // Verificamos si es la hora y día actuales para añadir la palomita blanca
    if (hora === horaActual && dia === diaActual) {
        const icono = document.createElement('span');
        icono.innerHTML = '&#10003;';  // Carácter HTML para palomita (✔)
        icono.style.color = 'white';  // Cambiamos el color de la palomita a blanco
        celdaDia.appendChild(icono);  // Añadimos el ícono a la celda correspondiente
    }

    // Añadimos la celda del día a la fila
    fila.appendChild(celdaDia);
}

// Añadimos la fila completa al tbody
tbody.appendChild(fila);
}
}

// Obtenemos el rango de horas original (3 horas antes y 7 horas después)
const horasRango = generarRangoHoras(horasInicio, horasFin);

// Generamos la tabla inicial con el rango original
generarTabla(horasRango);

// Función para alternar entre el rango original y 24 horas
function toggleRango() {
const toggleButton = document.getElementById('toggleButton');

if (mostrando24Horas) {
// Si estamos mostrando 24 horas, volvemos al rango original
const horasRangoOriginal = generarRangoHoras(horasInicio, horasFin);
generarTabla(horasRangoOriginal);
toggleButton.textContent = "¡24 horas!";
mostrando24Horas = false;
scrollToSection('b3')
} else {
// Si estamos en el rango original, cambiamos a mostrar 24 horas
const horasRangoCompleto = generarRangoHoras(0, 23);  // Mostrar de 0 a 23 horas
generarTabla(horasRangoCompleto);
toggleButton.textContent = "Regresar";
mostrando24Horas = true;
scrollToSection('b3')
}
}










let estiloCambiado = false;
const imagenx = document.getElementById('imagenx');
const imagenlogo = document.getElementById('imagenlogo');
const backmain = document.getElementById('backmain');
const paths = document.querySelectorAll('#backmain path');
const b1_news = document.getElementById('b1_news');
const paths2 = document.querySelectorAll('#b1_news path');
const paths3 = document.querySelectorAll('#b1_news2 path');
//const b2_sp = document.getElementById('b2_sp');
//const b2_sp2 = document.getElementById('b2_sp2');
const paths_sp1 = document.querySelectorAll('#b2_sp path');
const paths_sp2 = document.querySelectorAll('#b2_sp2 path');
const paths4 = document.querySelectorAll('#b3_horario path');
const paths5 = document.querySelectorAll('#b3_horario2 path');
const c1_contacto = document.getElementById('c1_contacto');
const c1_contacto2 = document.getElementById('c1_contacto2');
const paths6 = document.querySelectorAll('#c1_contacto path');
const paths7 = document.querySelectorAll('#c1_contacto2 path');
const c2_fotos = document.getElementById('c2_fotos');
const c2_fotos2 = document.getElementById('c2_fotos2');
const paths8 = document.querySelectorAll('#c3_ubicacion path');
const paths9 = document.querySelectorAll('#c3_ubicacion2 path');
const d1_share = document.getElementById('d1_share');
const d1_share2 = document.getElementById('d1_share2');
const d2_promo = document.getElementById('d2_promo');
const d2_promo2 = document.getElementById('d2_promo2');
const d3_admin = document.getElementById('d3_admin');
//const d3_admin2 = document.getElementById('d3_admin2');
const paths10 = document.querySelectorAll('#d3_admin path');
const paths11 = document.querySelectorAll('#d3_admin2 path');
const z_backtop1 = document.getElementById('z_backtop1');
const z_backtop2 = document.getElementById('z_backtop2');
const z_backtop3 = document.getElementById('z_backtop3');
const z_backtop4 = document.getElementById('z_backtop4');
const z_backtop5 = document.getElementById('z_backtop5');
const z_backtop6 = document.getElementById('z_backtop6');
const z_backtop7 = document.getElementById('z_backtop7');
const z_backtop8 = document.getElementById('z_backtop8');
const z_backtop9 = document.getElementById('z_backtop9');
// Selecciona todas las imágenes con la clase 'circle-imageX'
var images = document.querySelectorAll('.circle-image-balls');

function goToParentIndex() {
// Navegar un nivel hacia arriba y abrir index.html
window.location.href = "../index.html";
}

function cambiarEstilo() {
    if (estiloCambiado) {
        // Recorre todas las imágenes seleccionadas
        images.forEach(function(image) {
            image.style.borderColor = 'black'; // Cambia a negro                    
        })                
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        imagenx.src = "../img/pixel_white.png"; // Cambia esto por la ruta de tu imagen del sol
        imagenx.alt = "Sol";
        imagenlogo.src = "../img/MiLocal.png"; // Cambia esto por la ruta de tu imagen del sol
        imagenlogo.alt = "Sol";
        document.getElementById('sun').querySelector('path').setAttribute('fill', 'black');      // Sun
        document.getElementById('moon').querySelector('path').setAttribute('fill', 'black');     // Moon
        document.getElementById('sun').querySelector('line').setAttribute('stroke', 'black');    // Line
        document.getElementById('backmain').querySelector('path').setAttribute('fill', 'black'); // Backmain Arrow
        paths[1].setAttribute('fill', 'black');                                                  // Backmain Rayita
        paths2[1].setAttribute('fill', 'black');                                                 // B1_News
        paths3[1].setAttribute('fill', 'black');                                                 // B1_News2
        //document.getElementById('b2_sp').querySelector('path').setAttribute('fill', 'black');    // B2_SP
        //document.getElementById('b2_sp2').querySelector('path').setAttribute('fill', 'black');    // B2_SP2
        paths4[0].setAttribute('fill', 'black'); // B3
        paths4[1].setAttribute('fill', 'black'); // B3
        paths4[2].setAttribute('fill', 'black'); // B3
        paths5[0].setAttribute('fill', 'black'); // B3 2
        paths5[1].setAttribute('fill', 'black'); // B3 2
        paths5[2].setAttribute('fill', 'black'); // B3 2
        document.getElementById('c1_contacto').querySelector('path').setAttribute('fill', 'black');
        document.getElementById('c1_contacto2').querySelector('path').setAttribute('fill', 'black');
        paths6[0].setAttribute('fill', 'black'); // C1
        paths6[1].setAttribute('fill', 'black'); // C1
        paths6[2].setAttribute('fill', 'black'); // C1
        paths7[0].setAttribute('fill', 'black'); // C1 2
        paths7[1].setAttribute('fill', 'black'); // C1 2
        paths7[2].setAttribute('fill', 'black'); // C1 2
        document.getElementById('c2_fotos').querySelector('path').setAttribute('fill', 'black');
        document.getElementById('c2_fotos2').querySelector('path').setAttribute('fill', 'black');
        document.getElementById('c1_contacto').querySelector('path').setAttribute('fill', 'black');
        paths8[0].setAttribute('fill', 'black'); // C3
        paths8[1].setAttribute('fill', 'black'); // C3
        paths8[2].setAttribute('fill', 'black'); // C3
        paths9[0].setAttribute('fill', 'black'); // C3 2
        paths9[1].setAttribute('fill', 'black'); // C3 2
        paths9[2].setAttribute('fill', 'black'); // C3 2
        document.getElementById('d1_share').querySelector('path').setAttribute('fill', 'black'); // D1
        document.getElementById('d1_share2').querySelector('path').setAttribute('fill', 'black'); // D1 2
        document.getElementById('d2_promo').querySelector('path').setAttribute('fill', 'black'); // D2
        document.getElementById('d2_promo2').querySelector('path').setAttribute('fill', 'black'); // D2 2   
        //document.getElementById('d3_admin').querySelector('path').setAttribute('fill', 'black'); // D3
        //document.getElementById('d3_admin2').querySelector('path').setAttribute('fill', 'black'); // D3 2  
        paths10[1].setAttribute('fill', 'black'); // D3 
        paths10[2].setAttribute('fill', 'black'); // D3           
        paths11[1].setAttribute('fill', 'black'); // D3 2
        paths11[2].setAttribute('fill', 'black'); // D3 2   
        paths_sp1[0].setAttribute('fill', 'black'); // 
        paths_sp1[1].setAttribute('fill', 'black'); // 
        paths_sp1[2].setAttribute('fill', 'black'); //      
        paths_sp2[0].setAttribute('fill', 'black'); // 
        paths_sp2[1].setAttribute('fill', 'black'); // 
        paths_sp2[2].setAttribute('fill', 'black'); //                                                  
        document.getElementById('z_backtop1').querySelector('path').setAttribute('fill', 'black');
        document.getElementById('z_backtop2').querySelector('path').setAttribute('fill', 'black');
        document.getElementById('z_backtop3').querySelector('path').setAttribute('fill', 'black');
        document.getElementById('z_backtop4').querySelector('path').setAttribute('fill', 'black');
        document.getElementById('z_backtop5').querySelector('path').setAttribute('fill', 'black');
        document.getElementById('z_backtop6').querySelector('path').setAttribute('fill', 'black');
        document.getElementById('z_backtop7').querySelector('path').setAttribute('fill', 'black');
        document.getElementById('z_backtop8').querySelector('path').setAttribute('fill', 'black');
        document.getElementById('z_backtop9').querySelector('path').setAttribute('fill', 'black');
    } else {
        // Recorre todas las imágenes seleccionadas
        images.forEach(function(image) {
            image.style.borderColor = 'white'; // Cambia a negro                    
        })                 
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";    
        imagenx.src = "../img/pixel_black.png"; // Cambia esto por la ruta de tu imagen de la luna
        imagenx.alt = "Luna";
        imagenlogo.src = "../img/MiLocalblack.png"; // Cambia esto por la ruta de tu imagen del sol
        imagenlogo.alt = "Luna";
        document.getElementById('sun').querySelector('path').setAttribute('fill', 'white');      // Sun
        document.getElementById('moon').querySelector('path').setAttribute('fill', 'white');     // Moon
        document.getElementById('sun').querySelector('line').setAttribute('stroke', 'white');    // Line
        document.getElementById('backmain').querySelector('path').setAttribute('fill', 'white'); // Backmain Arrow
        paths[1].setAttribute('fill', 'white');                                                  // Backmain Rayita
        paths2[1].setAttribute('fill', 'white');                                                 // B1_News
        paths3[1].setAttribute('fill', 'white');                                                 // B1_News2
        //document.getElementById('b2_sp').querySelector('path').setAttribute('fill', 'white');    // B2_SP
        //document.getElementById('b2_sp2').querySelector('path').setAttribute('fill', 'white');    // B2_SP2
        paths4[0].setAttribute('fill', 'white'); // B3
        paths4[1].setAttribute('fill', 'white'); // B3
        paths4[2].setAttribute('fill', 'white'); // B3
        paths5[0].setAttribute('fill', 'white'); // B3 2
        paths5[1].setAttribute('fill', 'white'); // B3 2
        paths5[2].setAttribute('fill', 'white'); // B3 2
        document.getElementById('c1_contacto').querySelector('path').setAttribute('fill', 'white');
        document.getElementById('c1_contacto2').querySelector('path').setAttribute('fill', 'white');
        paths6[0].setAttribute('fill', 'white'); // C1
        paths6[1].setAttribute('fill', 'white'); // C1
        paths6[2].setAttribute('fill', 'white'); // C1
        paths7[0].setAttribute('fill', 'white'); // C1 2
        paths7[1].setAttribute('fill', 'white'); // C1 2   
        paths7[2].setAttribute('fill', 'white'); // C1 2               
        document.getElementById('c2_fotos').querySelector('path').setAttribute('fill', 'white');
        document.getElementById('c2_fotos2').querySelector('path').setAttribute('fill', 'white');                
        document.getElementById('c1_contacto').querySelector('path').setAttribute('fill', 'white');
        paths8[0].setAttribute('fill', 'white'); // C3
        paths8[1].setAttribute('fill', 'white'); // C3
        paths8[2].setAttribute('fill', 'white'); // C3
        paths9[0].setAttribute('fill', 'white'); // C3 2
        paths9[1].setAttribute('fill', 'white'); // C3 2
        paths9[2].setAttribute('fill', 'white'); // C3 2
        document.getElementById('d1_share').querySelector('path').setAttribute('fill', 'white'); // D1
        document.getElementById('d1_share2').querySelector('path').setAttribute('fill', 'white'); // D1 2 
        document.getElementById('d2_promo').querySelector('path').setAttribute('fill', 'white'); // D2
        document.getElementById('d2_promo2').querySelector('path').setAttribute('fill', 'white'); // D2 2   
        //document.getElementById('d3_admin').querySelector('path').setAttribute('fill', 'white'); // D3
        //document.getElementById('d3_admin2').querySelector('path').setAttribute('fill', 'white'); // D3 2 
        paths10[1].setAttribute('fill', 'white'); // D3 
        paths10[2].setAttribute('fill', 'white'); // D3                
        paths11[1].setAttribute('fill', 'white'); // D3 2
        paths11[2].setAttribute('fill', 'white'); // D3 2   
        paths_sp1[0].setAttribute('fill', 'white'); // 
        paths_sp1[1].setAttribute('fill', 'white'); // 
        paths_sp1[2].setAttribute('fill', 'white'); //      
        paths_sp2[0].setAttribute('fill', 'white'); // 
        paths_sp2[1].setAttribute('fill', 'white'); // 
        paths_sp2[2].setAttribute('fill', 'white'); //                                                                   
        document.getElementById('z_backtop1').querySelector('path').setAttribute('fill', 'white');
        document.getElementById('z_backtop2').querySelector('path').setAttribute('fill', 'white');
        document.getElementById('z_backtop3').querySelector('path').setAttribute('fill', 'white');
        document.getElementById('z_backtop4').querySelector('path').setAttribute('fill', 'white');
        document.getElementById('z_backtop5').querySelector('path').setAttribute('fill', 'white');
        document.getElementById('z_backtop6').querySelector('path').setAttribute('fill', 'white');
        document.getElementById('z_backtop7').querySelector('path').setAttribute('fill', 'white');
        document.getElementById('z_backtop8').querySelector('path').setAttribute('fill', 'white');
        document.getElementById('z_backtop9').querySelector('path').setAttribute('fill', 'white');
    }
estiloCambiado = !estiloCambiado; // Cambia el estado
imagenx.style.display = 'block'; // Muestra la imagen
}