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
