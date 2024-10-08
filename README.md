## por que eu usei o nodejs ? 
por ser mais tranquilo para desenvolver e ser algo simples e rápido para rodar a aplicação e foi por isso que escolhi o javascript para fazer isso , se não eu poderia  usar o typescript para deixar mais organizado e usar um OOP mais bonito.

## sobre o freamwork 

a escolhar do express é bem simples , acredito que se fosse um projeto maior , eu optaria a usar o  fastfy que é outro freamowork nodejs ou usaria o nest.js , mas seria um overengineering demais e o express e simples e robusto , junto com o jest 
que ajudar muito .



## notas sobre a  avaliação 

eu acredito que foi bem tranquilo de desenvolver essa aplicação , eu queria desenvolver com outras coisas . mas eu gostei bastante de desenvolver em nodejs , na qual eu poderia desenvolver em php que eu gosto de programar também e fora outras linguagem que eu gosto de codar.


## sobre a aplicação 

caso der erro no docker só baixar a aplicação normalmente e executar o projeto seguindo as instruções abaixo , eu sei que o dockerfile criar um ambiente de desenvolvimento bem mais tranquilo e mais fácil para cada máquina , mas pode dar alguns erros caso não seja criado certamente.

## Instruções para rodar o projeto

1. Clone o repositório:
    ```bash
    git clone <url-do-repositorio>
    cd gerenciadorCorridas
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute o projeto:
    ```bash
    npm start ou npm run dev 
    ```

4. Rodar testes:
    ```bash
    npm test
    ```
 

  ```bash
 GET da aplicação

  http://localhost:3000/corridas

   {
        "id": 1,
        "usuario": "João",
        "ponto_partida": "Avenida Paulista, 1000",
        "ponto_destino": "Rua Augusta, 1500",
        "created_at": "2024-10-05T20:47:54.889Z",
        "custo_estimado": 75,
        "status": "ativa"
    }
  
  ```



  ```bash
 GET da aplicação por ID

  http://localhost:3000/corridas/1

   {
        "id": 1,
        "usuario": "João",
        "ponto_partida": "Avenida Paulista, 1000",
        "ponto_destino": "Rua Augusta, 1500",
        "created_at": "2024-10-05T20:47:54.889Z",
        "custo_estimado": 75,
        "status": "ativa"
    }
  
  ```

  ```bash
 POST da aplicação 
 http://localhost:3000/corridas
 {
 "usuario": "João",
  "ponto_partida": "Avenida Paulista, 1000",
  "ponto_destino": "Rua Augusta, 1500",

 
 }
  ```

 ```bash
 PUT da aplicação para cancelar a aplicação 

 colocar na url o id que você quer cancelar e apertar no send que vai retornar cancelado ou um erro dizendo que já foi cancelado o item

 http://localhost:3000/corridas/1/cancelar
 {
    "id": "1",
    "status": "cancelada"
}
  ```



 ```bash
PUT da aplicação para ativar na aplicação 

colocar na url o id que você quer reativar e apertar no send que vai retornar ativo ou um erro dizendo que já foi ativo o item

http://localhost:3000/corridas/1/reativar
{
    "id": "1",
    "status": "ativa"
}
  ```

  ```bash
 PUT da aplicação para alterar o usuario 
 http://localhost:3000/corridas/1
 {
 "usuario": "José",
  "ponto_partida": "Avenida São joão,2000",
  "ponto_destino": "Rua 5",

 
 }
  ```

  # vai retornar um novo usuario alterado 


