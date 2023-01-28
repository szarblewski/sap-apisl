# sap-apisl  verão 0.0.1
Api que comunica com a service Layer do SAP a partir da versão 10.<br/>
Controla a autenticação e a comunicação com o SAP de forma simples e rápida e automatizada.

## Instalação

```bash
faça o clone do projeto
entre na pasta do projeto e execute o comando "npm install".

```
## Configuração

```bash
crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

# PORTAS DA API
PORT=13000
LOCALHOST=localhost

# DADOS CONEXAO SERVICE LAYER
SL_HOST=SRVSAP10
SL_PORT=50000
SL_VERSION=b1s/v1/
SL_USER=manager 
SL_PASS=1234
SL_COMPANYDB=SBODemoBR
SL_LANGUAGE=29
```

## Uso

```bash
execute o comando "npm start" para iniciar a api.

com a api iniciada, acesse a url http://localhost:13000/api/doc para ver a documentação da api.
*obs: a documentação é gerada automaticamente a partir dos comentários do código e podem estar incompletas.
```

## Observações

* A api foi desenvolvida para ser utilizada com o SAP Business One 10.0 ou superior.
* A api esta em fase de desenvolvimento e pode conter bugs.


## Contribuição

Para solicitar uma nova funcionalidade, crie uma issue com a tag "enhancement" e descreva a funcionalidade desejada. Que irei avaliar e implementar.






