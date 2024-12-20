# Jobins Assignment - Automation Test Suite

## Overview
This repository contains the test artifacts for the Jobins assignment. The artifacts include the following deliverables:

1. **Test Plan Document**: Located in the `cypress/test-artifacts` folder.
2. **Test Cases and Scripts**: Automation test scripts are written using Cypress and are in the `cypress` directory.
3. **Bug Report**: Available in the `cypress/test-artifacts` folder.
4. **Test Summary Report with Recommendations**: Available in the `cypress/test-artifacts` folder.
5. **Automation Test Files**: All necessary test files are in the `cypress` directory.
6. **Instructions to Run Automation Tests**: Detailed below.

---

## Prerequisites

Before running the tests, ensure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **npm** (Node Package Manager)
- **Cypress** (installed via `npm` dependencies)

Additionally, you will need a Percy token for visual testing. Sign up for Percy [here](https://percy.io/) to obtain your token.

---

## Environment Setup

1. Clone the repository:
   ```bash
   git clone [repository_url]
   cd jobins-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set the Percy token as an environment variable:
   ```bash
   export PERCY_TOKEN=your_percy_token_here
   ```
   Replace `your_percy_token_here` with the token obtained from Percy.

---

## Running the Tests

### Clean Previous Reports and Downloads
To avoid clutter, clean up previous downloads and reports using the following commands:
```bash
npm run clean:downloads
npm run delete:reports
```

### Execute Tests
To run the automation tests, execute the following command:
```bash
npm run cy:run_test
```
This command will:
- Clean existing reports.
- Run all the Cypress tests.
- Generate a Mochawesome report for the test results.

### View Test Reports
After the tests have run, the Mochawesome report will be available in the `cypress/reports` directory. Open the HTML file to view the detailed test results.

---

## Key Points

- **Test Artifacts**: All test-related documents, reports, and logs are stored in the `cypress/test-artifacts` folder.
- **Percy Visual Testing**: Ensure the `PERCY_TOKEN` environment variable is set before running tests that include visual snapshots.
- **Reusable Scripts**: The automation scripts are modular and can be reused for similar testing scenarios.

---

## Troubleshooting

1. **Cypress not found**:
   If Cypress is not installed, run:
   ```bash
   npm install cypress --save-dev
   ```

2. **Percy token not set**:
   Ensure the environment variable `PERCY_TOKEN` is exported properly.

3. **Report not generated**:
   Verify the `cypress-mochawesome-reporter` is installed and configured correctly in `cypress.json`.

---

## Contact
For any questions or issues, please reach out to [Suraj Anand / anandsuraj544@gmail.com].

