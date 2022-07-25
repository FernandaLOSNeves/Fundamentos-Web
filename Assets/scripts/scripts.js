function hello (){
    alert ("Hello World")
}

let nome = window.document.getElementById('nome')
// Case sensitive = reconhece letras maiúsculas e minúsculas

// por nome: getElementByName()
// por tag: getElementByTagName()
// por id: getElementById()
// por classe: getElementByClassName()


let email = document.querySelector('#email')
let assunto = document.getElementById('assunto')
let nomeOK = false
let emailOk = false
let assuntoOk =false
let mapa =document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome () {
    let txtNome = document.querySelector ('#txtNome')
    if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome inválido'
    txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML ='Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail () {

    let txtEmail = document.querySelector ('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf ('.') == -1) {
        txtEmail.innerHTML = 'Nome inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML ='Nome Válido'
        txtEmail.style.color = 'green'
    }
}

function validaAssunto (){
    let txtAssunto = document.querySelector ('#txtAssunto')

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Seu texto é muito grande! Digite um texto até 100 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display='block'
        // txtAssunto.style.backgroundColor = 'black'
    } else{
        txtAssunto.style.display='none'
        assuntoOk = true
    }
}

function enviar(){
    if( nomeOk== true && emailOk == true && assuntoOk ==true){
        alert ("Formulário enviado com sucesso!")
    } else{
        alert ("Formulário não enviado.")
    }
}

function mapazoom(){
    mapa.style.width = '800px'
    mapa.style.height ='600px'
}

function mapanormal(){
    mapa.style.width = '400px'
    mapa.style.height ='250px'
}