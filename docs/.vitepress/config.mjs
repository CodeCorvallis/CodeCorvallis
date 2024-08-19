import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Code Corvallis",
  description:
    "Join us at Code Corvallis, where programmers, coders, and software engineers in Corvallis come together to connect, share, and learn.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Events", link: "/events" },
      { text: "Submit Proposal", link: "/submit-proposal" },
      { text: "Community", link: "/community" },
      { text: "Local Tech", link: "/local-tech" },
      { text: "Contact", link: "/contact" },
    ],
    sidebar: [
      {
        text: "Pages",
        items: [
          { text: "Home", link: "/" },
          { text: "Events", link: "/events" },
          { text: "Submit Proposal", link: "/submit-proposal" },
          { text: "Community", link: "/community" },
          { text: "Local Tech", link: "/local-tech" },
          { text: "Contact", link: "/contact" },
        ],
      },
    ],
    socialLinks: [
      { icon: "discord", link: "https://discord.gg/tau2vHZ8Tx" },
      // Add your YouTube or other social media links here
      {
        icon: "github",
        link: "https://github.com/CodeCorvallis/CodeCorvallis",
      },
    ],
    footer: {
      copyright: "Copyright © 2024 Code Corvallis",
    },
  },
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
  ],
  transformHead({ siteConfig, pageData }) {
    const pageTitle = pageData.title || siteConfig.title;
    const pageDescription = pageData.description || siteConfig.description;
    const tags = pageData.frontmatter.tags || [];
    const pageUrl = `https://codecorvallis.com/${pageData.relativePath
      .replace(/index\.md$/, "")
      .replace(/\.md$/, ".html")}`;

    // Generate keywords meta tags from tags array
    const tagMetaTags =
      tags.length > 0
        ? [
            {
              name: "keywords",
              content: tags.join(", "),
            },
          ]
        : [];

    return [
      // Title and description
      ["meta", { name: "description", content: pageDescription }],

      // Open Graph Tags
      ["meta", { property: "og:title", content: pageTitle }],
      ["meta", { property: "og:description", content: pageDescription }],
      ["meta", { property: "og:url", content: pageUrl }],
      ["meta", { property: "og:type", content: "website" }],

      // Twitter Card Tags
      ["meta", { name: "twitter:title", content: pageTitle }],
      ["meta", { name: "twitter:description", content: pageDescription }],
      ["meta", { name: "twitter:card", content: "summary_large_image" }],

      // Keywords (if any)
      ...tagMetaTags.map((tag) => ["meta", tag]),

      // Canonical URL
      ["link", { rel: "canonical", href: pageUrl }],

      // Robots tag
      ["meta", { name: "robots", content: "index, follow" }],
    ];
  },
});
