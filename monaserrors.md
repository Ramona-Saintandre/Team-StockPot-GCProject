npm ERR! code EPERM
npm ERR! syscall open
npm ERR! path C:\Users\thene\AppData\Roaming\npm\ng
npm ERR! errno -4048
npm ERR! Error: EPERM: operation not permitted, open 'C:\Users\thene\AppData\Roaming\npm\ng'
npm ERR!  [OperationalError: EPERM: operation not permitted, open 'C:\Users\thene\AppData\Roaming\npm\ng'] {
npm ERR!   cause: [Error: EPERM: operation not permitted, open 'C:\Users\thene\AppData\Roaming\npm\ng'] {
npm ERR!     errno: -4048,
npm ERR!     code: 'EPERM',
npm ERR!     syscall: 'open',
npm ERR!     path: 'C:\\Users\\thene\\AppData\\Roaming\\npm\\ng'
npm ERR!   },
npm ERR!   stack: "Error: EPERM: operation not permitted, open 'C:\\Users\\thene\\AppData\\Roaming\\npm\\ng'",
npm ERR!   errno: -4048,
npm ERR!   code: 'EPERM',
npm ERR!   syscall: 'open',
npm ERR!   path: 'C:\\Users\\thene\\AppData\\Roaming\\npm\\ng'
npm ERR! }
npm ERR!
npm ERR! The operation was rejected by your operating system.
npm ERR! It's possible that the file was already in use (by a text editor or antivirus),
npm ERR! or that you lack permissions to access it.
npm ERR! 
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running  
npm ERR! the command again as root/Administrator.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\thene\AppData\Roaming\npm-cache\_logs\2020-02-04T02_11_09_023Z-debug.log

thene@monas-envy360 MINGW64 /c/source/Team-StockPot-GCProject/GC-stockpot-recipeapp (master)
$ ng serve --o
bash: /c/Users/thene/AppData/Roaming/npm/ng: Permission denied


2/4/2020

Looks like today is error hell day 

Unable to load schema from 'c:\projects\Team-StockPot-GCProject\GC-stockpot-recipeapp\node_modules\@angular\cli\lib\config\schema.json': ENOENT: no such file or directory, open 'c:\projects\Team-StockPot-GCProject\GC-stockpot-recipeapp\node_modules\@angular\cli\lib\config\schema.json'.

[Warn  - 7:20:21 AM] Unhandled Rejection at: Promise [object Promise] reason:, TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received type undefined
[Error - 7:20:22 AM] Request textDocument/formatting failed.
  Message: Request textDocument/formatting failed with message: No parser could be inferred for file: c:\projects\Team-StockPot-GCProject\.gitignore
  Code: -32603 