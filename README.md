**CLI and  Library Wrapper**
wrap stein library and cli for get some data.

# CLI
- **Installation **

`npm install -g https://github.com/syns2191/cli-wrapper.git`

- **wrap-cli-ex features**
 - get latest 10 data
 - search data by commodity
 - search data by area
 - search data by range price


## **Library Wrapper**

- **Installation**

`npm install --save https://github.com/syns2191/wrapper-library.git`

- **Code structure**

````
src
 ┣ examples
 ┃ ┗ index.ts
 ┣ interfaces
 ┃ ┣ IArea.ts
 ┃ ┣ Icomodity.ts
 ┃ ┣ ICurrency.ts
 ┃ ┣ IRequest.ts
 ┃ ┗ ISize.ts
 ┣ lib
 ┃ ┣ filter-helper.ts
 ┃ ┣ request-helper.ts
 ┃ ┗ request.ts
 ┣ modules
 ┃ ┣ area
 ┃ ┃ ┗ index.ts
 ┃ ┣ commodities
 ┃ ┃ ┗ index.ts
 ┃ ┣ currency
 ┃ ┃ ┗ index.ts
 ┃ ┗ size
 ┃ ┃ ┗ index.ts
 ┣ utilities
 ┃ ┗ cache.ts
 ┗ index.ts
````

**Usage**

`$wrap-cli-ex`

