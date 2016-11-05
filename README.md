# eslint-plugin-jest

Eslint plugin for Jest

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-jest`:

```
$ npm install eslint-plugin-jest --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-jest` globally.

## Usage

Add `jest` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "jest"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "jest/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





