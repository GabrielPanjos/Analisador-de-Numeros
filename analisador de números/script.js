let listaDeNumeros = []

function adicionar() {

    console.log("adicionando")

    // Variável para pegar o input
    let input = document.querySelector("input")
    let valorInput = input.value

    // Validando caso esteja vazio, menor que 1 ou maior que 100
    if (valorInput == "" || valorInput < 1 || valorInput > 100) {
        alert("Digite algum número entre 1 e 100.")
    }
    // Validando duplicidade
    else if (listaDeNumeros.includes(parseInt(valorInput))) {
        alert('Esse número já existe, digite outro.')
    }
    // Adicionando o número à lista
    else {
        alert(`Número ${valorInput} adicionado`)


        listaDeNumeros.push(parseInt(valorInput))
        console.log(listaDeNumeros)
    }

    // Limpando mensagem de finalização
    let mensagem = document.getElementById('msg')
    mensagem.innerHTML = ""

    atualizar()
}

function finalizar() {

    console.log("finalizando")

    if (listaDeNumeros == "") {
        alert('Adicione um número à lista.')
    } else {

        let valor = 0

        // Somando todos os valores da lista
        listaDeNumeros.forEach(num => {
            valor += num
        })

        // Fazendo a média dos valores da lista
        let media = (valor) / (listaDeNumeros.length)

        // Fazendo mensagem ser exibida
        let mensagem = document.getElementById('msg')
        mensagem.innerHTML = `<p>Ao todo temos ${listaDeNumeros.length} números cadastrados</p><p>O maior valor informado foi ${Math.max(...listaDeNumeros)}</p><p>O menor valor informado foi ${Math.min(...listaDeNumeros)}</p><p>Somando todos os valores, temos ${valor}</p><p>A média dos valores digitados é ${media}</p> `
    }
    atualizar()
}

function atualizar() {

    console.log("atualizando")

    // Limpando input
    let input = document.querySelector("input")
    input.value = ""

    // Exibindo a lista
    document.querySelector('ul').innerHTML = ""
    listaDeNumeros.forEach(numero => {
        document.querySelector('ul').innerHTML += `<li>${numero}</li>`
    })
}

document.getElementById("adicionar").addEventListener("click", adicionar)
document.getElementById("finalizar").addEventListener("click", finalizar)