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
fix: deleted node folder and re-ran npm install and it works 