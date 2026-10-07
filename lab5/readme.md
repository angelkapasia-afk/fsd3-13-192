# Project setup

1. create two folder frontend and backend
2. go to frontend `cd frontend`
    - type `npm create vite@latest`
    - press `Y` if asked to install
    - enter `.` in project name
    - select 'react' as framework from arrow key
    - select JavaScript from variant by arrow key
    - select ESLint by arrow key
    - select Yes and press enter

3. setup tailwind in react project 
   - install tailwind css using `npm install tailwindcss @tailwindcss/vite`
   - open vite.config.js as below image 
   ![alt text](image.png)
   - remove all content of index.css and write `@import "tailwindcss"`top of index.css




-> in react style can be added into html by className because class is a pre defined keyword in react
->when JS functions returns directly html contents, called component.
# rules for making component
1. start with capital letter
2. it must return html
3. must be closed at the calling time
4. it can be used anywhere any times