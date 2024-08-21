# docusaurus-asyncapi

AsyncAPI integration for Docusaurus V3.

## Installation

```bash
npm install docusaurus-preset-asyncapi
```

## Usage

```js
// docusaurus.config.ts

const config = {
  presets: [
    [
      "docusaurus-preset-asyncapi",
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

### Local Development

```bash
yarn workspaces run build && yarn start
```

This builds the packages and starts the local docusaurus server.
TODO: Watch and build source files.
