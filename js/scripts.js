(function () {
    window.addEventListener('load', function () {

        var forms = document.getElementsByClassName('validacao');
        var cep = document.getElementById("formCep");
        var numero = document.getElementById("formNumero");
        var curriculo = document.getElementById("formCurriculo");

        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (cep.value.length != 9) {
                    cep.classList.add("is-invalid");
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    cep.classList.contains("is-invalid") ? cep.classList.remove("is-invalid") : null;
                }
                if (numero.value.length != 14) {
                    numero.classList.add("is-invalid");
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    numero.classList.contains("is-invalid") ? numero.classList.remove("is-invalid") : null;
                }
                if (curriculo.value == "") {
                    document.getElementById("curriculo-text").innerHTML = "<br>Por favor, anexe o seu currículo!";
                    event.preventDefault();
                    event.stopPropagation();
                }
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('validado');
            }, false);
        });
    }, false);
})
();

window.onload = () => {
    const inputCep = document.getElementById('formCep');
    const inputNumero = document.getElementById('formNumero');
    inputCep.onpaste = e => e.preventDefault();
    inputNumero.onpaste = e => e.preventDefault();
}

function mascara_cep() {
    var key = event.keyCode || event.charCode;
    if (key < 95 || key > 106) {
        key != 8 ? event.preventDefault() : null;
    }
    var cep = document.getElementById("formCep");
    if (key != 8 && cep.value.length == 5) {
        cep.value += "-";
    }
}

function mascara_numero() {
    var key = event.keyCode || event.charCode;
    if (key < 95 || key > 106) {
        key != 8 ? event.preventDefault() : null;
    }
    var numero = document.getElementById("formNumero");
    if (key != 8) {
        numero.value.length == 0 ? numero.value += "(" : null;
        numero.value.length == 3 ? numero.value += ")9" : null;
        numero.value.length == 9 ? numero.value += "-" : null;
    }
}

function curriculo_anexo(){
    var curriculo = document.getElementById("formCurriculo");
    if(curriculo.value != null && curriculo.value.length != 0){
        document.getElementById("curriculo-text").innerHTML = `<br>Anexo: ${curriculo.value}`;
    }else{
        document.getElementById("curriculo-text").innerHTML = `Todos os campos são obrigatórios<br>Tamanho máximo para upload - 10mb<br>Tipo de arquivo: .pdf ou .doc`;
    }
}