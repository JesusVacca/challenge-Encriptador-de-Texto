// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

/**
 * Estos son los arrays que estaré usando para el reto
 */
const vocales = ['a','e','i','o','u'];
const vocalesEncriptadas = [
    'ai','enter','imes','ober','ufat'
]




/**
 * 
 * @param {String} frase -> Es la frase que se va a encriptar o desencriptar
 * @param {boolean} encriptar -> indica si el texto debe ser encriptado o no
 * @returns -> Retorna la frase nueva
 */

function encriptarText(frase,encriptar = true) {

    let nuevaFrase;
    
    if(encriptar){
        nuevaFrase = frase.split('');
        nuevaFrase.forEach(function(elemento,indice,array){
            for (let index = 0; index < vocales.length; index++) {
                if(elemento == vocales[index]) array[indice] = vocalesEncriptadas[index];
            }
        })
        nuevaFrase = nuevaFrase.join('');
    //Desencripta el texto
    }else{
        nuevaFrase = frase;
        for (let index = 0; index < vocalesEncriptadas.length; index++) {
            const regex = new RegExp(vocalesEncriptadas[index], 'g');
            nuevaFrase = nuevaFrase.replace(regex, vocales[index]);
        }
    }

    return nuevaFrase;
}

// Eventos de los botones 
let textarea = document.getElementById('textarea');
let salida = document.getElementById('salida__mensaje');
let texto = '';


document.getElementById('encriptar').addEventListener('click',function(){
    texto = textarea.value;
    if(texto != null || texto != ''){
        salida.innerHTML = '';
        let parrafo = document.createElement('p');
        parrafo.innerHTML = encriptarText(texto.toLowerCase());
        salida.append(parrafo);
        document.getElementById('textarea').value = '';
    }
})


document.getElementById('desencritar').addEventListener('click',function(){
    texto = textarea.value;
    if(texto != null || texto != ''){
        salida.innerHTML = '';
        let parrafo = document.createElement('p');
        parrafo.innerHTML = encriptarText(texto.toLowerCase(),false);
        salida.append(parrafo);
        document.getElementById('textarea').value = '';
    }
})

document.getElementById('copy').addEventListener('click',function(){
    if(salida.children.length == 1){
        document.getElementById('textarea').value = document.querySelector('.salida__mensaje p').innerHTML;
        salida.innerHTML = '';
    }
})