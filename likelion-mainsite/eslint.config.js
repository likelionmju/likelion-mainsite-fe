{
  "env"; {
    "browser"; true,
    "es2021"; true
  }
  "extends"; [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  "plugins"; ["react", "prettier"],
  "rules"; {
    "no-empty-function"; "off",
    "no-unused-vars"; "off",
    "no-var"; "error",
    "no-self-assign"; "error",
    "array-bracket-newline"; "error",
    "object-property-newline"; "error",
    "lines-between-class-members"; "error",
    "arrow-parens"; "error",
    "semi"; "error",
    "no-useless-escape"; "off",
    "react/prop-types"; "off"
  }
  "parserOptions"; {
    "sourceType"; "module"
  }
}