#PHP - Teste de Conhecimentos
Este projeto resolve 4 questões aplicadas sobre requisitos específicos e tem
como objetivo servir de baliza para conhecimentos técnicos sobre PHP,
algorítimos e serviços RESTfull. Resposta e explicações estão dispostas na
própria aplicação.


##Requisitos
- PHP 5.3
- MySql (PDO)
- Git
- Web Server para a API (mod.rewrite)


##Frameworks Utilizados
- CakePHP 2.x
- AngularJs


##Repositório (Clone)
```html
˜# git clone https://github.com/brab0/php-prova.git
˜# cd php-prova
```


##Estrutura
Este projeto utiliza uma arquitetura RESTfull e preza pela separação total 
do backend(api) da camada de front-end(app). Esta modularização abre possibilidades
para se traçar estratégias de deploy e alocação de recursos de hardware
como for mais conveniente.

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


### API
#### Instalação
```html
˜# cd api
˜# mkdir tmp && chmod -R 777 tmp
˜# git clone -b 2.x git://github.com/cakephp/cakephp.git CakeCore
```

#### Configuração
- Crie um banco com o nome api;
- Edite as configurações do banco de dados, se necessário (api/Config/database.php);
- Start o MySql;
- No terminal, ainda dentro da pasta api, gere o Schema do banco com o comando abaixo:
```html
˜# Console/cake schema create api
```
- Start o seu servidor php (Apache, Nginx etc);

Obs I: Existem algumas particularidades com relação a permissões da pasta tmp, que é utilizada para diversos recursos do Cake. Por isso, em caso de dúvida ou algum problema, consulte:  https://book.cakephp.org/2.0/pt/installation.html

Obs II: O CakePHP possui um acoplamento forte entre seu core e a pasta app do framework (não confundir com a pasta /app da raiz do projeto). Porém, este acoplamento pode ser desnecessário, visto que somente uma parte do framework
é de fato mantido no ciclo do desenvolvimento. Desta forma, neste projeto o framework foi levemente modificado para que o seu bootstrap seja feito a partir da aplicação e não do core, como é feito normalmente. Isto permite, que módulos desnecessários para a estrutura da API (/webroot, por exemplo) sejam removidos e que o versionamento deste código possa ser realizado sem a necessidade de incluir este core. Por isto, após clonar o framework, você pode optar por excluir a pasta /app dentro de /CakeCore, visto que ela não será utilizada;


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
- Edite o endereço da sua api no arquivo app/modules/config.js
- No terminal, ainda na raiz da pasta app, execute:

```html
˜# ./node_modules/http-server/bin/http-server
```


##Endpoints da API
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
