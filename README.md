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
### 🧪 Branch `staging` (Integração e Consolidação)

A branch **`staging`** é utilizada como **ambiente de consolidação das automações**, recebendo apenas código previamente validado pelas pipelines de CI.

Ela **não é utilizada para desenvolvimento direto**.

Características:

- Consolidação de automações já testadas
- Validação integrada do conjunto de testes
- Base para promoção do código à branch `main`

---

### 🧩 Branches de Teste (`test/*`)

Cada nova automação **deve obrigatoriamente** ser desenvolvida em uma branch no seguinte padrão:


#### test/NOME-DA-FUNCIONALIDADE-TESTE

```text
Exemplo
test/login-fluxo-basico
test/dashboard-bloqueio-fases


Comportamento:
	•	Todo push ou commit em uma branch test/* dispara automaticamente a pipeline CI no GitHub Actions
	•	Os testes são executados para validar:
	•	Funcionamento da nova automação
	•	Não quebra de testes existentes
	•	Qualidade e estabilidade do código

Fluxo esperado:
	1.	Criar a branch test/NOME-DA-FUNCIONALIDADE-TESTE
	2.	Desenvolver e commitar as automações
	3.	Pipeline CI é executada automaticamente
	4.	Com CI verde, solicitar Pull Request para a branch staging
	5.	Código consolidado na staging após revisão

👉 Esse fluxo garante que somente código validado chegue à staging, aumentando a confiabilidade do projeto.