# Plant Manager

Aplicativo mobile desenvolvido com **React Native** para ajudar no gerenciamento de cuidados com plantas, permitindo acompanhar horários de rega de forma simples, prática e intuitiva.

---

## Tecnologias

* React Native
* Expo
* TypeScript
* Axios
* React Navigation
* Async Storage
* JSON Server (API fake)

---

## Sobre o projeto

O **Plant Manager** é um aplicativo que auxilia usuários a cuidarem melhor de suas plantas, organizando lembretes de rega e proporcionando uma experiência simples e agradável.

A aplicação consome dados de uma API (simulada com JSON Server), permitindo listar plantas e gerenciar informações localmente.

---

## Funcionalidades

* Cadastro de plantas
* Listagem de plantas disponíveis
* Agendamento de rega
* Armazenamento local dos dados

---

## Melhorias implementadas

* Organização do código em módulos
* Tipagem com TypeScript
* Ajustes de layout para melhor usabilidade
* Estrutura preparada para escalabilidade

---

## Aprendizados

Durante o desenvolvimento deste projeto, pude aprofundar conhecimentos em:

* Consumo de APIs utilizando Axios
* Boas práticas de organização de código
* Persistência de dados com Async Storage
* Estruturação de aplicações com React Native
* Navegação entre telas com React Navigation

---

### Servidor (API fake)

Este projeto utiliza o **JSON Server** para simular uma API.

```bash id="run2"
# Execute o servidor
json-server ./src/services/server.json --host 0.0.0.0 --port 3333
