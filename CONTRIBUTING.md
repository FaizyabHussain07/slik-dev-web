# Contributing to Slik Dev Web App

Thank you for your interest in contributing to the Slik Dev open-source web application! We welcome contributions from anyone, whether it's fixing bugs, improving the documentation, or adding new features.

This document provides guidelines and instructions on how to contribute effectively to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Submitting Pull Requests](#submitting-pull-requests)
- [Local Development Setup](#local-development-setup)
- [Coding Guidelines](#coding-guidelines)
- [Commit Messages](#commit-messages)

---

## Code of Conduct

We expect all contributors to be respectful and collaborative. By participating in this project, you agree to abide by our Code of Conduct (be kind, inclusive, and professional).

---

## How to Contribute

### Reporting Bugs

If you find a bug, please check the [Issues](https://github.com/FaizyabHussain07/slik-dev-web/issues) to see if it has already been reported. If not, open a new issue with a clear title and detailed description:

- Explain what you were trying to do.
- Explain what happened instead.
- Include steps to reproduce the issue.
- Mention your browser, OS, and Node.js version.

### Suggesting Features

We love new ideas! If you have a feature request:
- Search existing [Issues](https://github.com/FaizyabHussain07/slik-dev-web/issues) to ensure it hasn't been requested.
- Open a new issue and detail what you are proposing and why it would be beneficial for the project.

### Submitting Pull Requests

1. **Fork the repository** and clone it locally.
2. **Create a new branch** for your feature or bugfix (`git checkout -b feature/your-feature-name` or `fix/your-fix-name`).
3. Make your changes and commit them with clear, descriptive messages.
4. Push your branch to your fork (`git push origin feature/your-feature-name`).
5. Open a **Pull Request (PR)** against our `main` branch. Provide a clear description of the problem your PR solves or the feature it adds.

---

## Local Development Setup

To work on this project locally, you will need [Node.js](https://nodejs.org/) (v18 or higher) installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/FaizyabHussain07/slik-dev-web.git
   cd slik-dev-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Coding Guidelines

We aim to keep our codebase clean, maintainable, and highly performant. 

- **Tech Stack**: We use React, TypeScript, Vite, Tailwind CSS, and Framer Motion. 
- **TypeScript**: Always add proper types for all defined functions and components. Avoid `any` whenever possible.
- **Styling**: We strictly use Tailwind CSS. Only use vanilla CSS where Tailwind cannot cover the use case.
- **UI Components**: Ensure new UI components align with the project's premium design aesthetic and utilize Lucide icons.
- **Linting**: Ensure your code passes all lint rules before pushing (`npm run lint` if applicable).

---

## Commit Messages

We encourage following the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting, missing semi-colons, etc.
- `refactor:` for refactoring code logically
- `test:` for adding or updating tests
- `chore:` for updating build tasks, package configurations, etc.

Example:
`feat: add dark mode support to the Hero section`

---

Thank you for helping us make Slik Dev better!🚀
