// funcão para realiazar a consulta do cep
function getDadosEnderecoPorCep(cep) {
    let url = "https://viacep.com.br/ws/" + cep + "/json/";

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", url);
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            // transfomando em obj 
            let endereco = JSON.parse(xmlHttp.responseText);
            
            // Pegando os dados do objeto
            document.getElementById("endereco").value = endereco.logradouro;
            document.getElementById("bairro").value = endereco.bairro;
            document.getElementById("cidade").value = endereco.localidade;
            document.getElementById("uf").value = endereco.uf;
        }
    }
    xmlHttp.send();
}