# 📌 Projeto Voluntário de Automação de Testes – CertiQA Qazando

Este repositório contém um **projeto voluntário de automação de testes end-to-end (E2E)** desenvolvido para o site  
👉 https://www.certiqa-qazando.com/

O objetivo principal é aplicar **boas práticas de Quality Assurance (QA)**, **automação de testes** e **governança de código**, simulando um ambiente profissional real.

---

## 👥 Equipe do Projeto  
**Grupo 1 – MasterClass Turma 5 – 2025 – QAzando**

| Integrante                     | GitHub                                  | LinkedIn |
|--------------------------------|-----------------------------------------|----------|
| **Vitor Evangelista Fantin**    | https://github.com/vitorfantin           | https://www.linkedin.com/in/vitorfantin/ |
| **Rafael Dal Forno dos Santos** | https://github.com/rafaeldalforno        | https://www.linkedin.com/in/rafaeldalforno/ |
| **Hugo Brailko**                   | (https://github.com/hugo-brailko)                    | www.linkedin.com/in/hugobrailko/|
| **Katia Maturana**                   | https://github.com/katitamatu                    | https://www.linkedin.com/in/katia-maturana-03836b316/|
| **Joao Victor**                   | https://github.com/                     | https://www.linkedin.com/in/ |

---

## 🎯 Sobre o Site Testado

O **CertiQA Qazando** é uma plataforma educacional voltada à **preparação para certificações ISTQB**, simulando a jornada do aluno no aprendizado de Quality Assurance.

Este projeto utiliza o site como **ambiente de prática**, com foco em:

- Validação de fluxos críticos
- Verificação de regras de negócio
- Qualidade da experiência do usuário (UX)
- Automação baseada em requisitos

---

## 🧪 Objetivos do Projeto

- Implementar automação de testes **E2E com Cypress**
- Aplicar **Page Object Model (POM)**
- Garantir testes manuteníveis e escaláveis
- Executar testes via **CI/CD com GitHub Actions**
- Integrar execução ao **Cypress Cloud**

---

## 🛠️ Tecnologias e Ferramentas

- Cypress
- JavaScript
- Node.js / NPM
- GitHub Actions
- Cypress Cloud

---

## 📂 Estrutura do Projeto

```text
CertiQA-Grupo1
├─ .github/workflows
├─ cypress
│  ├─ e2e/tests/feature
│  ├─ fixtures
│  ├─ pages
│  └─ support
├─ cypress.config.js
├─ package.json
└─ README.md
```

---

## ▶️ Executando o Projeto

```bash
npm install
npx cypress open
```

---

## 🔀 Fluxo de Branches e Governança de Código

### 🌿 Branch `main`
- Código estável
- Apenas via Pull Request
- CI obrigatório verde

### 🧪 Branch `staging`
- Consolidação das automações
- **Base oficial para criação de branches de teste**

### 🧩 Branches `test/*`

⚠️ **REGRA OBRIGATÓRIA**

> TODA branch `test/*` **DEVE SER CRIADA A PARTIR DA BRANCH `staging`**  
> **NUNCA criar branch de teste a partir da `main`.**

#### Exemplo correto:

```bash
git checkout staging
git pull origin staging
git checkout -b test/nome-da-funcionalidade
```

Fluxo:
1. Criar branch a partir da `staging`
2. Desenvolver automação
3. CI executa automaticamente
4. PR para `staging`
5. Revisão e consolidação

---

Projeto educacional com foco em **qualidade, disciplina de processo e boas práticas de QA**.
