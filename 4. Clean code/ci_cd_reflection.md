Static Analysis Checks in CI/CD #33
📌 What is the purpose of CI/CD?
CI means continuos integration which automatize the checking process by ensuring the commit will be made after successfully passing all the tests. If the new change does not pass all the tests, it will notify you right away so you can edit it. CD means continuos development which will automatically pushed the changes to development stage to be able to publish if its already successfully passed all the test from CI stage.

📌 How does automating style checks improve project quality?
By using automating spelling checks, coders can save time spending on review their code or spelling issues to spend on more important step.

📌 What are some challenges with enforcing checks in CI/CD?

1. It could take forever to check the new changes to run through all the test cases and therefore postponing the project updates.
2. If the test cases are created with so many strict rules, the testing time for new updates will be escalated.
3. Automation always left possibilities to collapse code base when all the test cases could not detect mistakes.
4. Lack of room for creativity. The test cases have to created with consideration to understand everyone's ideas to ensure the code base but not too strict so it will prevent some right changes but coding in different way of thinking.

📌 How do CI/CD pipelines differ between small projects and large teams?
CI/CD pipelines for small projects could be simple, quick to set up and rapidly reconstruct in the case of collapsed project happened. For huge teams, the CI/CD pipelines are more complicated with stricter tests runs and project rules to overcome and assuring the project protection while pushing new updates. In the worst case happened with the code base, the large teams definitely faces the more tremendous consequences which more difficult to reconstruct. Huge team also face the difficulties to solve the clash between different platform used within the projects while they use different softwares for separate parts of the project.
