# @aries/eslint-rules-javascript

Collect some eslint rules that I frequently use.

## Installation

```bash
npm install -D @aries/eslint-rules-javascript
```

```bash
pnpm add -D @aries/eslint-rules-javascript
```

```bash
yarn add -D @aries/eslint-rules-javascript
```

## Usage

```typescript
// eslint.config.ts
import javascriptConfig from "@aries/eslint-rules-javascript"
import { defineConfig } from "eslint"

export default defineConfig([
	javascriptConfig
])
```

## Notes

⚠️ **This package is designed to be used in build tool environments (webpack/vite/rollup).**

It does not support direct execution in Node.js runtime due to module resolution configuration.

## License

MIT