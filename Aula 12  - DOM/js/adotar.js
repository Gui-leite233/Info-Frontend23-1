let formulario = document.querySelector("form")


const checkIputs = (nome, telefone, email) => {

    if (nome.value.trim() == "") {
        nome.classList.add("erro");
        return false;
    } else if (email.value.trim() == "") {
        return false;
    }
    else if (telefone.value.trim() == "") {
        return false;
    }
}



formulario.addEventListener("submit", (event) => {
    let nome = document.querySelector("#nome").value;
    let telefone = document.querySelector("#telefone").value;
    let email = document.querySelector("#email").value;
    let renda = document.querySelector("input[type='radio']:checked").value;
    let residencia = document.querySelector("#residencia");
    let opcaoResidencia = residencia.options[residencia.selectedIndex].value;
    let intencao = document.querySelector("#intencao").value;


    if (!checkIputs(nome, telefone, email)) {
        event.preventDefault();
    } else {
        const adotante = {
            id: 1,
            nome: nome,
            telefone: telefone,
            renda: renda,
            residencia: opcaoResidencia,
            intencao: intencao,
        };
    }



    console.log(adotante);
});