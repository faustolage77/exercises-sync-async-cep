/*

Para este exercício utilize o recurso de Async/Await do Javascript.
Será necessário buscar as informações em uma api externa (ViaCep).
Baixar o resultado, tratar o retorno. 

Documentação da API:  https://viacep.com.br/


*/

const BASE_API_VIA_CEP = "https://viacep.com.br/ws/";

function getCep(cep) {
  return fetch(`${BASE_API_VIA_CEP}${cep}/json/`)
    .then((response) => response.json())
    .then((response) => {
      if (response.erro) {
        throw new Error(response.erro);
      }
      return response;
    });
}
