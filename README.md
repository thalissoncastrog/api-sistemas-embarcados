# API Rest para Controle de Ar Condicionados

Esta API foi desenvolvida como requisito da disciplina de Sistesmas Embarcados do curso de Engenharia da Computação da Fundação Universidade Federal do Vale do São Francisco. Sendo construía a partir da arquitetura REST utiizando NodeJS e Express, esta API possui funções para verificar e controlar ar-condicionados por meio dessa interface, a qual a API retornará o status de cada aparelho (ligado/desligado), possibilitando a alteração de suas temperaturas e alteração do seu status.   

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- Node.js
- npm (gerenciador de pacotes do Node.js)


## 🛠️ Construído com

* [Visual Studio Code](https://code.visualstudio.com/download) - Editor de Código.
* [Postman](https://www.postman.com/downloads/) - Ferramenta de Colaboração para o Desenvolvimento de APIs.
* [Express](https://www.npmjs.com/package/express) - Usado para Facilitar a Criação de Rotas.
* [Mongoose](https://www.npmjs.com/package/mongoose) - Usada para Conexão com o Banco de Dados MongoDB.

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente conforme necessário (exemplo abaixo).
   ```env
   DB_CONNECTION_STRING = string-de-conexão-do-banco-de-dados

## Uso

1. Inicie o servidor: npm start
2. Acesse a API em http://localhost:3000 (ou a porta configurada no arquivo .env).

## Endpoints

**GET** /dashboard/wind

Descrição: Retorna uma lista contendo todos os dispositvos cadastrados no banco

Parâmetro de busca: Nenhum

Retorno:

![image](https://github.com/DavidCavalcanti/api-sistemas-embarcados/assets/54603847/2b006383-16c4-464b-a995-3dc03e52aad5)

**PUT** /dashboard/wind

Descrição: Atualiza o status(ligado/desligado) e/ou a temperatura de cada aparelho.

Parâmetro de busca: {id}

Retorno: "Dispositivo atualizado!"

## 📌 Versão

Release 1.0.0.0.

## ✒️ Autores

* **Thalisson Castro** - [Perfil do Engenheiro](https://github.com/thalissoncastrog)
* **David Levy** - [Perfil do Engenheiro](https://github.com/davidcavalcanti)

## Contribuição

Faça o fork do projeto (fork no canto superior direito desta página)
Crie uma nova branch (git checkout -b feature/nova-feature)
Faça commit das alterações (git commit -am 'Adiciona nova feature')
Faça push para a branch (git push origin feature/nova-feature)
Crie um novo Pull Request

## 📄 Licença

Este projeto está sob a licença (MIT License) - veja o arquivo [LICENSE.md](https://github.com/thalissoncastrog/api-sistemas-embarcados/tree/main?tab=License-1-ov-file) para detalhes.