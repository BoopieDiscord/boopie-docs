module.exports = {
  title: 'Boopie Docs',
  tagline: 'Docs for the discord bot Boopie. A bot to control your whole server singlehandedly.',
  url: 'https://YellowBanana508.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'YellowBanana508', // Usually your GitHub org/user name.
  projectName: 'boopie-docs', // Usually your repo name.
  plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
    },
    navbar: {
      title: 'Boopie',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Boopie Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/YellowBanana508/boopie-docs',
          label: 'GitHub',
          position: 'right',
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
              label: 'About',
              to: '/docs/',
            },
            {
              label: 'Links',
              to: 'docs/links',
            },
          ],
        },
        {
          title: 'Guide',
          items: [
            {
              label: 'Automod',
              to: '/docs/automod',
            },
            {
              label: 'Tags',
              href: '/docs/tags',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Support',
              href: 'https://discord.gg/FAtJTcNsvT',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/YellowBanana508/boopie-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Boopie, a bot made by YellowBanana with ❤️`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/YellowBanana508/boopie-docs/edit/main/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/YellowBanana508/boopie-docs/edit/main/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
