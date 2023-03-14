<div align="center">
<img width="800" alt="Screenshot 2023-03-10 at 5 21 42 pm" src="https://user-images.githubusercontent.com/33971845/224244436-11887ef8-66f5-4800-92e0-4c25d221a7a6.png">
<p>The <b>Ask Relevance widget</b> lets you embed an AI support assistant into your app in one line of code. ⚡️🔮🧪</p> 
</div>

## Installation

To integrate Ask Relevance into your app, include this snippet in your HTML head element.

```html
<script
  src="https://cdn.jsdelivr.net/gh/relevanceai/ask-relevance-widget/dist/bundle.min.js"
  config="BASE64_CONFIG"
  defer
/>
```

Replace `BASE64_CONFIG` with a valid JSON object [parsed to a Base64 string](https://codebeautify.org/json-to-base64-converter). The config is as follows:

```ts
{
  /** URL to query for answers */
  url: string;
  /** Field in dataset to search on */
  field: string;
  /** Vector field in dataset to search on */
  vector_field: string;
  /** Field in dataset containing reference URLs */
  reference_url_field: string;
  /** Field in dataset containing reference titles */
  reference_title_field: string;
  /** Authentication header for API requests */
  auth_header: string;
}
```

## Development

[Bun](https://bun.sh) is used for package management and running scripts.

```shell
# Install Bun if you don't have it:
curl -fsSL https://bun.sh/install | bash

# Install dependencies
bun i

# Start local dev server
bun run dev
```

[Solid.js](https://www.solidjs.com/) is used as the framework due to its small bundle size and excellent performance.

[Trunk](https://trunk.io/) is used for formatting and linting. You can either:

- install the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=Trunk.io) which handles setup and automatic format/lint automatically
- use the executable at the repo root (`./trunk`)

Check the [docs](https://docs.trunk.io/docs/check-cli) for the CLI API. 🧸❇️😨

# Releases

When a new commit is pushed to `main`, a release is cut and the binaries committed to `main` automatically via GitHub Actions. ❇️
