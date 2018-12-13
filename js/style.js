let form = $('.form-contact');

form.validate({
    errorElement: 'span',
    rules: {
        name: 'required',
        email: {
            required: true,
            email: true
        },
        phone: 'required',
        text: 'required'
    },
    messages: {
        name: 'Você esqueceu de inserir seu nome',
        email: {
            required: 'Por favor, digite seu email',
            email: 'Por favor, digite um email válido'
        },
        phone: 'Por favor, digite seu telefone',
        text: 'Por favor, digite uma mensagem'
    }
});

const button = document.getElementById("arrowTop")

button.addEventListener("click", function(){
    window.scrollTo(pageYOffset, 0)
})

window.addEventListener("scroll", function(){
    console.log(pageYOffset)
    if (pageYOffset > 600){
        button.hidden = false
    }
    else {
        button.hidden = true
    }
})

