# ZeroStack Labs Website

Official website for **ZeroStack Labs**.

🌐 **Production:** https://zerostacklabs.dev  
🔒 **Repository:** Private

> **Build. Break. Learn. Repeat.**

---

### Branch & Pull Request Workflow

The `main` branch represents the stable version of the ZeroStack Labs website. Development should normally take place on separate branches and be merged into `main` through Pull Requests.

A GitHub ruleset named **Protect main** has been configured for this repository; however, enforcement of rulesets on private organization repositories requires a paid GitHub plan. Until ZeroStack Labs upgrades to a plan that supports enforcement, contributors are expected to follow these rules voluntarily.

#### Branch Protection Guidelines

When working on the project:

- Do **not** develop directly on `main`.
- Do **not** force-push to `main`.
- Do **not** delete the `main` branch.
- Create a separate branch for features, fixes, documentation, or other changes.
- Push the development branch to GitHub.
- Open a Pull Request targeting `main`.
- When practical, have another ZeroStack Labs contributor review the Pull Request before merging.
- Confirm that the application builds and functions correctly before merging.
- Delete completed development branches after they have been merged.

The intended workflow is:

```text
main
  │
  ├── feature/homepage
  │       ↓
  │   Development
  │       ↓
  │   Commit & Push
  │       ↓
  │   Pull Request
  │       ↓
  │   Review & Testing
  │       ↓
  └──── Merge → main
```

#### Starting New Work:

Always begin with an up-to-date copy of `main`.

```text
git checkout main
git pull
```

Create a development branch

```text
git checkout -b feature/short-description
```

Suggested branch prefixes include:

```text
feature/    New functionality
fix/        Bug fixes
docs/       Documentation
refactor/   Code restructuring
chore/      Maintenance and configuration
```

Examples:

```text
feature/homepage
feature/project-gallery
fix/mobile-navbar
docs/update-readme
refactor/project-components
chore/update-dependencies
```

#### Submitting Changes:

After completing and testing the work:

```text
git status
git add .
git commit -m "Add featured projects section"
git push -u origin feature/short-description
```

Open a Pull Request on GitHub from the development branch into `main`.
After the Pull Request has been reviewed and merged:

```text
git checkout main
git pull
git branch -d feature/short-description
```

The remote branch may also be deleted after merging.

---

## Getting Started

### Prerequisites

Install a current supported version of **Node.js** and **npm**.

Verify the installation:

```bash
node --version
npm --version
```

---

# Website Engineers:

#### Alex Pulido

#### Robby Wideman
