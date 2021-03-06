# @mnpjs/analyse

[![npm version](https://badge.fury.io/js/@mnpjs/analyse.svg)](https://npmjs.org/package/@mnpjs/analyse)

`@mnpjs/analyse` is The analyse cloud function that will download the project directory and extract its metadata for each release.

```sh
yarn add -E @mnpjs/analyse
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`analyse(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`Config`](#type-config)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import analyse from '@mnpjs/analyse'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `analyse(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-config">`Config`</a>__: Options for the program.

|   Name    |   Type    |    Description    | Default |
| --------- | --------- | ----------------- | ------- |
| shouldRun | _boolean_ | A boolean option. | `true`  |
| __text*__ | _string_  | A text to return. | -       |

```js
/* yarn example/ */
import analyse from '@mnpjs/analyse'

(async () => {
  const res = await analyse({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [MNP][1] 2018

[1]: https://mnpjs.org

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>