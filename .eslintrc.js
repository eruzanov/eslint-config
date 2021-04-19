module.exports = {
    parser: "@babel/eslint-parser",
    env: {
        browser: true,
        jest: true,
    },
    extends: [
        "airbnb",
        "prettier",
        "prettier/react",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    rules: {
        "import/prefer-default-export": "off", // отключили проверку, не хотим экспортить дефолты,
        "import/no-unresolved": "off", // отключили проверку, видимо не сконфигурировали линтер на ?inline подключение svg,
        "import/extensions": "off", // отключили проверку, не хотим писать расширения файлов при импорте,
        "react/prop-types": "off", // отключили проверку propTypes, ибо используем интерфейсы TS,
        "react/jsx-one-expression-per-line": "off", // отключили, хотим писать смешанные строки с выражениями и символами,
        "react/jsx-props-no-spreading": "off", // отключили првоерку, решили что будем использовать spread для атрибутов,
        "react/button-has-type": "off", // отключили обязательный атрибут type тега button, все опытные, знают что по дефолту submit,
        "react-hooks/rules-of-hooks": "error", // добавили проверку что хук вызывается только из компонента или хука,
        "react-hooks/exhaustive-deps": "warn", // добавили проверку зависимостей эффекта реакт хука,
        "react/state-in-constructor": "off", // отключили првоерку на объявление стейта в конструкторе, решили что нам это не надо,
        "no-plusplus": "off",
        "jsx-a11y/anchor-is-valid": "off", // добавили заглушку для кейса что <a> не имеет href, находясь внутри Link,
        // добавили возможность оборачивать input в label и не использовать htmlFor
        "jsx-a11y/label-has-associated-control": [
            "error",
            {
                required: {
                    some: ["nesting", "id"],
                },
            },
        ],
        "jsx-a11y/label-has-for": [
            "error",
            {
                required: {
                    some: ["nesting", "id"],
                },
            },
        ],
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: "*", next: "return" },
            { blankLine: "always", prev: "*", next: "block-like" },
            { blankLine: "always", prev: "block-like", next: "*" },
        ],
        "import/order": [
            "error",
            {
                groups: [
                    ["builtin", "external"],
                    ["internal", "parent", "sibling", "index"],
                ],
                "newlines-between": "always",
            },
        ],
        "import/first": ["error", "absolute-first"],
        "prettier/prettier": [
            "error",
            {
                printWidth: 120,
                tabWidth: 4,
                singleQuote: true,
                arrowParens: "always",
                trailingComma: "es5",
            },
        ],
    },
    globals: {
        rstat: true,
        grecaptcha: true,
        cy: true,
    },
};
