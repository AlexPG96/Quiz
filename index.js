const question = {
    title: "¿Qué tipos de texto podemos usar en programación?", 
    answers: [
        {label: 'PascalCase', id: 'PascalCase', name: 'letras', value: 'PascalCase'},
        {label: 'camelCase', id: 'camelCase', name: 'letras', value: 'camelCase'},
        {label: 'kebab-case', id: 'kebab-case', name: 'letras', value: 'kebab-case'},
        {label: 'snake_case', id: 'snake_case', name: 'letras', value: 'snake_case'},
    ]
};

const question2 = {
    title: "¿Cual es la etiqueta para juntar un archivo de css en html?",
    answers: [
        {label: 'html:css', id: 'html:css', name: 'archivo', value: 'html:css'},
        {label: '&lt;html:css&gt;', id: '&lt;html:css&gt;', name: 'archivo', value: '&lt;html:css&gt;'},
        {label: '&lt;link rel="_"&gt;', id: '&lt;link rel="_"&gt;', name: 'archivo', value: '&lt;link rel="_"&gt;'},
        {label: '&lt;link rel= "html:css"&gt;', id: '&lt;link rel= "html:css"&gt;', name: 'archivo', value: '&lt;link rel= "html:css"&gt;'},
    ]
};

const question3 = {
    title: "¿Una pregunta más?",
    answers: [
        {label: 'Respuesta 1', id: 'Respuesta 1', name: 'pregunta3', value: 'Respuesta 1'},
        {label: 'Respuesta 2', id: 'Respuesta 2', name: 'pregunta3', value: 'Respuesta 2'},
        {label: 'Respuesta 3', id: 'Respuesta 3', name: 'pregunta3', value: 'Respuesta 3'},
        {label: 'Respuesta 4', id: 'Respuesta 4', name: 'pregunta3', value: 'Respuesta 4'},
    ]
};

const question4 = {
    title: "¿Otra pregunta más?",
    answers: [
        {label: 'Respuesta 1', id: 'Respuesta 1', name: 'pregunta4', value: 'Respuesta 1'},
        {label: 'Respuesta 2', id: 'Respuesta 2', name: 'pregunta4', value: 'Respuesta 2'},
        {label: 'Respuesta 3', id: 'Respuesta 3', name: 'pregunta4', value: 'Respuesta 3'},
        {label: 'Respuesta 4', id: 'Respuesta 4', name: 'pregunta4', value: 'Respuesta 4'},
    ]
};

const question5 = {
    title: "¿Otra pregunta más2?",
    answers: [
        {label: 'Respuesta 1', id: 'Respuesta 1', name: 'pregunta5', value: 'Respuesta 1'},
        {label: 'Respuesta 2', id: 'Respuesta 2', name: 'pregunta5', value: 'Respuesta 2'},
        {label: 'Respuesta 3', id: 'Respuesta 3', name: 'pregunta5', value: 'Respuesta 3'},
        {label: 'Respuesta 4', id: 'Respuesta 4', name: 'pregunta5', value: 'Respuesta 4'},
    ]
}

const imprimeRespuesta = (respuesta) => {
    const {id, label, name, value } = respuesta
    return `
        <div>
            <label for="${id}">${label}</label>
            <input type="radio" id="${id}" name="${name}" value="${value}">
        </div>`;
}

const botonFormulario = () => `<button>Enviar</button>`;

const tituloPregunta = (titulo) => `<p>${titulo}</p>`;

const imprimePregunta = (pregunta) => {
    const {
        title,
        answers
    } = pregunta

const respuestaArray = answers.map(imprimeRespuesta)
const respuestasPregunta = respuestaArray.join('');
const titulo = tituloPregunta(title);

return titulo + respuestasPregunta;
}

//const preguntaImpresa = imprimePregunta(question);
const coleccion = [question, question2, question3, question4, question5]
const coleccionImpresa = coleccion.map(imprimePregunta).join('')

const gestionaEnvio = (event) => {
    event.preventDefault()

    console.log($form.elements.letras)
    console.log($form.elements.archivo)
    console.log($form.elements.pregunta3)
    console.log($form.elements.pregunta4)
    console.log($form.elements.pregunta5)
}

const $form = document.getElementsByTagName('form')[0]
const boton = botonFormulario();
$form.innerHTML = coleccionImpresa + boton

$form.addEventListener('submit', gestionaEnvio)