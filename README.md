# LearnPlaywright - Formy Project Automated Testing

This repository contains an **end-to-end (E2E) automated test suite** built with **Playwright** and **TypeScript** to test various web components on the [Formy Project](https://formy-project.herokuapp.com/) site.

The project is structured around a **modular architecture** using exported and imported *helper functions*. This design allows test scripts to be executed either independently per component or as part of integrated workflows across multiple pages.

---

## 🚀 Features & Components Tested

* **Autocomplete**: Automated and precise population of address form fields.
* **Datepicker**: Dynamic current-date population with support for manual date overrides.
* **Radio Button**: Single option selection via `.nth()` locators and iterative testing (*looping*) to verify all radio choices.
* **Page Scroll**: Explicit page scrolling using `scrollIntoViewIfNeeded()` to bring bottom-page form fields into view before filling.
* **Dropdown**: Cross-page navigation using main dropdown menus integrated with component-specific test functions.
* **CI/CD Integration**: Automated test execution via GitHub Actions Workflows on push and pull requests.

---

## 🛠️ Tech Stack

* **[Playwright](https://playwright.dev/)**: End-to-end testing framework.
* **[TypeScript](https://www.typescriptlang.org/)**: Type-safe programming language for test reliability.
* **GitHub Actions**: Continuous Integration (CI/CD) test automation.
* **Node.js**: JavaScript execution environment.

---

## 📂 Project Structure

```text
LearnPlaywright/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD pipeline configurations
├── tests/
│   ├── Autocomplete.spec.ts        # Autocomplete helper & standalone test
│   ├── Button.spec.ts              # Button component test
│   ├── CheckboxPractice.spec.ts    # Checkbox component test
│   ├── DatePickerPractice.spec.ts  # Datepicker helper & standalone test
│   ├── DropdownPractice.spec.ts    # Dropdown navigation integration test
│   ├── Learn.spec.ts               # General practice test script
│   └── ScrollPractice.spec.ts      # Page Scroll helper & standalone test
├── package.json
├── playwright.config.ts            # Main Playwright configuration
└── README.md
