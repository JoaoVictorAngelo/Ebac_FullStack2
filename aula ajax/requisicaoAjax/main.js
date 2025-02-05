/* document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`

        xhttp.open('GET', endpoint);
        xhttp.send();

        //https://viacep.com.br/ws/13871205/json
    })
}) */

$(function () {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').on('click', function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none')
        $(botao).find('span').removeClass('d-none')

/*         $.ajax(endpoint).done(function(resposta) {
            console.log(resposta)

            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro} - ${bairro} - ${cidade} - ${estado}`;
            
            setTimeout(function(){
                $('#endereco').val(endereco)
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            },700);
        })
*/

        fetch(endpoint).then(function(resposta){
            return resposta.json()
        })
        .then(function(json){
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro} - ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco)

        })
        .catch(function(erro) {
            alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde")
        })
        .finally(function() {
            setTimeout(function() {
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            },700);
        })
    })

    $('#formulario-pedido').submit(function(e) {
        e.preventDefault();
        if ($('#nome').val().length == 0) {
            throw new Error('Digite o nome');
        }
    })
})

//AJAX
//Asynchronous (Assíncrono)
//JavaScript
//And (E)
//XML