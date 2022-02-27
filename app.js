const tabela = document.getElementById('dadosTabela');
const formulario = document.getElementById('formularioEnvio');
const codigo = document.getElementById('codigo');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const validar = document.getElementById('validação');
const modal = document.querySelector('.form');

const aData = [
  {
    codigo: '001001',
    nome: 'Jose da Silva',
    email: 'jose@email.com',
    telefone: '(11) 99901-1234',
  },

  {
    codigo: '001002',
    nome: 'Marcio de Souza',
    email: 'marcio@email.com',
    telefone: '(11) 99902-1234',
  },

  {
    codigo: '001003',
    nome: 'Mauricio Cruz',
    email: 'mauricio@email.com',
    telefone: '(11) 99903-1234',
  },

  {
    codigo: '001004',
    nome: 'Fabiana Dias',
    email: 'fabiana@email.com',
    telefone: '(11) 99904-1234',
  },
];

const lerDados = (arrayDados) => {
  arrayDados = JSON.parse(localStorage.getItem('value'));
  tabela.innerHTML = '';
  arrayDados.map(({ codigo, nome, email, telefone }) => {
    const html = `<tr>
<td>${codigo}</td>
 <td>${nome}</td>
<td>${email}</td>
<td>${telefone}</td> 
</tr>`;
    tabela.innerHTML += html;
  });
};
lerDados();
const salvar = (event) => {
  event.preventDefault();
  const dadosInput = {
    codigo: codigo.value,
    nome: nome.value,
    email: email.value,
    telefone: telefone.value,
  };
  if ((nome.value, email.value, telefone.value !== '')) {
    validar.innerHTML = '';
    nome.value = '';
    email.value = '';
    codigo.value = '';
    telefone.value = '';

    const armazenamentoLocal = JSON.parse(localStorage.getItem('value'));
    armazenamentoLocal.push(dadosInput);
    localStorage.setItem('value', JSON.stringify(armazenamentoLocal));
    lerDados();
  } else {
    validar.innerHTML = `Preencha todos os campos`;
  }
};

const fecharModal = () => {
  let displayStyle = modal.style.display;
  modal.style.display = displayStyle == 'flex' ? 'none' : 'flex';
};
