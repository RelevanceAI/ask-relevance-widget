<div align="center">
<img width="800" alt="Screenshot of the Ask Relevance widget embedded in an application" src="https://user-images.githubusercontent.com/33971845/224244436-11887ef8-66f5-4800-92e0-4c25d221a7a6.png">
<p>The <b>Ask Relevance widget</b> lets you embed an AI support assistant into your app in one line of code. ⚡️🔮🧪</p> 
</div>

## Looking to embed Ask Relevance in your app?

[Create a Relevance AI account](https://cloud.relevanceai.com), then follow the instructions to setup Ask Relevance for your data. You'll be able to preview Ask Relevance and copy the snippet needed to install the widget. If you're running into problems, [reach out to support](https://docs.relevanceai.com/page/support) and we'll get back to you promptly!

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

The widget is built with [Solid.js](https://www.solidjs.com/).

[Trunk](https://trunk.io/) is used for formatting and linting. You can either:

- install the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=Trunk.io) which handles setup and automatic format/lint automatically
- use the executable at the repo root (`./trunk`)

Check the [docs](https://docs.trunk.io/docs/check-cli) for CLI instructions.

## Releases

When a PR is opened into `main`, a binary is built automatically. When the PR is merged into `main`, we commit the binary to the repo and cut a release automatically.
