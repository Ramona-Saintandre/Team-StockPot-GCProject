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


``` js 
2 / 4 / 2020
```

Looks like today is error hell day 

Unable to load schema from 'c:\projects\Team-StockPot-GCProject\GC-stockpot-recipeapp\node_modules\@angular\cli\lib\config\schema.json': ENOENT: no such file or directory, open 'c:\projects\Team-StockPot-GCProject\GC-stockpot-recipeapp\node_modules\@angular\cli\lib\config\schema.json'.

[Warn  - 7:20:21 AM] Unhandled Rejection at: Promise [object Promise] reason:, TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received type undefined
[Error - 7:20:22 AM] Request textDocument/formatting failed.
  Message: Request textDocument/formatting failed with message: No parser could be inferred for file: c:\projects\Team-StockPot-GCProject\.gitignore
  Code: -32603 

  Finally got rid of the schema error message , by deleting the Node package, clearing the npm cache, and reinstalling everything 

  npm uninstall -g angular-cli
npm cache clean or npm cache verify (if npm &gt; 5)
npm install -g @angular/cli@latest
I am also running angular 9 now with this error message 

  ERROR in src/app/app.component.html:1:1 - error NG8001: 'app-header' is not a known element:
1. If 'app-header' is an Angular component, then verify that it is part of this module.
2. If 'app-header' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

1 <app-header></app-header>
  ~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/app.component.ts:5:16
    5   templateUrl: './app.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AppComponent.

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

Date: 2020-02-04T12:42:19.764Z - Hash: b1d9fe5ec3410b992959
2 unchanged chunks
chunk {main} main.js, main.js.map (main) 20.2 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 140 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 2.96 MB [initial] [rendered]
Time: 4211ms
: Compiled successfully.
    
    ERROR in src/app/app.component.html:1:1 - error NG8001: 'app-header' is not a known element:
    1. If 'app-header' is an Angular component, then verify that it is part of this module.
    2. If 'app-header' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
    
    1 <app-header></app-header>
      ~~~~~~~~~~~~~~~~~~~~~~~~~
    
      src/app/app.component.ts:5:16
        5   templateUrl: './app.component.html',
                         ~~~~~~~~~~~~~~~~~~~~~~
        Error occurs in the template of component AppComponent.

        Property GC-stockpot-recipeapp is not allowed.

        need to find out why I have two node module folders 

       ``` js 
 2 / 5 / 2020
```

        
        WARNING in AngularCompilerPlugin: Forked Type Checker exited unexpectedly. Falling back to type checking on main thread.
    
new error:
Refused to load the font '<URL>' because it violates the following Content Security Policy directive: "default-src 'none'". Note that 'font-src' was not explicitly set, so 'default-src' is used as a fallback. turned off Grammerly got rid of all but one error message 
Refused to load the image 'http://localhost:4200/favicon.ico' because it violates the following Content Security Policy directive: "default-src 'none'". Note that 'img-src' was not explicitly set, so 'default-src' is used as a fallback.

need to do more research :

https://stackoverflow.com/questions/57433690/angular-8-refused-to-load-load-the-image-because-it-violates-the-following-conte

got it to compile but still with errors 

ERROR in src/app/recipes/recipes.component.html:3:1 - error NG8001: 'app-recipes-list' is not a known element:
1. If 'app-recipes-list' is an Angular component, then verify that it is part of this module.
2. If 'app-recipes-list' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

3 <app-recipes-list></app-recipes-list>
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/recipes/recipes.component.ts:5:16
    5   templateUrl: './recipes.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component RecipesComponent.

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

Date: 2020-02-05T18:58:20.856Z - Hash: f8ee26cb40a210b186bb
2 unchanged chunks
chunk {main} main.js, main.js.map (main) 47.6 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 140 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 2.96 MB [initial] [rendered]     
Time: 6325ms
: Compiled successfully.
    
    ERROR in src/app/recipes/recipes.component.html:3:1 - error NG8001: 'app-recipes-list' is not a known element:
    1. If 'app-recipes-list' is an Angular component, then verify that it is part 
of this module.
    2. If 'app-recipes-list' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' 
to the '@NgModule.schemas' of this component to suppress this message.
    
    3 <app-recipes-list></app-recipes-list>
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
      src/app/recipes/recipes.component.ts:5:16
        5   templateUrl: './recipes.component.html',
                         ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Error occurs in the template of component RecipesComponent.