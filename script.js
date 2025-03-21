function verificarLongin(){

    let usuario = document.getElementById("txtUsuario").value.trim();
    let senha = document.getElementById("txtSenha").value.trim();
    let mensagemErro = document.getElementById("mensagemErro");

    if(usuario == 'senac' && senha == '2025'){
        alert('Login com sucessio');
        window.location.href = "index.html";
    }else{
        alert('Usuário ou senha invalidos');
        mensagemErro.textContent = 'Usuário ou senha incorretos'
        mensagemErro.style.color = 'red'
    }
}

function cadastrar(){
    let usuario = document.getElementById("txtUsuario").value.trim();
    let senha = document.getElementById("txtSenha").value.trim();
    let dataNascimetnto = document.getElementById("txtdtNascimento").value;
    let tipoConta = document.getElementById("selTipoConta").value.trim();

    if (usuario == "" || senha == "" || dataNascimetnto == "" || tipoConta == ""){
        alert('Todos os campos devem preenchidos');
        //para o codigo e não executa as partes de baixo
        //return;
    }else{
        validarIdade(dataNascimetnto);
        alert('Cadastro realizado com sucesso')
    }
    
    function validarIdade(dataNascimetnto){
        let dataAtual = new Date();
        let dataNasc = new Date(dataNascimetnto);
        let idade = dataAtual.getFullYear() - dataNasc.getFullYear();

        if(idade < 18){
            alert('Você não pode estar aqui! Saia');
        }else{
            alert('Seja bem-vindo, ao paraíso')
        }
    }

}