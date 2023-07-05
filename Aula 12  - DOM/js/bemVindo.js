window.addEventListener("load", () => {
    let titulo = document.querySelector("h1");
    let usuarioLogadoJSON = sessionStorage.getItem("usuarioLogado");
    let usuarioLogado = JSON.parse(usuarioLogadoJSON);

    titulo.innerText = `Bem-vin@ ${usuarioLogado.nome}`;

})