
## Instruções para rodar o projeto

1. Clone o repositório:
    ```bash
    git clone <url-do-repositorio>
    cd projectVaTaxi
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute o projeto:
    ```bash
    npm start
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
        "custo_estimado": 25.5,
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
  "custo_estimado": 25.50
 
 }
  ```

 ```bash
 PUT da aplicação para cancelar a aplicação 
 http://localhost:3000/corridas/1/cancelar
 {
    "id": "1",
    "status": "cancelada"
}
  ```

 ```bash
PUT da aplicação para ativar na aplicação 
http://localhost:3000/corridas/1/reativar
{
    "id": "1",
    "status": "ativa"
}
  ```