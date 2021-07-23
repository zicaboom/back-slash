# backSlash 📨

### Aplicativo de perguntas e respostas baseado em grupo(Clubs) de pessoas

### Regras: 

#### users:

[ x ] Não podem existir dois usuários com o mesmo email

[ x ] Usuários não podem ter email/senha vazios

[ x ] Só podem se juntar a um club uma vez 

#### list by:

- name 
- all
- clubs



#### clubs: 

[ x ] Não podem ter o nome vazio

[ x ] Não podem existir dois com o mesmo nome

[ x ] Usuários/Questões so podem se juntar a clubs aprovados 

[ x ] Se forem cadastradas por admins são aprovadas automaticamente

[ x ] Só podem ser criados por usuários autenticados

#### list by:

- user 
- name 
- description
- question
- all


### questions:

[ x ] Não podem ter o conteúdo vazios

[ x ] Só podem ser criados por usuários autenticados

[ x ] Só podem se juntar as clubs aprovados

[ x ] Só podem se juntar a um club uma vez

#### list by: 

- user 
- content
- club
- all

### answers:

[ x ] Não podem ter o conteúdo vazios

[ x ] Só podem ser criados por usuários autenticados

[ x ] Só podem aparecer em perguntas não denunciadas

[ x ] Só podem existir uma com o mesmo conteúdo por questão

#### list by: 

- user 
- content
- club
- all


### aprovações:

[ x ] Só pode ser realizada por administradores 

[ x ] Não pode acontecer 2 vezes

### listagem: 

#### clubs:

[ x ] Só pode ser requisitada por usuários autenticados 

[ x ] Apenas administradores podem ver os clubs desaprovados

#### questions:

[ x ] Se você acessar a rota pura serão exibidas de acordo o seu usuário

[ x ] Podem ser exibidas de acordo com os clubs colocando o id do club como parâmetro

[ x ] Com o all como parâmetro, são exibidas todas as questões


#### users: 

[ x ] Só podem ser acessados por usuários autenticados




#### Processos para execução

- Tirar usuários de grupos

- Tirar questões de grupos

- Curtidas de perguntas

- Deletar respostas




