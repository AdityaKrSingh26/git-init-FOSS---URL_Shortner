Here's the updated `CONTRIBUTING.md` file, now with detailed commit message rules:

---

# Contributing to URL Shortener

Thank you for considering contributing to the project! We are excited to welcome your ideas and improvements. This guide will help you get started with your contributions.

## How to Contribute

### 1. Fork the Repository

- Head over to the main repository.
- Click the "Fork" button at the top right to create a copy of this repository under your GitHub account.

### 2. Clone Your Fork

- Once you have forked the repository, clone it to your local machine to begin working on it.

```bash
git clone https://github.com/<your-username>/URL_Shortner.git
```

### 3. Create a New Branch

Before starting your changes, create a new branch to isolate your work.

```bash
git checkout -b feature/my-new-feature
```

### 4. Make Your Changes

Now that you're on your new branch, make the necessary changes to the project. Here are some contribution ideas:
- **Bug Fixes**: Identify and fix bugs in the project.
- **Feature Enhancement**: Add new features or improve existing ones.
- **Documentation**: Help improve the documentation by making it clearer or adding missing information.
- **Refactoring**: Improve the structure and readability of the code without changing its behavior.

### 5. Commit and Push Your Changes

#### Commit Message Guidelines

Follow these rules for writing clear and consistent commit messages:

1. **Structure:**
   - Use a **short summary** on the first line (under 50 characters).
   - Separate the summary from the body with a blank line.
   - Provide a detailed description in the body if needed.

2. **Use the imperative mood**:
   - Example: `Fix bug with URL tracking` rather than `Fixed` or `Fixes`.
   
3. **Capitalization and Punctuation:**
   - Start the summary with a capital letter.
   - Do not add a period at the end of the summary.

4. **Types of commits:**
   - **feat**: A new feature (e.g., `feat: add IP tracking`).
   - **fix**: A bug fix (e.g., `fix: correct tracking logic`).
   - **docs**: Documentation changes (e.g., `docs: update README`).
   - **style**: Code style changes (e.g., `style: format CSS`).
   - **refactor**: Refactoring code without changing its behavior (e.g., `refactor: simplify tracking algorithm`).
   - **test**: Adding or updating tests (e.g., `test: add test for URL validation`).
   - **chore**: Miscellaneous tasks (e.g., `chore: update dependencies`).

#### Example:

```bash
git commit -m "fix: resolve issue with URL validation"
```

- After making your changes, commit them with a clear message explaining what you’ve done.

```bash
git add .
git commit -m "feat: implement custom URL aliases"
```

- Push your changes to your forked repository.

```bash
git push origin feature/my-new-feature
```

### 6. Open a Pull Request

- Once your changes are pushed, navigate to your forked repository on GitHub.
- Click on the "New Pull Request" button to submit your changes for review.
- Please provide a detailed description of your changes and why they are necessary.

### 7. Respond to Reviews

Project maintainer may review your pull request and suggest changes. Please address any feedback promptly and resubmit your pull request after making the required adjustments.

## Guidelines

To keep the codebase clean and consistent, please follow these guidelines:

### Code Style
- **JavaScript/Node.js**: Follow the standard JavaScript/Node.js coding conventions.
- **CSS**: Ensure CSS is clean and organized.
- **React Components**: Keep components modular and reusable.

### Commit Messages
- Follow the commit message rules detailed above.
- Make sure your commit history is clean and descriptive.

### Reporting Issues
If you find any issues, feel free to open a new issue on the GitHub repository. Please include:
- A detailed description of the issue.
- Steps to reproduce the issue, if applicable.
- Screenshots or error messages, if possible.

## Get in Touch

If you need help or have any questions, feel free to open a discussion or reach out via issues. We’ll be happy to assist you!

---
