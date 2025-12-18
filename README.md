# 📌 Projeto Voluntário de Automação de Testes – CertiQA Qazando

Este repositório contém um **projeto voluntário de automação de testes** desenvolvido para o site  
👉 https://www.certiqa-qazando.com/

O objetivo principal é aplicar **boas práticas de Quality Assurance (QA)** e **automação de testes end-to-end** em um ambiente real de estudo e validação funcional.

---
## 👥 Equipe do Projeto - Grupo 1 - MasterClass Turma 5 - 2025 - QAzando

| Integrante                         | Perfil GitHub                                   | LinkedIn             |
| ---------------------------------- | --------------------                            | --------------------
| **Vitor Evangelista Fantin**       | [Clique Aqui](https://github.com/vitorfantin)   | [Clique Aqui](https://www.linkedin.com/in/vitorfantin/)
| **SEU-NOME**   | [Clique Aqui](https://github.com/vitorfantin)   | [Clique Aqui](https://www.linkedin.com/in/vitorfantin/)
| **SEU-NOME**   | [Clique Aqui](https://github.com/)   | [Clique Aqui](https://www.linkedin.com/in/)
| **SEU-NOME**   | [Clique Aqui](https://github.com/vitorfantin)   | [Clique Aqui](https://www.linkedin.com/in/vitorfantin/)
| **SEU-NOME**   | [Clique Aqui](https://github.com/)   | [Clique Aqui](https://www.linkedin.com/in/)
| **SEU-NOME**   | [Clique Aqui](https://github.com/)   | [Clique Aqui](https://www.linkedin.com/in/)

## 🎯 Sobre o Site Testado

O **CertiQA Qazando** é uma plataforma educacional voltada para **preparação para certificações ISTQB**, oferecendo conteúdos e fluxos que simulam a experiência de estudo e evolução do aluno dentro do contexto de Quality Assurance.

Este projeto utiliza o site como **ambiente de prática**, com foco em:
- Validação de fluxos críticos
- Garantia de qualidade da experiência do usuário
- Exercício de automação baseada em requisitos e regras de negócio

---

## 🧪 Objetivos do Projeto

- Implementar automação de testes **E2E com Cypress**
- Aplicar **Page Object Model (POM)**
- Executar testes via **CI/CD com GitHub Actions**
- Integrar resultados ao **Cypress Cloud**
- Simular um ambiente profissional de QA

---

## 🛠️ Tecnologias e Ferramentas

- **Cypress**
- **JavaScript**
- **GitHub Actions (CI)**
- **Cypress Cloud**
- **Node.js / NPM**

---

## 📂 Estrutura do Projeto (resumida)
```text
CertiQA-Grupo1
├─ .github/workflows
├─ cypress
│  ├─ e2e/tests/feature
│  ├─ fixtures
│  ├─ pages
│  └─ support
├─ .gitignore
├─ cypress.config.js
├─ package-lock.json
├─ package.json
└─ README.md
```
📥 Clonando o repositório

Abra o terminal dentro da pasta deseja inserir a pasta que será clonada e execute:

```git clone https://github.com/Grupo1-QAzando/CertiQA-Grupo1.git```

📦 Instalando as dependências

Certifique-se de ter o Node.js instalado (versão LTS recomendada).

Em seguida, execute:

```npm install```

▶️ Executando os testes

Abrir o Cypress (modo interativo)

```npx cypress open```

Executar os testes em modo headless (rodar somente no terminal)

```npx cypress run```

## 🔀 Fluxo de Branches e Governança de Código

Este projeto adota um **fluxo controlado de branches**, com foco em **qualidade, rastreabilidade e estabilidade das automações**.

---

### 🌿 Branch `main` (Branch Principal)

A branch **`main`** é considerada o **repositório principal e estável** do projeto.

Características:

- Contém **apenas automações finalizadas e validadas**
- Código **pronto para execução confiável**
- Não permite **push direto**
- Só pode ser atualizada **exclusivamente via Pull Request**

Regras aplicadas:

- Pull Request obrigatório
- Revisão e aprovação necessárias
- Pipeline CI deve estar **100% verde**
- Testes automatizados executados com sucesso

👉 Qualquer alteração na `main` representa uma versão estável das automações.

---

### 🧪 Branch `staging` (Integração e Testes)

A branch **`staging`** é utilizada como **ambiente de desenvolvimento e integração contínua** das automações.

Características:

- Desenvolvimento de novas automações
- Ajustes, refatorações e melhorias
- Validação inicial via pipeline CI

Comportamento:

- **Todo commit** realizado na `staging` dispara automaticamente a **pipeline CI no GitHub Actions**
- Testes são executados para validar:
  - Estabilidade do código
  - Quebra de testes existentes
  - Impacto das novas implementações

👉 A `staging` funciona como **filtro de qualidade**, garantindo que apenas código validado chegue à `main`.

---

