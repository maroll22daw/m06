window.onload = function () {
    document.getElementById('boto').onclick = function(){

let list1 = [ 'Paris', 'Londres', 'Roma', 'Berlin', 'Copenhaguen', 'Viena', 'Lisboa', 'Washington_DC', 'Otawa', 'L\'Havana', 'Santiago', 'Lima',
'Montevideo', 'Canberra', 'Wellington', 'Monròvia', 'Abuja', 'Dakar', 'Tunis', 'Tokyo', 'Seül', 'Beijing', 'Taipe'];

let list2 = ['França',  'UK',  'Itàlia',  'Alemanya',  'Dinamarca',  'Àustria', 'Portugal', 'USA', 'Canada', 'Cuba', 'Xile', 'Perú', 'Uruguay', 'Austràlia',
    'Nova_ Zelanda', 'Libèria', 'Nigèria', 'Senegal', 'Tunísia', 'Japó', 'Corea_Sud', 'Xina', 'Taiwan'];

let list3 = ['Europa', 'Europa', 'Europa', 'Europa' ,'Europa', 'Europa', 'Europa', 'Amèrica', 'Amèrica', 'Amèrica' ,'Amèrica', 'Amèrica', 'Amèrica',
    'Oceania', 'Oceania', 'Àfrica' ,'Àfrica' ,'Àfrica', 'Àfrica' ,'Àsia' ,'Àsia', 'Àsia', 'Àsia']


let filas = Number(prompt("Introdueix el numero de files (màxim 10)"));

document.getElementById('Taula').innerHTML = '';
for(let x=0;x<filas;x++){
    let mostrar = [Math.floor(Math.random() * 23)];
    let llista1=list1[mostrar];
    let llista2=list2[mostrar];
    let llista3=list3[mostrar];
    document.getElementById('Taula').innerHTML+='<tr><td>'+llista1+'</td><td>'+llista2+'</td><td>'+llista3+'</td></tr>';
        }
    }
    
}
