# OrangeHRM Login Automation - Cypress

## Feature
Login automation for OrangeHRM
Automation ini mencakup:
- Login scenario normal & negative
- Penggunaan Cypress Intercept untuk simulasi response backend
- Penggunaan Page Object Model (POM)

## Struktur Project
```text
cypress
│
├── e2e
│   ├── intercept
│   │   └── login-intercept.cy.js      # Test automation login menggunakan Cypress Intercept
│   │       
│   ├── pom
│   │   └── login.cy.js                # Test automation login menggunakan Page Object Model (POM)
│   │       
│   │
│   └── login.cy.js                    # Test login dasar tanpa POM dan tanpa intercept
│       
│
├── fixtures
│   └── pom
│   │   └── loginData.json             # Data login khusus untuk test menggunakan POM
│   │       
│   └── loginData.json                 # Data login untuk test dasar / intercept
│ 
├── pages
│   └── loginPage.js                   # Page Object Model (selector & action login)
│       
└── support
    ├── commands.js                    # Custom Cypress command
    │   
    └── e2e.js                          # Konfigurasi Cypress
```

## Test Cases
TC-01 Valid Login  
TC-02 Invalid Login  
TC-03 Username valid & password empty  
TC-04 Username empty & password valid  
TC-05 Both fields empty
<p align="center">
  <img src="assets/images/basic-test.png" width="700">
</p>

## Test Cases - Intercept
1. Login Success  
2. Login Failed - Wrong password
3. Login Failed - Empty username
4. Login Failed - Server error
5. Login with delayed response
6. <p align="center">
  <img src="assets/images/intercept-test.png" width="700">
</p>

## Test Cases - POM
1. Login Success  
2. Login Failed - Wrong Password
3. Login Failed - Empty Username
4. Login failed - Empty password
5. Login failed - Both fields empty
<p align="center">
  <img src="assets/images/pom-test.png" width="700">
</p>
