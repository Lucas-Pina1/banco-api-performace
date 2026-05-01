# 🚀 Testes de Performance - Banco API com K6

## 📌 Introdução

Este repositório contém uma suite completa de **testes de performance** para uma API de banco, desenvolvida com **K6**, uma ferramenta moderna e altamente eficiente para testes de carga, stress e performance.

O objetivo principal é validar o comportamento da API bancária sob diferentes níveis de carga simultânea, identificar gargalos de desempenho, medir tempos de resposta, analisar taxa de erro e garantir a estabilidade do sistema em cenários reais de uso.

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+)** – Linguagem de programação dos scripts
- **K6** – Ferramenta moderna para testes de carga e performance (https://k6.io)
- **Node.js** – Runtime JavaScript (opcional, para gerenciamento de dependências)
- **Git** – Controle de versão

---

## 📁 Estrutura do Repositório

```
banco-api-performace/
├── 📂 config/                    # Configurações do projeto
│   └── config.local.json         # Configurações locais (ex: URLs, timeouts)
├── 📂 fixtures/                  # Dados para os testes
│   ├── postLogin.json           # Dados para teste de login
│   └── postTransferencias.json   # Dados para teste de transferências
├── 📂 helpers/                   # Funções auxiliares reutilizáveis
│   └── autentificacao.js        # Funções de autenticação
├── 📂 tests/                     # Scripts principais de teste
│   ├── login.test.js            # Testes de performance de login
│   └── transferencias.test.js   # Testes de performance de transferências
├── 📂 utils/                     # Utilitários gerais
│   └── variaveis.js             # Variáveis globais e constantes
├── 📜 html-report.html          # Relatório exportado em HTML
├── 📜 package.json              # Dependências do projeto
├── 📜 .gitignore                # Arquivos ignorados pelo Git
└── 📜 README.md                 # Este arquivo
```

---

## 🎯 Objetivo de Cada Grupo de Arquivos

### 📂 `config/`
Contém as configurações específicas do projeto:
- **config.local.json**: Parâmetros de execução como URLs base, timeouts, limites de erro e configurações de carga

### 📂 `fixtures/`
Dados estáticos utilizados nos testes (payloads, credenciais, etc.):
- **postLogin.json**: Dados para autenticação (usuário, senha)
- **postTransferencias.json**: Dados para testes de transferências bancárias

### 📂 `helpers/`
Funções auxiliares reutilizáveis para simplificar os testes:
- **autentificacao.js**: Funções para obter tokens, validar autenticação e gerenciar sessões

### 📂 `tests/`
Scripts principais contendo os cenários de teste de performance:
- **login.test.js**: Testes de carga para o endpoint de login
- **transferencias.test.js**: Testes de carga para o endpoint de transferências

### 📂 `utils/`
Utilitários e variáveis globais:
- **variaveis.js**: Constantes, configurações globais e funções de suporte

### 📜 `html-report.html`
Relatório visual gerado automaticamente pela execução dos testes com K6

---

## ⚙️ Instalação do Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/Lucas-Pina1/banco-api-performace.git
cd banco-api-performace
```

### 2. Instalar o K6

#### 🐧 Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install k6
```

#### 🍎 macOS (Homebrew)
```bash
brew install k6
```

#### 🪟 Windows (Chocolatey)
```bash
choco install k6
```

#### 🌐 Alternativa: Download direto
Visite: https://k6.io/docs/getting-started/installation/

### 3. Verificar instalação

```bash
k6 version
```

---

## ▶️ Execução do Projeto

### ⚠️ Variável de Ambiente Obrigatória

Antes de executar qualquer teste, é **obrigatório** definir a variável de ambiente `BASE_URL` apontando para sua API:

#### 🐧 Linux/macOS
```bash
export BASE_URL=http://localhost:3000
```

#### 🪟 Windows (Command Prompt)
```cmd
set BASE_URL=http://localhost:3000
```

#### 🪟 Windows (PowerShell)
```powershell
$env:BASE_URL="http://localhost:3000"
```

### Executar um teste específico

```bash
k6 run tests/login.test.js
```

```bash
k6 run tests/transferencias.test.js
```

### Executar todos os testes

```bash
k6 run tests/login.test.js && k6 run tests/transferencias.test.js
```

---

## 📊 Execução com Relatório em Tempo Real e Exportação

### 🎯 Dashboard em Tempo Real

Para acompanhar a execução dos testes em tempo real através de um dashboard web interativo:

```bash
K6_WEB_DASHBOARD=true k6 run tests/login.test.js
```

O dashboard estará disponível em: **http://localhost:5565**

### 💾 Exportar Relatório em HTML

Para exportar o relatório automático em formato HTML:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js
```

### 📈 Execução Completa com Dashboard e Exportação

Exemplo executando o teste de transferências com dashboard ativo e exportação do relatório:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/transferencias.test.js
```

Exemplo com a variável `BASE_URL`:

```bash
BASE_URL=http://localhost:3000 K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js
```

### 📋 Variáveis de Ambiente K6 Disponíveis

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `BASE_URL` | URL base da API (obrigatória) | `http://localhost:3000` |
| `K6_WEB_DASHBOARD` | Ativa o dashboard em tempo real | `true` |
| `K6_WEB_DASHBOARD_EXPORT` | Exporta o relatório em HTML | `html-report.html` |

---

## 📝 Exemplos de Execução

### Exemplo 1: Teste simples
```bash
export BASE_URL=http://localhost:3000
k6 run tests/login.test.js
```

### Exemplo 2: Com dashboard em tempo real
```bash
BASE_URL=http://localhost:3000 K6_WEB_DASHBOARD=true k6 run tests/login.test.js
```

### Exemplo 3: Com exportação de relatório
```bash
BASE_URL=http://localhost:3000 K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js
```

### Exemplo 4: Usando arquivo de configuração
```bash
BASE_URL=http://localhost:3000 k6 run tests/login.test.js -c config/config.local.json
```

---

## 📖 Documentação Adicional

- [K6 Documentação Oficial](https://k6.io/docs/)
- [K6 API Reference](https://k6.io/docs/javascript-api/)
- [K6 Cloud](https://app.k6.io/) – Execução em cloud com análises avançadas

---

**Última atualização:** Maio 2026

---

## 👨‍💻 Autor
Lucas Pina
