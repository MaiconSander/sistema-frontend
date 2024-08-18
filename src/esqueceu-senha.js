window.onload = function (e) {

    var txtEmail = document.getElementById("txtEmail");

    txtEmail.focus();

    var btnEmail = document.getElementById("btnEmail");

    btnEmail.onclick = function (e) {


        e.preventDefault();

        var email = txtEmail.value;

        if (email == "") {

            var mensagem = "E-mail obrigatorio.";

            exibirMensagemErro(mensagem);
        }
        else {
            esqueceuSenha(email);
        }
        
    };
    function esqueceuSenha(email) {
        var data = JSON.stringify({
            "email": email
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var result = JSON.parse(this.responseText);

                if (result.sucesso) {
                    "E-mail enviado com sucesso";
                }
                else {
                    ExibirMensagemErro(result.mensagem);
                }

            }
        });

        xhr.open("POST", "https://localhost:7259/api/usuario/esqueceusenha");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);

    }

    function exibirMensagemErro(mensagem) {
        var spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);
    }
}
