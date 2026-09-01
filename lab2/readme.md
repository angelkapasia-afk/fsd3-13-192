# CRUD
 - C- create/add/insert
 - R- retrive/view/get
 - U- update/edit
 - D- delete/remove

# Fs = file system
interect directly with the client operating system rather than browser.
## major task of FS Module
- Reading and writing Files
  - readFile()
  - writeFile()
  - appendFile()
- Directory management
  - mkdir()
  - rmdir()- depricated
  - rm()
  - readdir()
- Metadata/Information
  - stat()
  - lstat()
  - fstat()
- watching for changes
  - watch()
  - watchFile()
  - unwatchFile()
- Streaming Large files
  - createReadStream()
  - createWriteStream()
- File Operations
  - rename()
  - truncate()
  - unlink()
  - link()
  - syslink()
  ## if await is used in any function , the function must be an async function ##