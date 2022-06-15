export default {
  "title": "Token Project",
  "tagline": "",
  "url": "https://gsmainclusivetechlab.github.io",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "gsmainclusivetechlab",
  "projectName": "token-docs",
  "themeConfig": {
    "prism": {
      "additionalLanguages": [
        "properties",
        "ini"
      ]
    },
    "navbar": {
      "title": "TOKENISATION PROJECT",
      "hideOnScroll": false,
      "items": []
    },
    "footer": {
      "style": "dark",
      "copyright": "Copyright © 2022 GSMA. All rights reserved.",
      "links": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "remarkPlugins": [
            null
          ],
          "sidebarPath": "/Users/eanjos/Documents/Dev/token/token-docs/src/frontend/sidebars.js",
          "routeBasePath": "/"
        },
        "theme": {
          "customCss": "/Users/eanjos/Documents/Dev/token/token-docs/src/frontend/custom.css"
        }
      }
    ]
  ],
  "plugins": [
    "/Users/eanjos/Documents/Dev/token/token-docs/src/frontend/webpack.js"
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};