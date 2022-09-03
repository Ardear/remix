import type { MetaFunction } from "@remix-run/node"; // or cloudflare/deno
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Index from ".";

//   import globalStylesheetUrl from "./global-styles.css";

//   export const links: LinksFunction = () => {
//     return [{ rel: "stylesheet", href: globalStylesheetUrl }];
//   };

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "My Amazing App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Index />

        {/* Manages scroll position for client-side transitions */}
        {/* If you use a nonce-based content security policy for scripts, you must provide the `nonce` prop. Otherwise, omit the nonce prop as shown here. */}
        <ScrollRestoration />

        {/* Script tags go here */}
        <Scripts />

        {/* Sets up automatic reload when you change code */}
        {/* and only does anything during development */}
        <LiveReload />
      </body>
    </html>
  );
}
