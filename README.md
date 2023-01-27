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

bot.on("message", (ctx) =>
  ctx.reply(
    r(
      <Text>
        Hey,{" "}
        <Bold>
          <Mention user={ctx.from} />
        </Bold>
        , how are you?
        <Linebreak />
        <Linebreak />
        <Spoiler>
          <Italic>This is a spoiler!</Italic>
        </Spoiler>
      </Text>
    ),
    { parse_mode: "HTML" }
  )
);

bot.start();
```

#### `deno.jsonc`

```jsonc
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
