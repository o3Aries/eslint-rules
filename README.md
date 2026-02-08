# @aries/eslint-rules

Collect some eslint rules that I frequently use.

## Installation

```bash
npm install -D @aries/eslint-rules
```

```bash
pnpm add -D @aries/eslint-rules
```

```bash
yarn add -D @aries/eslint-rules
```

## Usage

```typescript
// eslint.config.ts
import { base } from "@aries/eslint-rules"
import { defineConfig } from "eslint"

export default defineConfig([
	{
    extends
  }
])
```

## Notes

⚠️ **This package is designed to be used in build tool environments (webpack/vite/rollup).**

It does not support direct execution in Node.js runtime due to module resolution configuration.

## License

MIT