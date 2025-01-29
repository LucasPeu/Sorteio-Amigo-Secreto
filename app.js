//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
  const inputAmigo = document.getElementById("amigo");
  const nomeAmigo = inputAmigo.value.trim();

  if (nomeAmigo === ""){
    alert("Por favor, insira um nome.");
    return;
  }
  amigos.push(nomeAmigo);

  atualizarLista();

  inputAmigo.value = "";
  inputAmigo.focus();

}

function atualizarLista(){
  const listaAmigo = document.getElementById("listaAmigos")
  listaAmigo.innerHTML = "";

  amigos.forEach(amigo => {
    const li= document.createElement("li");
    li.textContent = amigo;
    listaAmigo.appendChild(li);    
  });
}

function sortearAmigo(){
  if (amigos.length === 0) {
    alert("Insira um nome válido. Por favor!");
    return;    
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const amigoSorteado = amigos [indiceAleatorio];

  const resultadoSorteado = document.getElementById("resultado");
  resultadoSorteado.innerHTML = `<li>${amigoSorteado}</li>`;

}

document.addEventListener('DOMContentLoaded',() => {
  document.getElementById("botãoAdicionar").addEventListener("click", adicionarAmigo)
  document.getElementById("botaoSortear").addEventListener("click", sortearAmigo)
});
















