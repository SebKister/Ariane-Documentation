import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ariane User Manual',
  tagline: 'User Guide for Ariane cave survey software',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://manuals.arianesline.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/ariane/',

  organizationName: 'SebKister',
  projectName: 'Ariane-Documentation',

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: [
    '@docusaurus/theme-mermaid',
    // Offline/local full-text search — builds the index at build time and ships
    // it with the static site (no Algolia/third-party service). The search box
    // appears in the navbar automatically.
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true, // hash the index filename for long-term caching
        indexBlog: false, // blog is disabled in the preset
        docsRouteBasePath: '/docs', // docs served at /docs (preset default)
      },
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/SebKister/Ariane-Documentation/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/arianesline-logo-social.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Ariane',
      logo: {
        alt: 'Ariane Logo',
        src: 'img/ariane-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'User Manual',
        },
        {
          // Generated at deploy time into build/pdf/, so it does not exist during
          // `npm run build`. Linked by absolute URL so onBrokenLinks: 'throw'
          // does not fail the build over a file the build itself cannot produce.
          href: 'https://manuals.arianesline.com/ariane/pdf/Ariane-UserManual-latest.pdf',
          position: 'right',
          label: 'PDF',
        },
        {
          href: 'https://www.arianesline.com/ariane/',
          position: 'right',
          label: "Ariane's Line",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'User Manual',
              to: '/docs/Starter',
            },
            {
              label: 'PDF manual',
              href: 'https://manuals.arianesline.com/ariane/pdf/Ariane-UserManual-latest.pdf',
            },
          ],
        },
        {
          title: 'Other manuals',
          items: [
            {
              label: 'MNemo v2',
              href: 'https://manuals.arianesline.com/mnemo/',
            },
            {
              label: 'JedEye',
              href: 'https://manuals.arianesline.com/jedeye/',
            },
          ],
        },
        {
          title: 'Web',
          items: [
            {
              label: "Ariane's Line",
              href: 'https://www.arianesline.com/ariane/',
            },
            {
              label: 'Downloads',
              href: 'https://github.com/Ariane-s-Line/Ariane-Release/releases/latest',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sebastien Kister - Ariane's Line - All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
