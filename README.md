Module 4 LAB 1: Protecting Resources

The aim of this project is to install have Visual Studio Code with REST Client Plugin installed.
Basic understanding of RESTful APIs and HTTP methods. 

Below are the instructions:

1) Delete the cookies to prevent any issues during browsing, for privacy prpose and to free up space.
2) Download the given  Module 4 Activity 1 StartupCode.zip and extract to
    C:\Users\conta\OneDrive\Desktop\IFT458_Middleware_Prog\Module_4
3) The node_modules folder is empty. So,to install dependencies follow the below commands in the terminal in this path:
    C:\Users\conta\OneDrive\Desktop\IFT458_Middleware_Prog\Module_4\Module_4_Activity_1_StartupCode\2-Project_Authentication_And_Authorization>
    npm install
    npm init -y
    npm i express ejs express-ejs-layouts
    npm i --save-dev nodemon
    npm i mongoose
    npm i --save-dev dotenv
    npm install jsonwebtoken
    nodemon .\server.js
    Make necessary changes on package.json
4) Delete .vscode folder from 
    C:\Users\conta\OneDrive\Desktop\IFT458_Middleware_Prog\Module_4\Module_4_Activity_1_StartupCode\2-Project_Authentication_And_Authorization
5) Open server.js from VS
6) Press Ctrl+Shift+D to open the debugging panel in Visual Studio Code.
7) Open./custom-middlewares/authMiddleware.js and add Breakpoints
8) Now run nodemon ./server.js from the Terminal
9) A message DB connection is successful.
10) Open Chrome and type http://localhost:3000 and hit Enter
11) Welcome to Book Exchange page is displayed.
12) Click on Book exchange option
13) Add a new book page is displayed
14) Make the necessary changes in authmiddleware.js
15) Install REST API extension for VSCode
16) Create X-UnitTests folder and create book-requests<StudentID>.http
17) Run the POST,GET, GET by ID requests in the .http file and verify the output.
18) Confirm if the same output is present in ATLAS DB. 
