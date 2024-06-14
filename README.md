<h1 align="center">
     Weather App
</h1>

<h3 align="center">
    ☁️ WeatherApp é uma aplicação de previsão do tempo que apresenta dados meteorológicos de uma determinada cidade.
</h3>

# Tabela de conteúdos

<!--ts-->

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Como executar o projeto](#-como-executar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Rodando a aplicação web](#user-content--rodando-a-aplicação-web-frontend)
- [Tecnologias](#-tecnologias)
  - [WebSite](#user-content-website--react)

<!--te-->

## 💻 Sobre o projeto

Previsão do tempo para todas as cidades (população > 1000hab) do mundo.
Informações sobre condições climáticas como : temperatura, clima, chuva, umidade, vento, etc.

---

## ⚙️ Funcionalidades

As seguintes funcionalidades estão disponíveis:

- [x] Os usuários podem consultar a previsão do tempo:

  - [x] do atual momento
  - [x] das próximas horas
  - [x] dos próximos 7 dias

- [x] Os usuários possuem acesso aos mapas, onde podem consultar os índices de:
  - [x] nuvens
  - [x] chuva
  - [x] velocidade do vento

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/).
Além disso, irá precisar de uma conta no [OpenWeatherMap](https://home.openweathermap.org/users/sign_up),
que disponibilizará uma key gratuita para ter acesso à API dos dados meteorológicos.

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/DielSignorelli/AppWeather.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd AppWeather

# Em seguida crie um arquivo .env e
# adicione sua key seguindo as especificações do arquivo .env.sample

# Instale as dependências
$ yarn install

# Execute a aplicação
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website** ([React](https://reactjs.org/))

- **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
- **[Leaflet](https://react-leaflet.js.org/en/)**
- **[React Loader Spinner](https://github.com/mhnpd/react-loader-spinner)**

> Veja o arquivo [package.json](https://github.com/DielSignorelli/AppWeather/blob/main/package.json)
