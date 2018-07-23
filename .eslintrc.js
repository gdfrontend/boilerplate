// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    parser: 'babel-eslint',
    extends: ['eslint:recommended', 'airbnb'],
    // required to lint *.jsx files
    plugins: [
        'react'
    ],
    // check if imports actually resolve
    settings: {
        'import/resolver': {
            webpack: {
                config: 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    rules: {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        /**
         * Strict mode
         */
        // babel inserts "use strict"; for us
        "strict": [2, "never"], // http://eslint.org/docs/rules/strict

        /**
         * ES6
         */
        "no-var": 2, // http://eslint.org/docs/rules/no-var
        "prefer-const": 2, // http://eslint.org/docs/rules/prefer-const
        "arrow-parens": [1, "as-needed"], // http://eslint.org/docs/rules/arrow-parens
        "arrow-body-style": [1, "as-needed"], // http://eslint.org/docs/rules/arrow-body-style
        "prefer-destructuring": 0, // http://eslint.org/docs/rules/prefer-destructuring
        "object-curly-newline": 0, // http://eslint.org/docs/rules/object-curly-newline

        /**
         * Variables
         */
        "no-shadow": 2, // http://eslint.org/docs/rules/no-shadow
        "no-shadow-restricted-names": 2, // http://eslint.org/docs/rules/no-shadow-restricted-names
        "no-unused-vars": [1, { // http://eslint.org/docs/rules/no-unused-vars
            "vars": "local",
            "args": "after-used"
        }],
        "no-use-before-define": 2, // http://eslint.org/docs/rules/no-use-before-define

        /**
         * Possible errors
         */
        "no-cond-assign": [2, "always"], // http://eslint.org/docs/rules/no-cond-assign
        "no-constant-condition": 1, // http://eslint.org/docs/rules/no-constant-condition
        "no-dupe-keys": 2, // http://eslint.org/docs/rules/no-dupe-keys
        "no-duplicate-case": 2, // http://eslint.org/docs/rules/no-duplicate-case
        "no-empty": 2, // http://eslint.org/docs/rules/no-empty
        "no-ex-assign": 2, // http://eslint.org/docs/rules/no-ex-assign
        "no-extra-boolean-cast": 0, // http://eslint.org/docs/rules/no-extra-boolean-cast
        "no-extra-semi": 1, // http://eslint.org/docs/rules/no-extra-semi
        "no-func-assign": 2, // http://eslint.org/docs/rules/no-func-assign
        "no-inner-declarations": 2, // http://eslint.org/docs/rules/no-inner-declarations
        "no-invalid-regexp": 0, // http://eslint.org/docs/rules/no-invalid-regexp
        "no-irregular-whitespace": 0, // http://eslint.org/docs/rules/no-irregular-whitespace
        "no-obj-calls": 2, // http://eslint.org/docs/rules/no-obj-calls
        "no-reserved-keys": 0, // http://eslint.org/docs/rules/no-reserved-keys
        "no-sparse-arrays": 0, // http://eslint.org/docs/rules/no-sparse-arrays
        "no-unreachable": 2, // http://eslint.org/docs/rules/no-unreachable
        "use-isnan": 2, // http://eslint.org/docs/rules/use-isnan
        "block-scoped-var": 0, // http://eslint.org/docs/rules/block-scoped-var
        "global-require": 1, // http://eslint.org/docs/rules/global-require
        "no-unused-expressions": 0, // http://eslint.org/docs/rules/no-unused-expressions
        "class-methods-use-this": 0, // http://eslint.org/docs/rules/class-methods-use-this

        /**
         * Best practices
         */
        "consistent-return": 0, // http://eslint.org/docs/rules/consistent-return
        "curly": [2, "multi-line"], // http://eslint.org/docs/rules/curly
        "default-case": 2, // http://eslint.org/docs/rules/default-case
        "dot-notation": [1, { // http://eslint.org/docs/rules/dot-notation
            "allowKeywords": true
        }],
        "eqeqeq": 2, // http://eslint.org/docs/rules/eqeqeq
        "guard-for-in": 0, // http://eslint.org/docs/rules/guard-for-in
        "no-caller": 0, // http://eslint.org/docs/rules/no-caller
        "no-else-return": 2, // http://eslint.org/docs/rules/no-else-return
        "no-eq-null": 1, // http://eslint.org/docs/rules/no-eq-null
        "no-eval": 2, // http://eslint.org/docs/rules/no-eval
        "no-extend-native": 2, // http://eslint.org/docs/rules/no-extend-native
        "no-extra-bind": 2, // http://eslint.org/docs/rules/no-extra-bind
        "no-fallthrough": 2, // http://eslint.org/docs/rules/no-fallthrough
        "no-floating-decimal": 2, // http://eslint.org/docs/rules/no-floating-decimal
        "no-implied-eval": 2, // http://eslint.org/docs/rules/no-implied-eval
        "no-lone-blocks": 2, // http://eslint.org/docs/rules/no-lone-blocks
        "no-loop-func": 2, // http://eslint.org/docs/rules/no-loop-func
        "no-multi-str": 2, // http://eslint.org/docs/rules/no-multi-str
        "no-native-reassign": 2, // http://eslint.org/docs/rules/no-native-reassign
        "no-new": 0, // http://eslint.org/docs/rules/no-new
        "no-new-func": 2, // http://eslint.org/docs/rules/no-new-func
        "no-new-wrappers": 0, // http://eslint.org/docs/rules/no-new-wrappers
        "no-octal": 2, // http://eslint.org/docs/rules/no-octal
        "no-octal-escape": 2, // http://eslint.org/docs/rules/no-octal-escape
        "no-param-reassign": 2, // http://eslint.org/docs/rules/no-param-reassign
        "no-proto": 2, // http://eslint.org/docs/rules/no-proto
        "no-redeclare": 2, // http://eslint.org/docs/rules/no-redeclare
        "no-return-assign": 1, // http://eslint.org/docs/rules/no-return-assign
        "no-script-url": 2, // http://eslint.org/docs/rules/no-script-url
        "no-self-compare": 2, // http://eslint.org/docs/rules/no-self-compare
        "no-sequences": 1, // http://eslint.org/docs/rules/no-sequences
        "no-throw-literal": 2, // http://eslint.org/docs/rules/no-throw-literal
        "no-with": 2, // http://eslint.org/docs/rules/no-with
        "radix": 2, // http://eslint.org/docs/rules/radix
        "vars-on-top": 2, // http://eslint.org/docs/rules/vars-on-top
        "wrap-iife": [2, "any"], // http://eslint.org/docs/rules/wrap-iife
        "yoda": 2, // http://eslint.org/docs/rules/yoda
        "comma-dangle": 0, // http://eslint.org/docs/rules/comma-dangle

        /**
         * Style
         */
        "indent": [2, 4, { // http://eslint.org/docs/rules/indent
            "SwitchCase": 1
        }],
        "brace-style": [1, // http://eslint.org/docs/rules/brace-style
            "1tbs", {
                "allowSingleLine": false
            }
        ],
        "quotes": [
            2, "single", "avoid-escape" // http://eslint.org/docs/rules/quotes
        ],
        "camelcase": [2, { // http://eslint.org/docs/rules/camelcase
            "properties": "never"
        }],
        "comma-spacing": [2, { // http://eslint.org/docs/rules/comma-spacing
            "before": false,
            "after": true
        }],
        "eol-last": 2, // http://eslint.org/docs/rules/eol-last
        "func-names": 1, // http://eslint.org/docs/rules/func-names
        "key-spacing": [2, { // http://eslint.org/docs/rules/key-spacing
            "beforeColon": false,
            "afterColon": true
        }],
        "new-cap": [2, { // http://eslint.org/docs/rules/new-cap
            "newIsCap": true
        }],
        "no-multiple-empty-lines": [2, { // http://eslint.org/docs/rules/no-multiple-empty-lines
            "max": 2
        }],
        "no-nested-ternary": 1, // http://eslint.org/docs/rules/no-nested-ternary
        "no-new-object": 2, // http://eslint.org/docs/rules/no-new-object
        "no-spaced-func": 2, // http://eslint.org/docs/rules/no-spaced-func
        "no-trailing-spaces": 2, // http://eslint.org/docs/rules/no-trailing-spaces
        // "no-wrap-func": 1, // http://eslint.org/docs/rules/no-wrap-func
        "no-underscore-dangle": 0, // http://eslint.org/docs/rules/no-underscore-dangle
        "padded-blocks": 0, // http://eslint.org/docs/rules/padded-blocks
        "semi": [1, "never"], // http://eslint.org/docs/rules/semi
        "keyword-spacing": 2, // http://eslint.org/docs/rules/keyword-spacing
        // "space-after-keywords": 2, // http://eslint.org/docs/rules/space-after-keywords
        "space-before-blocks": 2, // http://eslint.org/docs/rules/space-before-blocks
        "space-before-function-paren": [2, "never"], // http://eslint.org/docs/rules/space-before-function-paren
        "space-infix-ops": 2, // http://eslint.org/docs/rules/space-infix-ops
        // was removed and replaced by: keyword-spacing
        // "space-return-throw-case": 2, // http://eslint.org/docs/rules/space-return-throw-case
        "spaced-comment": 2, // http://eslint.org/docs/rules/spaced-comment
        // "spaced-line-comment": 2, // http://eslint.org/docs/rules/spaced-line-comment
        "linebreak-style": 0, // http://eslint.org/docs/rules/linebreak-style
        "object-curly-spacing": 0, // http://eslint.org/docs/rules/object-curly-spacing
        "lines-between-class-members": [1, "always"], // http://eslint.org/docs/rules/lines-between-class-members
        "linebreak-style": 0, // http://eslint.org/docs/rules/linebreak-style
        "max-len": 0, // http://eslint.org/docs/rules/max-len
        "no-plusplus": [1, { // http://eslint.org/docs/rules/no-plusplus
            "allowForLoopAfterthoughts": true
        }],
        "import/prefer-default-export": 0, // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md

        /**
         * JSX style
         */
        "jsx-quotes": [2, "prefer-double"], // https://eslint.org/docs/rules/jsx-quotes
        "jsx-a11y/alt-text": [1, { // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
            "elements": ["img"]
        }],
        "jsx-a11y/no-static-element-interactions": 0, // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
        "jsx-a11y/click-events-have-key-events": 0, // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
        "react/display-name": 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
        "react/prop-types": 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        "react/forbid-prop-types": 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
        "react/jsx-boolean-value": 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        // was removed
        // "react/jsx-quotes": [2, "double"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-quotes.md
        "react/jsx-sort-props": 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
        "react/jsx-sort-prop-types": 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md
        "react/jsx-uses-react": 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        "react/jsx-uses-vars": 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        "react/jsx-indent": [2, 4], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        "react/jsx-indent-props": [2, 4], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        "react/jsx-one-expression-per-line": 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
        "react/jsx-filename-extension": [2, { // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
            "extensions": [".js", ".jsx"]
        }],
        "react/no-did-mount-set-state": [2, "disallow-in-func"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
        "react/no-did-update-set-state": 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
        "react/no-multi-comp": 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
        "react/no-unknown-property": 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
        // "react/prop-types": 1, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        "react/react-in-jsx-scope": 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        "react/self-closing-comp": 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        "react/jsx-wrap-multilines": [1, { // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
            "declaration": "parens-new-line",
            "assignment": "parens-new-line",
            "return": "parens-new-line",
            "arrow": "parens-new-line",
            "condition": "parens-new-line",
            "logical": "parens-new-line",
            "prop": "parens-new-line"
        }],
        "react/sort-comp": 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
        "react/jsx-curly-spacing": 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
        "react/jsx-curly-brace-presence": 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
        "react/jsx-tag-spacing": 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
        "react/jsx-closing-bracket-location": 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        "react/destructuring-assignment": 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        "react/jsx-first-prop-new-line": 0,  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
        "react/jsx-max-props-per-line": 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
        "react/jsx-closing-tag-location": 0, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
        "react/prefer-stateless-function": 1, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        "react/no-array-index-key": 0 // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    }
}
