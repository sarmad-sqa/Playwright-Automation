# 🎭 Playwright Automation

### End-to-End Test Automation | JavaScript | Page Object Model | Cross-Browser Testing

A Playwright-based test automation project built with JavaScript to practice and demonstrate end-to-end web application testing using modern automation techniques and the Page Object Model (POM).

The project follows an organized structure that separates page objects from test scripts, making the automation code easier to maintain, understand, and extend.

## 🚀 Project Overview

This repository demonstrates practical experience with:

- Browser automation using Playwright.
- Page Object Model (POM) architecture.
- Reusable page objects and test organization.
- Automated end-to-end testing.
- Cross-browser test configuration.
- HTML test reporting.
- GitHub Actions workflow integration.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Playwright | Browser automation |
| JavaScript | Programming language |
| Node.js | Runtime environment |
| Page Object Model | Test architecture |
| GitHub Actions | CI/CD workflow |
| HTML Reporter | Test execution reports |

## 🌐 Browser Configuration

The Playwright configuration includes three browser projects:

- Chromium
- Firefox
- WebKit

Additional configuration includes:

- Parallel test execution.
- HTML reporting.
- CI-specific retries.
- Trace collection on first retry.

## 📂 Project Structure

```text
Playwright-Automation/
│
├── .github/
│   └── workflows/          # GitHub Actions workflows
│
├── pages/
│   └── swag-lab-pages/     # Page Object classes
│
├── tests/                  # Automated test scripts
│
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js
```

## ⚙️ Getting Started

### Prerequisites

- Node.js
- npm
- Visual Studio Code (recommended)

### Installation

Clone the repository:

```bash
git clone https://github.com/sarmad-sqa/Playwright-Automation.git
```

Navigate to the project:

```bash
cd Playwright-Automation
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## ▶️ Running Tests

Run all tests:

```bash
npm test
```

Launch Playwright UI Mode:

```bash
npm run test:ui
```

View the HTML report:

```bash
npx playwright show-report
```

## 📊 Test Reporting

The project uses Playwright's HTML reporter to generate test execution reports.

The configured trace collection helps investigate failures when tests are retried.

## 🔄 CI/CD

A GitHub Actions workflow is included in the repository to support automated testing workflows.

See the `.github/workflows/` directory for the workflow configuration.

## 🎯 Project Goals

- Strengthen practical Playwright automation skills.
- Apply Page Object Model principles.
- Develop maintainable automation scripts.
- Understand browser-based end-to-end testing.
- Practice cross-browser test execution.
- Improve test debugging and reporting skills.

## 🔗 Repository

[GitHub - Playwright-Automation](https://github.com/sarmad-sqa/Playwright-Automation)

## 👨‍💻 Author

**Sarmad Sarwar**

QA Engineer | SQA & Automation Testing

- GitHub: https://github.com/sarmad-sqa
- LinkedIn: https://linkedin.com/in/sarmad-sarwar-98227a167
- Email: sarmadsarwar22@gmail.com

---

*Building reliable automation. Delivering quality software.*
