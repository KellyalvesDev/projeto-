import { Usuario } from "./classes.js";
import { calcularMediaIdade, validarEmail } from "./utils.js";

const form = document.getElementById("userForm");
const lista = document.getElementById("userList");
const totalUsersSpan = document.getElementById("totalUsers");
const mediaIdadeSpan = document.getElementById("mediaIdade");

let usuarios = [];

function render() {
  lista.innerHTML = "";

  if (usuarios.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Nenhum usuário cadastrado.";
    lista.appendChild(li);
  } else {
    usuarios.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.nome} - ${user.email} (${user.idade} anos)`;
      lista.appendChild(li);
    });
  }

  totalUsersSpan.textContent = usuarios.length;
  mediaIdadeSpan.textContent = calcularMediaIdade(usuarios);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const idadeValor = document.getElementById("idade").value.trim();
  const idade = parseInt(idadeValor, 10);

  if (!nome || !email || !idadeValor) {
    alert("Preencha todos os campos!");
    return;
  }

  if (Number.isNaN(idade) || idade < 0) {
    alert("Informe uma idade válida!");
    return;
  }

  if (!validarEmail(email)) {
    alert("Digite um email válido!");
    return;
  }

  const jaExiste = usuarios.find((u) => u.email === email);
  if (jaExiste) {
    alert("Esse usuário já está cadastrado!");
    return;
  }

  usuarios.push(new Usuario(nome, email, idade));
  render();
  form.reset();
  document.getElementById("nome").focus();
});

// mostra o estado inicial
render();
