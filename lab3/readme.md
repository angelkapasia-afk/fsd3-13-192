localhost - URL
127.0.1 - IP address

ctrl+c - stop the server

every request from client has a pair of {request, response}

## npm : node package manager
used to install, run, uninstall any program/project and package
- npm install <packageName>
- npm uninstall <packageName>

to use npm, the project must be npm project,
to create npm project we can use
- npm init -y
- it creates a package.json file automatically
package.json holds all the information related to install packages from npm
- update package.json, set type = 'module'
- it also creates a folder node_modules automatically
- node_modules holds the package/library files
- generally we ignore the node_modules by .gitignore


Nodemon - it restart the server automatically when file changes, to install
> npm i nodemon -D

Note: -D flag will install this package as developer dependency

- to execute any program, update the package.json file then start the server as
<b>npm run dev</b>
- start -> it will execute the app on deployment
- dev -> it will start server in development phase (only for developer)

- res: it will  return contents (json/html/plain) to the user/client
- req: it will retrive the information from client to the server
- server send also statusCodes to the client, that indicates the error/ success message
## Status Codes
- 200->ok
- 201->created
- 400->bad request
- 401->unauthorised
- 402->forbidden
- 404->not found
- 500->internal server error

## content type
- text/plain
- text/html
- application/json
- text/css

the content type and status code can be send back to client by two ways

1. res.writeHead
2. res.setHeader
3. res.statusCode

## send html file to client
1. html file
- read html filr using createReadStream
- pipe it with res object
2. html content
- send any html tags/content by using  res.end('<any html tag>')

## JSON (java script object notation)
- server returns data only not html content because html content will be written by frontend developer. the data is in json format

- json always stores data in key value pair enclosed by curly brackets {}
- array can be store by square bracket []
- one pair of curly bracket will represent one object and its property will be seperated by -coma(,)
```
{
    id:1,
    name:'Mobile',
    price: 25000,
    rating:4.5,
    review:200
} 
```
## HEADERS
headers is used to tell the client, the type of data send by the server it maybe html files,json file/data, plain text files,css file , any tokens (for login)
1. text/plain -> text file
2. text/html -> html contents/file
3. application/json -> json contents/file
4. text/css -> stylesheet
5. application/form-data -> for uploading file
6. application/auth -> for tokens
- the headers can be set by res object at server side by two ways

7. res.
8. res.