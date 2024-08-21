import React from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { usePluginData } from "@docusaurus/useGlobalData";
import AsyncApiComponent, { ConfigInterface } from "@asyncapi/react-component";

import "@asyncapi/react-component/styles/default.css";

interface PluginData {
  asyncapiSpec?: string;
}

interface AsyncApiDocProps {
  config: Partial<ConfigInterface>;
  // TODO: refactor to omit knowledge of plugin in theme.
  plugin: {
    id: string;
    themeId: string;
    title?: string;
    description?: string;
  };
}

export default function AsyncApiDoc({ config, plugin }: AsyncApiDocProps) {
  const title = plugin.title || "Async API Docs";
  const description = plugin.description || "Async API Reference Docs for the API";
  const pluginData = usePluginData("docusaurus-plugin-asyncapi", plugin.id) as PluginData;
  const asyncapiSpec = pluginData.asyncapiSpec;

  return (
    <Layout title={title} description={description}>
      <AsyncApiComponent schema={asyncapiSpec} config={config} />
    </Layout>
  );
}
