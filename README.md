# Projeto HairDay

**HairDay** é uma aplicação web que permite aos clientes agendar horários para cortes de cabelo de maneira simples e eficiente. O sistema mostra as datas e horários disponíveis e facilita a marcação com apenas alguns cliques.

## Tecnologias Utilizadas
<p>
	<img alt="HTML version" src="https://img.shields.io/static/v1?label=HTML&message=5&color=18181B&labelColor=E34F26">
	  <img alt="CSS version" src="https://img.shields.io/static/v1?label=CSS&message=3&color=18181B&labelColor=1572B6">
	  <img alt="JavaScript" src="https://img.shields.io/static/v1?label=JavaScript&message=ES6%2B&color=18181B&labelColor=F7DF1E">
	<a href="https://wakatime.com/badge/user/30563c84-4568-4594-9bbe-b31f0effd26b/project/a62e4d10-ae54-4dc3-94ab-c43035567f43">
		<img src="https://wakatime.com/badge/user/30563c84-4568-4594-9bbe-b31f0effd26b/project/a62e4d10-ae54-4dc3-94ab-c43035567f43.svg" alt="wakatime">
	  </a>
	<br>
	<img alt="Webpack version" src="https://img.shields.io/static/v1?label=Webpack&message=5.89.0&color=18181B&labelColor=8DD6F9">
	  <img alt="Babel version" src="https://img.shields.io/static/v1?label=Babel&message=7.23.7&color=18181B&labelColor=F9DC3E">
	  <img alt="JSON Server version" src="https://img.shields.io/static/v1?label=JSON%20Server&message=1.0.0-alpha.21&color=18181B&labelColor=323330">
	  <img alt="Day.js version" src="https://img.shields.io/static/v1?label=Day.js&message=1.11.10&color=18181B&labelColor=F05A22">
</p>

## Funcionalidades
- Exibição de datas e horários disponíveis para agendamento.
- Agendamento de horários com base na disponibilidade.
- Submissão e cancelamento de agendamentos.
- Atualização dinâmica dos horários conforme a data selecionada.

## Requisitos
- Node.js (versão mínima 14.x.x)

## Instalação
1. Clonar o Repositório
Para começar, clone o repositório do projeto HairDay do GitHub para sua máquina local:

```bash
git clone https://github.com/anaclaraaraujo/hairday
```

2. Acessar o Diretório do Projeto
Após clonar o repositório, navegue até o diretório do projeto HairDay:

```bash
cd hairday
```

3. Instalar Dependências
O projeto utiliza Node.js, então instale todas as dependências listadas no `package.json` com o comando:

```bash
npm install
```

4. Inicializar o Servidor Local
O projeto utiliza o `json-server` para simular uma API local. Para iniciar o servidor, execute o seguinte comando:

```bash
npm run server
```

5. Rodar o Projeto em Ambiente de Desenvolvimento
Se o projeto também utilizar o Webpack Dev Server para o ambiente de desenvolvimento, execute o comando abaixo para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

6. Compilar o Projeto para Produção (Opcional)
Se você deseja gerar os arquivos otimizados para produção, use o comando de build:

```bash
npm run build
```

## Licença

Este projeto está licenciado sob a [MIT license](https://opensource.org/licenses/MIT).