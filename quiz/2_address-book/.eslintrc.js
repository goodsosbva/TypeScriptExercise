module.exports = {
  root: true,
  // 전역변수 환경 설정
  env: {
    browser: true,
    jest: true,
    node: true,
  },

  // npm을 통해 설치한 외부 ESLint 설정 등록 (eslint-config-{name}으로 설치)
  extends: [
    "plugin:@typescript-eslint/eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  // parser 등록
  parser: "@typescript-eslint/parser",

  // 사용자 규칙 추가할 플러그인 (eslint-plugin-{name}으로 설치)
  plugins: ["@typescript-eslint", "prettier"],

  // 플러그인을 통해 설치한 것 외에 규칙 설정
  rules: {
    mode: "auto",
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        backetSpacing: true,
        arrowParens: "avoid",
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "prefer-const": "off",
  },
  parserOptions: {
    parswer: "@typescript-eslint/parser",
  },
};
