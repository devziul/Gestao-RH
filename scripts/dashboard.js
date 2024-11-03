let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || []; //armazena todos os funcionarios no local storage
displayFuncionarios();

document.getElementById("funcionarioForm").addEventListener("submit", function(event) {
    event.preventDefault();
    //armazena nas variaveis o que foi digitado no formulario
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const contato = document.getElementById("contato").value;
    const salario = document.getElementById("salario").value;
    
    const funcionario = { nome, cpf, contato, salario }; 
    //cria um objeto q salva essas informações do funcionario
    funcionarios.push(funcionario); 
    //adiciona um novo funcionario a lista 'funcionarios'

    saveFuncionarios(); //salva no local storage
    displayFuncionarios();
    this.reset(); //limpa os campos dps q add um funcionario
});

function displayFuncionarios() {
    const funcionarioTabela = document.getElementById("funcionarioTabela");
    //busca a tabela onde exibe os funcionarios
    funcionarioTabela.innerHTML = ""; 
    //vai limpar a tabela pra nao duplicar a lista

    //loop que percorre cada funcionario na lista "funcionarios"
    funcionarios.forEach((funcionario, index) => { 
        const linha = document.createElement("tr"); //cria nova linha na tabela <tr>
        linha.innerHTML = `
        <td>${funcionario.nome}</td>
        <td>${funcionario.cpf}</td>
        <td>${funcionario.contato}</td> 
        <td>${funcionario.salario}</td>
        <td>
            <button onclick="editFuncionario(${index})">Editar</button> 
            <button onclick="removeFuncionario(${index})">Remover</button>
        </td>
        `;
        funcionarioTabela.appendChild(linha);
    });
}

function saveFuncionarios() {
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
}   //vai ta salvando a lista de funcionarios no local storage

    function editFuncionario(index) { //funcao que permite editar os dados do funcionario com base no indice (index)
        const funcionario = funcionarios[index]; 
        document.getElementById("nome").value = funcionario.nome;
        document.getElementById("cpf").value = funcionario.cpf;
        document.getElementById("contato").value = funcionario.contato;
        document.getElementById("salario").value = funcionario.salario;
        //preenche os campos do form com os dados do funcionario selecionado, pra editar os valores

        funcionarios.splice(index, 1);
        saveFuncionarios();
        displayFuncionarios();
    }

    function removeFuncionario(index) { //funcao que remove
        funcionarios.splice(index, 1);
        saveFuncionarios();
        displayFuncionarios(); //att a tabela removendo os que foram deletados
    }

    displayEmployees();
