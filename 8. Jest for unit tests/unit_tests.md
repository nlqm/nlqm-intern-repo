Introduction to Unit Testing with Jest #16
![first test result](image.png)

📌 Why is automated testing important in software development?
By using automated testing, software could be automatically checked before implementation. With simple changes, automated testing could quickly check the new updates and implement it right away, help the CI/CD process continuously and reduce waiting time. Automatically testing could also help us check the small problems and tackle them immediately before they become serious.

📌 What did you find challenging when writing your first Jest test?
I encounter the problem with exporting the function and importing within the test. The test file did not accept the import statement outside the module. After researching this error, I realize that Jest does not support ES module including import function by default. Because of that, I have to change to commonJS syntax to fix this problem by module exports and require syntax.
![Failed test run](image-1.png)
