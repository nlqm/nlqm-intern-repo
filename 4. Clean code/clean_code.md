Writing Unit Tests for Clean Code #35
![First test result](image.png)
![Second test result](image-1.png)

📌 How do unit tests help keep code clean?
Within this code base, I did not implement any math functions to face the issues creating by lacking handling errors and edge cases. However, based on my previous experiences, by creating and maintaining unit tests, the code base has the general filter to minimize the possible proportions of bugs that could be caused by simple problems.

📌 What issues did you find while testing?
There are some common issues I found while testing which are: lack of guard clauses within conditions, forgot to early validating inputs, not handling enough edge cases by sanitizing inputs, validating input types before processing and returning error when needed.

Commenting & Documentation #37
📌 When should you add comments?
I add comments to explain the code, not details what the code about, demonstrate complex logic, and clarify limitations about the function.

📌 When should you avoid comments and instead improve the code?
Avoiding add comments when the logic is obvious and simple, should not explaining the basic syntax and always updating comments when changing or improving the code.

Refactoring Code for Simplicity #38
📌 What made the original code complex?
In my old Java project, there were some extreme complex functions which handle so many aspects. It can cause misunderstand problems or unexpected results because so many things run at the same time and they accidentally overwrite each others.

📌 How did refactoring improve it?
Refactoring, and extracting methods to simplify the complicated functions help easily detecting bugs because each function has their own missions now. Renaming variables and functions to more descriptive names to quickly understand for other members.

Avoiding Code Duplication #39
📌 What were the issues with duplicated code?
Duplicate code could cause clash, unexpected results or unwanted errors. It could cause more time in debugging and updating code due to the function or variable duplication.

📌 How did refactoring improve maintainability?
By simplifying. refactoring and extracting methods, the maintainability of the program will be easier and more consistent. Some simple or unexpected bugs are also be fixed.

Writing Small, Focused Functions #40
📌Why is breaking down functions beneficial?
Overcomplicated functions could bring unexpected bugs by overwriting results. Simple functions are also more quick to debug, update and maintain. They could help the team collaboration by providing simple function, other teammates could rapidly understand the functions therefore picking up the workflow efficiently.

📌 How did refactoring improve the structure of the code?
Refactoring includes splitting complicated and multifunction methods into separate methods or improving code aims to reduce code duplication and improve maintainability. By applying this methodology into the code structure, the program will be easier to maintain, reduce bugs, enhance reusability and improve readability.

Naming Variables & Functions #41
📌 What makes a good variable or function name?
Ensuring to name variables and functions based on each programming language rules or company rules such as camel case for Java, avoid using -, etc. Precise, unique and providing enough meanings for that variables and functions while naming them.

📌 What issues can arise from poorly named variables?
Some common mistakes could be causes by poorly named variables are: confusing other people when they read or review your code, duplicating code therefore causes bugs, and time consuming when find the variables.

📌 How did refactoring improve code readability?
Refactoring code for more clear and precise variables and functions's name help the code base becomes more readable and self-explanatory by itself. Example: - Bad: return t - Good return total

Code Formatting & Style Guides #42
📌 Why is code formatting important?
Assuring the consistent code base helps avoiding undesirable bugs, and improve the readability. By keeping those format and style guides in practice, it will be easier and quicker to update, maintain and share for others.

📌 What issues did the linter detect?
From my memory, some issues that linter detect are: exceeded line length, unused variables, inconsistent naming conventions, incorrect indentation, whitespace, and unreachable code.

📌 Did formatting the code make it easier to read?
It does help the code easier to read, consistent code style, improve collaboration and reduce the bugs within the code thanks to linter help such as detecting inconsistent naming conventions, unused variables or unreachable code.
