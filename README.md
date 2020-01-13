# ts-node-babel-preset

typescript-node with babel preset

---

## Repository File Descriptions

- `tsconfig.json` - configuration for type-checking  

> the fields in this file are targeted for compatability

- `index.js` - a base helper module for Typescript & Babel web-based applications

- `package.json` - package configuration for npm registry. Includes project metadata.

### Additional Info

_Why was this made?_

I'm glad you are interested!

TL;DR

[Typescript](add-link) does not ship with a runtime, or handle polyfills.

---

[Babel](add-link) has been used in many Javascript applications, and supports the [NodeJS](add-link) development community by transforming modern Javascript features for different runtimes and browsers. Although, it does not include _Type-Checking_.  

This is where Typescript comes into play. Combined with Babel, Typescript applications can be created to support the diversity of web-based applications.  
Large software applications can also benefit greatly from type checking, maintainability through enforced types, and additional intellisense through IDEs.
