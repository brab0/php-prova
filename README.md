#PHP - Teste de Conhecimentos

##Requisitos
- PHP 5.3
- PSR-2

##Ambiente
```html
- Apache (ou qualquer outro servidor web)
- PHP 5.3
- CakePHP 2.x
- MySql (PDO)
- AngularJs
- Git
- NPM
```

##Estrutura

```html
|api
|--|Config
|----|Schema
|--|Console
|--|Controller
|--|Model
|--|tmp
|app
|--|assets
|----|css
|----|imgs
|--|modules
|----|readme
|----|primeira
|----|segunda
|----|terceira
|----|quarta
|--|templates
|----|parts

```

###Requisitos
- MySql
- Apache ou outro servidor web com mod.rewrite habilitado
- Git
- NPM para o bower e servidor http (opcional)
- PDO


###Repositório
```html
˜# git clone https://github.com/brab0/php-prova.git
˜# cd php-prova
```

### API
#### Instalação
```html
˜# cd api
˜# chmod -R 777 tmp
˜# git clone -b 2.x git://github.com/cakephp/cakephp.git CakeCore
```

#### Configuração
- Crie um banco com o nome api;
- Edite as configurações do banco de dados (api/Config/database.php);
- Start o MySql;
- No terminal, ainda dentro da pasta api, gere o Schema do banco com o comando abaixo:
```html
˜# Console/cake schema create api
```
- Start o seu servidor php (Apache, Nginx etc);

Obs I: O cake tem algumas particularidades com permissões (principalmente na pasta tmp). Por isso, na dúvida:  https://book.cakephp.org/2.0/pt/installation.html

Obs II: Para este projeto, optou-se por desacoplar a dependencia do core do CakePHP da API. Com esta modularização,
consegue-se uma estrutura muita mais enxuta de manter, visto que em se tratando de uma API, views, assets e outras dependencias webroot do Cake são desnecessárias. Além disto, não é necessário o versionamento deste código(no git).
Por isto, se quiser, você pode optar por excluir a pasta /app dentro de CakeCore/, visto que ela não será utilizada;


### APP (Front-End)
#### Instalação
```html
˜# cd app (ou cd ../app, se estive em /api)
˜# npm install
˜# ./node_modules/bower/bin/bower install (caso não o tenha instalado globalmente)
```
obs: dependendo das permissões de usuário, as operações podem necessitar do comando sudo para executar.
Para executar o bower, é possível que se necessite acrescentar o parâmetro --allow-root (no final) junto com sudo.


#### Configuração
- Edite o endereço da sua api no arquivo /modules/config.js
- No terminal, ainda na pasta raiz da pasta app, execute:

```html
˜# ./node_modules/http-server/bin/http-server
```

##Endpoints
###GET /tasks
Retorna status code 200 e JSON com todas as tarefas cadastradas.

- res.data
```html
[
  {
    "id" : "1",
    "titulo" : "Teste",
    "descricao" : "teste",
    "prioridade" : "1"
  },
  ...
]
```

###GET /tasks/:id
Retorna status code 200 e JSON com a tarefa encontrada pelo id. Caso o id não exista, retorna 404.

- res.data
```html
{
  "id" : "1",
  "titulo" : "Teste",
  "descricao" : "teste",
  "prioridade" : "1"
}
```

###POST /tasks
Cria uma tarefa, retorna 201 Created e um objeto JSON.

- req.body
```html
{
  "titulo" : "Teste",
  "descricao" : "teste"
}
```

- res.data
```html
{
  "id" : "1",
  "titulo" : "Teste",
  "descricao" : "teste",
  "prioridade" : "1"
}
```

###PUT /tasks/:id
Atualiza uma tarefa pelo id passado, retorna 200 e um objeto JSON.

- req.body
```html
{
  "titulo" : "Teste",
  "descricao" : "teste"
}
```

- res.data
```html
{
  "id" : "1",
  "titulo" : "Teste",
  "descricao" : "teste",
  "prioridade" : "1"
}
```

###DELETE /tasks/:id
Apaga uma tarefa pelo id. Retorna vazio(204) em caso de sucesso e 404 caso o id não exista.
