# 🧪 SauceDemo Playwright E2E Framework

End-to-end UI automation framework built with **Playwright + TypeScript** for testing the SauceDemo application.

🔗 Target application: https://www.saucedemo.com/

---

## 🚀 Tech Stack

* Playwright
* TypeScript
* Page Object Model (POM)
* Custom Fixtures
* Environment Configuration (dotenv)
* GitHub Actions (CI/CD)

---

## 📁 Project Structure

```
saucedemo-playwright-e2e/
│
├── .env
├── playwright.config.ts
├── config/
│   └── config.ts
│
├── pages/              # Page Object Models
├── tests/
│   ├── setup/          # Auth setup (storageState)
│   ├── *.spec.ts       # Test specs
│
├── fixtures/           # Custom Playwright fixtures
├── test-data/          # Test data (users, etc.)
│
├── playwright-report/  # HTML reports
```

---

## 🧪 Test Coverage

### ✅ Positive Flows

* Login with standard user
* Add product to cart
* Complete checkout flow

### ❌ Negative Scenarios

* Locked user login
* Problem user validation

---

## ⚙️ Setup

```bash
npm install
npx playwright install
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```
BASE_URL=https://www.saucedemo.com/
STANDARD_USER=standard_user
PASSWORD=secret_sauce
```

---

## ▶️ Running Tests

### Run all tests

```bash
npx playwright test
```

### Run with UI mode

```bash
npx playwright test --ui
```

### Show report

```bash
npx playwright show-report
```

---

## 🔑 Authentication Strategy

This project uses **Playwright storageState** for faster and cleaner tests:

* Login is executed once in `tests/setup/auth.setup.ts`
* Auth state is saved to `playwright/.auth/storageState.json`
* All tests reuse authenticated session

✅ No repeated login steps
✅ Faster execution
✅ More stable tests

---

## 🧩 Framework Design

* **Page Object Model (POM)** for maintainability
* **Custom fixtures** for cleaner test setup
* **Centralized config** using environment variables
* **Reusable test data layer**
* **Explicit navigation** for reliability

---

## 📊 Reporting

* HTML report generated automatically
* Trace & screenshot captured on failure

---

## 🚀 CI/CD (GitHub Actions)

Tests run automatically on:

* Push to `main` / `master`
* Pull Requests

Pipeline includes:

* Dependency installation
* Browser setup
* Test execution
* Report artifact upload

---

## 🧠 Key Highlights

* Clean and scalable test architecture
* Separation of concerns (POM, data, fixtures)
* Auth optimization using storageState
* CI-ready and GitHub-integrated
* Designed for real-world QA automation scenarios

---

## 🎯 Future Improvements

* API + UI hybrid testing
* Test tagging (smoke / regression)
* Parallel sharding in CI
* Advanced reporting (Slack / PR comments)

---

## 👨‍💻 Author

QA Automation Engineer Portfolio Project
