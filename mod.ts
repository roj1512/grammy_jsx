import type { User } from "https://lib.deno.dev/x/grammy@1/types.ts";
import {
  ComponentChildren,
  Fragment,
  h,
  JSX,
} from "https://esm.sh/preact@10.11.3";
import { renderToString } from "https://esm.sh/*preact-render-to-string@5.2.6";

export function Bold({ children }: { children: ComponentChildren }) {
  return h("b", null, children);
}

export function Italic({ children }: { children: ComponentChildren }) {
  return h("i", null, children);
}

export function Underline({ children }: { children: ComponentChildren }) {
  return h("u", null, children);
}

export function Strikethrough({ children }: { children: ComponentChildren }) {
  return h("s", null, children);
}

export function Spoiler({ children }: { children: ComponentChildren }) {
  return h("span", { class: "tg-spoiler" }, children);
}

export function Code({ children }: { children: ComponentChildren }) {
  return h("code", null, children);
}

export function Pre(
  { language, children }: { language?: string; children: ComponentChildren },
) {
  return (
    h(
      "pre",
      null,
      language
        ? h("code", { class: `language-${language}`, children })
        : children,
    )
  );
}

export function Link(
  { to, children }: { to: string; children: ComponentChildren },
) {
  return h("a", { href: to }, children);
}

export function Mention(
  { user, children }: { user: User | number; children?: ComponentChildren },
) {
  return (
    h(
      Link,
      {
        to: `tg://user?id=${typeof user === "number" ? user : user.id}`,
        children: children ?? (typeof user === "number" ? user : h(
          Fragment,
          null,
          user.first_name,
          user.last_name && (" " + user.last_name),
        )),
      },
    )
  );
}

export function Linebreak() {
  return h(Fragment, null, "\n");
}

export function Text({ children }: { children: ComponentChildren }) {
  return h(Fragment, null, children);
}

export function render(component: JSX.Element) {
  const r = renderToString(component);
  console.log(r);
  return r;
}

export { render as r };
