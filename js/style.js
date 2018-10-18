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