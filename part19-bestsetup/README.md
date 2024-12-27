# part19-bestsetup

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.42. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

panduan

```
mkdir example_proj
cd example_proj
bun init
bun add -d eslint prettier husky lint-staged eslint-config-prettier eslint-plugin-prettier
bun add -d typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
bun run eslint --init

---- tambahkan pada file package.json
{
  "lint-staged": {
    "*.{js,ts,jsx,tsx}": "eslint --fix"
  }
}

---- tambahkan juga script pada file package.json
{
   "scripts": {
    "lint": "eslint .",
    "format": "prettier --write .",
    "check-types": "bunx tsc --noEmit --pretty",
    "check-lint": "bunx eslint .",
    "check-format": "npx prettier . --check",
    "build": "bun build index.ts --compile --minify --sourcemap --outfile dist/restapi",
    "prepare": "husky"
  }
}

-- tambahkan .prettierrc
{
  "singleQuote": false,
  "semi": true,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2,
  "endOfLine": "auto"
}

-- tambahkan .prettierignore
node_modules
dist
build
*.min.js

-- tambahykan .editorconfig
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

--- config husky
bunx husky init

-- cek file eslint.config.js samakan config yang ada disana
```
