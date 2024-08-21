# @jpitlor/docusaurus-preset-asyncapi

AsyncAPI integration for Docusaurus V3.

## Installation

```bash
npm install @jpitlor/docusaurus-preset-asyncapi
```

## Usage

```js
// docusaurus.config.ts

const config = {
  presets: [
    [
      "@jpitlor/docusaurus-preset-asyncapi",
      {
        specs: [
          {
            spec: "./path/to/asyncapi.yml",
            route: "/route/on/website",
          },
        ],
        // See defaults for ConfigInterface at:
        // https://github.com/asyncapi/asyncapi-react/blob/master/library/src/config/default.ts
        config: {
          show: {
            sidebar: true,
          },
        },
      },
    ],
  ],
}

module.exports = config;
```
