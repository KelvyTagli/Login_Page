function newlogin() {
    const usuario = {
        nome: null,
        senha: null
    };

    usuario.nome = document.getElementById('_Username').value;
    usuario.senha = document.getElementById('_Password').value;
    const confpassword = document.getElementById('conf-password').value;

    if ( usuario.senha == "" && confpassword == "" && usuario.nome == "" ) {
        alert('Erro Preencha todos os campos obrigatórios corretamente !'); 
    }
    else if (usuario.senha == confpassword && usuario.nome != "") {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        location.href = 'http://127.0.0.1:5500/index.html';
    }
    else {
        document.getElementById('lb-confirm').innerHTML = 'Senha Incorreta';
    }
}

function login() {
    const file = localStorage.getItem('usuario');
    const login = JSON.parse(file);
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username == "" && password == "") {
        alert('Preencha os Campos Obrigatorios !');
    }
    else if (username == login.nome && password == login.senha) {
        alert('Login Efetuado com Sucesso.');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
    else {
        alert('Login ou Senha Incorretos.');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}