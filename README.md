# grammy_jsx

## Usage

#### `bot.tsx`

```tsx
// ...
import {
  Bold,
  Linebreak,
  Mention,
  r,
  Text,
  Spoiler,
} from "https://ghc.deno.dev/roj1512/grammy_jsx@main/mod.ts";

// ...

bot.on("message", (ctx) => ctx.reply(r(<Text></Text>), { parse_mode: "HTML" }));

bot.start();
```

#### `deno.jsonc`

```json
{
  // ...
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "preact"
  },
  "imports": {
    // ...
    "preact": "https://esm.sh/preact@10.11.3",
    "preact/": "https://esm.sh/preact@10.11.3/"
  }
  // ...
}
```
