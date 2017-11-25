# Minimalistic ES6+ starter with Babel and Tap for testing
just a simple nodejs boilerplate project starter
includes: 
- [Babel.js](https://babeljs.io/) for ES6+ modules
- [Tap](http://www.node-tap.org/) for testing
- [ESLint](https://eslint.org/) for linting (airbnb rules and precommit hooks)

# start/test
Check `package.json` for full list of run scripts.

**Start**
```
npm start
```

**Watch and Restart**
```
npm run watch
``` 

**Testing**
```
npm test
```

if you prefer continuous testing while you are coding, just use `nodemon`.
```
# npm install -g nodemon
nodemon -x npm test
```

**Test Coverage**

Uses `codecov` to generate a nice code coverage report.
http://www.node-tap.org/coverage/
```
npm run test:coverage
```


# Directory structure
```
.
├── LICENSE # MIT
├── README.md # You are here
├── lib # put all your code here
│   ├── index.js
│   └── index.test.js # Use <filename>.test.js for tests
└── package.json
```
