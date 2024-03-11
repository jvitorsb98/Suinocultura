## Sistema de Gerenciamento de Suínos - Documentação

### Introdução
O Sistema de Gerenciamento de Suínos é uma aplicação web desenvolvida para auxiliar na gestão de suínos em uma fazenda. Ele permite o cadastro, edição, exclusão e consulta de informações sobre os suínos, bem como o registro e edição de seus pesos ao longo do tempo.

### Como o sistema funciona

1. **Autenticação e Autorização:**
   - Antes de acessar qualquer funcionalidade do sistema, o usuário deve se autenticar.
   - A autenticação é realizada através de um formulário de login, onde o usuário insere seu nome de usuário e senha.
   - Caso não possua um login, deve-se realizar o cadastro.
   - Após a autenticação bem-sucedida, o sistema verifica as permissões do usuário para determinar quais funcionalidades estão disponíveis.

2. **Cadastro e Edição de Suínos:**
   - Na tela principal do sistema, o usuário pode acessar a seção de cadastro de suínos.
   - Ao clicar no botão de cadastro, é exibido um formulário onde o usuário pode inserir as informações do suíno, como brinco, brinco do pai, brinco da mãe, data de nascimento, data de saída e sexo.
   - Após preencher os campos obrigatórios e clicar em "Cadastrar", o suíno é adicionado ao sistema.
   - Para editar um suíno já cadastrado, o usuário pode acessar a seção de listagem de suínos, onde é possível ver os suínos já inseridos no sistema e utilizar a ferramenta de edição para modificar as informações do suíno e salvar as alterações.

3. **Registro e Edição de Pesos:**
   - Na seção de registro de pesos, o usuário pode selecionar um suíno pelo brinco e inserir o peso correspondente, juntamente com a data da pesagem.
   - Também é possível editar os pesos registrados anteriormente, alterando o valor do peso e a data da pesagem.

4. **Consulta de Suínos e seus Pesos:**
   - O usuário pode pesquisar suínos pelo brinco na seção de consulta.
   - Ao selecionar um suíno, o sistema exibe informações detalhadas, incluindo um gráfico que mostra a evolução do peso do suíno ao longo do tempo.
   - Além disso, uma tabela com os pesos registrados para o suíno selecionado é exibida, juntamente com suas datas correspondentes.

5. **Validação de Entrada e Exibição de Erros:**
   - Todas as entradas de dados nos formulários são validadas para garantir que informações obrigatórias sejam fornecidas e que os dados estejam corretos.
   - Em caso de erros de validação ou outros problemas, o sistema exibe mensagens de erro para orientar o usuário.

### Manual de Uso

2. **Cadastro de Usuários:**
   - Antes de acessar o sistema, é necessário ter uma conta de usuário. Para criar uma nova conta, siga os passos abaixo:
     1. Na página inicial de login, clique no link "Cadastro".
     2. Preencha o formulário de cadastro com as informações solicitadas, incluindo nome, endereço de e-mail e senha.
     3. Após preencher todos os campos, clique no botão de registro para finalizar.

1. **Login:**
   - Para acessar o sistema, insira seu email de usuário e senha nos campos correspondentes e clique em "Login".

2. **Cadastro de Suínos:**
   - Na tela principal, clique no botão "Cadastrar Suíno".
   - Preencha os campos obrigatórios no formulário de cadastro.
   - Clique em "Cadastrar" para adicionar o suíno ao sistema.

3. **Edição de Suínos:**
   - Na tela principal, clique no botão "Listar Suínos".
   - Selecione o suíno que deseja editar na lista.
   - Faça as alterações necessárias nos campos do formulário de edição.
   - Clique em "Salvar Alterações" para confirmar as alterações.

4. **Registro de Pesos:**
   - Na tela principal, clique no botão "Cadastrar Peso".
   - Selecione o suíno pelo brinco na lista suspensa.
   - Insira o peso e a data correspondente nos campos do formulário.
   - Clique em "Cadastrar" para registrar o peso do suíno.

5. **Edição de Pesos:**
   - Na tela principal, clique no botão "Gráfico de Peso".
   - Indique o brinco do suíno, assim mostrando os dados em relação ao peso do mesmo.
   - Clique no botão de editar na lista de pesos, do qual quer realizar a alteração.
   - Faça as alterações necessárias nos campos do formulário de edição.
   - Clique em "Salvar" para confirmar as alterações.

6. **Consulta de Suínos e seus Pesos:**
   - Na tela de listagem, use a barra de pesquisa para encontrar um suíno pelo ou pela opção que desejar.
   - Neste ponto já é visualizado as informações em relação ao suíno.
   - Para visualizar os dados em relação ao peso, vá para o Gráfico de Peso e indique o brinco do suíno escolhido.
   - Use o gráfico e a tabela para consultar os pesos registrados para o suíno selecionado.

### Conclusão
O Sistema de Gerenciamento de Suínos é uma ferramenta poderosa para auxiliar na gestão de suínos em uma fazenda. Com uma interface intuitiva e funcionalidades abrangentes, ele permite aos usuários cadastrar, editar, excluir e consultar informações sobre os suínos e seus pesos, facilitando o monitoramento e controle da produção.
