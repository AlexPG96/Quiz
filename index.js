const pregunta1 = {
    legend: '¿Qué raza de gato es la más grande del mundo?',
    answers: [{
            label: 'GatoComún',
            id: 'gatocomun',
            name: 'gato',
            value: 'gatocomun'
        },
        {
            label: 'GatoPersa',
            id: 'gatopersa',
            name: 'gato',
            value: 'gatopersa'
        },
        {
            label: 'MaineCoon',
            id: 'mainecoon',
            name: 'gato',
            value: 'mainecoon'
        },
        {
            label: 'Sphynx',
            id: 'sphynx',
            name: 'gato',
            value: 'sphynx'
        }
    ],
    respuestaCorrecta: {
        label: 'MaineCoon',
        id: 'mainecoon',
        name: 'gato',
        value: 'mainecoon'
    }
}

const pregunta2 = {
    legend: '¿Qué robot aparece en Star-Wars?',
    answers: [{
            label: 'Wall-E',
            id: 'wall-e',
            name: 'robots',
            value: 'walle'
        },
        {
            label: 'R2D9',
            id: 'R2D9',
            name: 'robots',
            value: 'R2D9'
        },
        {
            label: 'C3PP',
            id: 'C3PP',
            name: 'robots',
            value: 'C3PP'
        },
        {
            label: 'BB-8',
            id: 'BB-8',
            name: 'robots',
            value: 'BB-8'
        }
    ],
    respuestaCorrecta: {
        label: 'BB-8',
        id: 'BB-8',
        name: 'robots',
        value: 'BB-8'
    }
}

const pregunta3 = {
    legend: '¿Cuál es el icono caracteristico de Mac?',
    answers: [{
            label: 'Pepinillo',
            id: 'Pepinillo',
            name: 'mac',
            value: 'pepinillo'
        },
        {
            label: 'Helado',
            id: 'Helado',
            name: 'mac',
            value: 'Helado'
        },
        {
            label: 'Manzana',
            id: 'Manzana',
            name: 'mac',
            value: 'Manzana'
        },
        {
            label: 'Higo',
            id: 'Higo',
            name: 'mac',
            value: 'Higo'
        }
    ],
    respuestaCorrecta: {
        label: 'Manzana',
        id: 'Manzana',
        name: 'mac',
        value: 'Manzana' 
    }
}

const pregunta4 = {
    legend: '¿Cual de estos lugares es un escenario en The Lord Of The Rings?',
    answers: [{
            label: 'Cuevas de Babba-Jagga',
            id: 'Cuevas-de-Babba-Jagga',
            name: 'escenario',
            value: 'Cuevas de Babba Jagga'
        },
        {
            label: 'Tomelloso',
            id: 'Tomelloso',
            name: 'escenario',
            value: 'Tomelloso'
        },
        {
            label: 'Minas de Moria',
            id: 'Minas-de-Moria',
            name: 'escenario',
            value: 'Minas de Moria'
        },
        {
            label: 'Segovia',
            id: 'Segovia',
            name: 'escenario',
            value: 'Segovia'
        }
    ],
    respuestaCorrecta: {
        label: 'Minas de Moria',
        id: 'Minas-de-Moria',
        name: 'escenario',
        value: 'Minas de Moria'
    }
}

const pregunta5 = {
    legend: '¿Cuál es el bucle favorito de Moracho?',
    answers: [{
            label: 'For Dios',
            id: 'for-dios',
            name: 'bucle',
            value: 'for dios'
        },
        {
            label: 'While LoL',
            id: 'while-lol',
            name: 'bucle',
            value: 'while LoL'
        },
        {
            label: 'For',
            id: 'for',
            name: 'bucle',
            value: 'for'
        },
        {
            label: '.map',
            id: 'map',
            name: 'bucle',
            value: 'map'
        }
    ],
    respuestaCorrecta: {
        label: '.map',
        id: 'map',
        name: 'bucle',
        value: 'map'
    }
}


const imprimeLegend = (pregunta) => {
    return `<h2>${pregunta.legend}</h2>`
}

const imprimeRespuesta = (pregunta) => {
    const {label, id, name, value} = pregunta
    return `
        <input type="radio" name="${name}" id="${id}" value="${value}">
        <label for="${id}">${label}</label>
    `
}

const imprimeRespuestas = (pregunta) => {
    const {answers} = pregunta
    return answers.map(imprimeRespuesta).join('')
}
const imprimePregunta = (pregunta) => {
    const legend = imprimeLegend(pregunta)
    const respuestas = imprimeRespuestas(pregunta)
    return `
        <fieldset>
            ${legend}
            ${respuestas}
        </fieldset>
    `
}

const cuestionario = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5]
const cuestionarioCompleto = cuestionario.map(imprimePregunta).join('')
const botonFormulario = () => `<button>Enviar</button>`
const gestionaEnvio = (event) => {
    if(cuestionarioCompleto.value == respuestaCorrecta.value){
        //event.preventDefault();
        console.log("funciona el if de gestionaEnvio");
    }else{
        // alert("Intentalo de nuevo!");
        console.log("no funciona el if de gestionaEnvio");
    }
}

    

const $form = document.getElementsByTagName('form')[0]
const boton = botonFormulario()
$form.innerHTML = cuestionarioCompleto + boton
$form.addEventListener('Enviar', gestionaEnvio)







