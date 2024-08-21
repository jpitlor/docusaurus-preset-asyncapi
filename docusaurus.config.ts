import {themes as prismThemes} from 'prism-react-renderer';
import {Config} from '@docusaurus/types';

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@jpitlor/docusaurus-preset-asyncapi',
      {
        specs: [
          {
            spec: './docs/api/asyncapi.yml',
            route: '/api',
          }
        ],
        config: {
          show: {
            sidebar: true,
          },
        },
      },
    ],
  ],
  plugins: [
    '@docusaurus/theme-classic',
    '@docusaurus/plugin-debug',
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/api', label: 'Async API', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
