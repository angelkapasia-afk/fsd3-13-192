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
