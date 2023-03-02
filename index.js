let lista = document.getElementById("lista-tarefas");
let botao = document.getElementById("btnadd");
let tarefa = document.getElementById("input-tarefa");
let idTarefa = 0;

botao.addEventListener('click', (event) => {
    console.log(event)
    if (tarefa.value != ""){
        idTarefa++
        let listaItem = document.createElement("li");
        listaItem.id = idTarefa;
        listaItem.innerHTML = `${tarefa.value} <button onclick="removerLi(event)" name="${idTarefa}" id="remover"> Remover </button>`
        lista.appendChild(listaItem);
    }
    else {
        window.alert("Digite algo!")
    }

    tarefa.value = ""

})

function removerLi(event) {
    let elementoParaRemover = document.getElementById(event.target.name);
    elementoParaRemover.remove();
}