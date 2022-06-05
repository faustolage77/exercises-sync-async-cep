/*
Para este exercício utilize o recurso de Async/Await do Javascript.
Será necessário buscar as informações em uma api externa (ViaCep).
Baixar o resultado, tratar o retorno para mostrar logradouro, bairro - localidade. 

Exemplo de resultado obtido na api ViaCep:=
    {
      "cep": "01001-000",
      "logradouro": "Praça da Sé",
      "complemento": "lado ímpar",
      "bairro": "Sé",
      "localidade": "São Paulo",
      "uf": "SP",
      "ibge": "3550308",
      "gia": "1004",
      "ddd": "11",
      "siafi": "7107"
    }
      
Exemplo de como a função deve retornar: 

"Praça da Sé, Sé - São Paulo"

Documentação da API:  https://viacep.com.br/

*/

const BASE_API_VIA_CEP = "https://viacep.com.br/ws/";

/*
    TODO 1:
    - Implemente a função getAddressByCep com o recurso de Async/Await.
    - A função deve retornar nesse formato: logradouro, bairro - localidade.
    - A função deve retornar o erro `CEP não encontrado` caso o cep não seja encontrado.
*/

async function getAddressByCep(cep) {
  // implemente aqui
}

module.exports = { getAddressByCep };



getAddressByCep("32670244");
module.exports = { getAddressByCep };