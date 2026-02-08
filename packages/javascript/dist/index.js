import js from "@eslint/js";
const ERROR = 2;
const WARNING = 1;
const OFF = 0;
// Some basic Eslint rules
export default {
    name: "aires-javascript-rules",
    rules: {
        ...js.configs.recommended.rules,
        "no-empty": [ERROR, { allowEmptyCatch: true }],
        "no-unused-vars": [
            ERROR,
            {
                args: "none",
            },
        ],
        "prefer-const": OFF,
        "no-debugger": OFF,
        "no-irregular-whitespace": WARNING,
        "no-regex-spaces": WARNING,
        "no-var": ERROR,
        "no-eval": ERROR,
        "no-implied-eval": ERROR,
        "prefer-template": WARNING,
    },
};
