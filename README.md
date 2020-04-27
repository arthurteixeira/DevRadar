<h1 align="center">DevRadar</h1>
<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="Versão do React" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16120-november-14-2019">
    <img src="https://img.shields.io/badge/react-16.12.0-informational?logo=react"></img>
  </a>
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237159C1">
  </a>
</p>
<p align="center">
  Desenvolvido durante a Semana Omnistack 10, o DevRadar é um projeto que busca por desenvolvedores na sua região. Na aplicação mobile é utilizado o Google Maps para obter a localização e encontrar os devs no raio de 100km, assim como procurar por tecnologias específicas. Na aplicação web é utilizada a API do GitHub para o cadastro dos desenvolvedores.
</p>

## 🚀 Getting started

### Backend

```
 cd backend
 yarn install
```

Configurar URL de conexão do MongoDB, coloque sua URL no arquivo .env.

```
MONGO_URI=mongodb://username:password@host:port/database
```

Rodar servidor

```
 yarn dev
```

### Web

```
 cd web
 yarn install
 yarn start
```

### Mobile

```
 cd mobile
 yarn install
 expo start
```

## 📝 Licença

Esse projeto é licenciado pela [MIT License](https://opensource.org/licenses/MIT).
