const pregunta1 = {
    legend: '¿Qué tipos de texto podemos usar en programación?',
    answers: [{
            label: 'PascalCase',
            id: 'pascal-case',
            name: 'letras',
            value: 'pascal case'
        },
        {
            label: 'camelCase',
            id: 'camel-case',
            name: 'letras',
            value: 'camel case'
        },
        {
            label: 'kebab-case',
            id: 'kebab-case',
            name: 'letras',
            value: 'kebab case'
        },
        {
            label: 'snake_case',
            id: 'snake-case',
            name: 'letras',
            value: 'snake case'
        }
    ]
}

const pregunta2 = {
    legend: '¿Cual es la etiqueta para juntar un archivo de css en html?',
    answers: [{
            label: 'htmlcss',
            id: 'htmlcss',
            name: 'archivo',
            value: 'htmlcss'
        },
        {
            label: 'htmlcss',
            id: 'htmlcss',
            name: 'archivo',
            value: 'htmlcss'
        },
        {
            label: 'linkrel',
            id: 'linkrel',
            name: 'archivo',
            value: 'linkrel'
        },
        {
            label: 'linkrelhtmlcss',
            id: 'linkrelhtmlcss',
            name: 'archivo',
            value: 'linkrelhtmlcss'
        }
    ]
}

const pregunta3 = {
    legend: '¿Una pregunta más?',
    answers: [{
            label: 'Pepito 1',
            id: 'Respuesta 1',
            name: 'pregunta3',
            value: 'pepito'
        },
        {
            label: 'manolito 2',
            id: 'Respuesta 2',
            name: 'pregunta3',
            value: 'manolito'
        },
        {
            label: 'pedrito 3',
            id: 'Respuesta 3',
            name: 'pregunta3',
            value: 'pedrito'
        },
        {
            label: 'lokito 4',
            id: 'Respuesta 4',
            name: 'pregunta3',
            value: 'lokito'
        }
    ]
}

const pregunta4 = {
    legend: '¿Otra pregunta más?',
    answers: [{
            label: 'Respuesta 1',
            id: 'Respuesta 1',
            name: 'pregunta4',
            value: 'Respuesta 1'
        },
        {
            label: 'Respuesta 2',
            id: 'Respuesta 2',
            name: 'pregunta4',
            value: 'Respuesta 2'
        },
        {
            label: 'Respuesta 3',
            id: 'Respuesta 3',
            name: 'pregunta4',
            value: 'Respuesta 3'
        },
        {
            label: 'Respuesta 4',
            id: 'Respuesta 4',
            name: 'pregunta4',
            value: 'Respuesta 4'
        }
    ]
}

const pregunta5 = {
    legend: '¿Otra pregunta más2?',
    answers: [{
            label: 'Respuesta 1',
            id: 'Respuesta 1',
            name: 'pregunta5',
            value: 'Respuesta 1'
        },
        {
            label: 'Respuesta 2',
            id: 'Respuesta 2',
            name: 'pregunta5',
            value: 'Respuesta 2'
        },
        {
            label: 'Respuesta 3',
            id: 'Respuesta 3',
            name: 'pregunta5',
            value: 'Respuesta 3'
        },
        {
            label: 'Respuesta 4',
            id: 'Respuesta 4',
            name: 'pregunta5',
            value: 'Respuesta 4'
        }
    ]
}


const imprimeLegend = (pregunta) => {
    return `<legend>${pregunta.legend}</legend>`
}

const imprimeRespuesta = (pregunta) => {
    const {label, id, name, value} = pregunta
    return `
        <label for="${id}">${label}</label>
        <input type="checkbox" name="${name}" id="${id}" value="${value}">
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
    event.preventDefault()
}
const $form = document.getElementsByTagName('form')[0]
const boton = botonFormulario()
$form.innerHTML = cuestionarioCompleto + boton
$form.addEventListener('Enviar', gestionaEnvio)







