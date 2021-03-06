# databizz-challenge

Projeto criado para realização do desafio de estágio dev da Databizz.

## Informações Gerais

- [Wiki](https://github.com/dxxglas/databizz-challenge/wiki)
- [Kanban](https://github.com/dxxglas/databizz-challenge/projects/1)

## Boas Práticas

- As branchs desse repositório devem seguir esse modelo:
    - `main`: produção
    - `develop`: desenvolvimento
    - `feature-issue`: issues em desenvolvimento
    - `bugfix-issue`: issues de ajuste e solução de erros

- Os commits devem ser realizados em português e seguir o modelo:
    - **[letra-inicial]-issue** + : + descrição, ou seja: `f-issue: descrição`

## Para executar esse projeto

1. Clone este repositório e execute `npm i`
2. Adicione o arquivo `environment.ts` na pasta `environments` com as credenciais do firebase
3. Execute `ng serve --open` e acesse `http://localhost:4200/`

## Para criar Pull Requests

1. Na **branch-filha**, a que se deseja unir com a branch principal, execute `$ git push` para atualizá-la no repositório remoto.
2. Execute `$ git checkout branch-principal` e em seguida `$ git pull` para atualizar a **branch principal** no repositório local.
3. Execute `$ git checkout branch-filha` e em seguida `$ git pull` para confirmar que a **branch filha** está atualizada no repositório local.
4. Na **branch filha**, execute `$ git rebase branch-principal` para iniciar o **rebase**.
5. Se existirem conflitos:
    1. Abra o *VS Code* para checar os conflitos e realizar os ajustes
    2. Execute `$ git add .` para *adicionar* as mudanças
    3. Confirme os arquivos modificados com `$ git status`
    4. Execute `$ git rebase --continue` para continuar o rebase
    5. Caso existam novos conflitos, repita os passos anteriores
6. Execute `$ git push` para atualizar o repositório remoto com as mudanças do rebase
7. Abra o `Pull Request` da **branch filha** para a **branch principal**
