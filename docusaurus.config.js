// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
module.exports = {
    title: 'Token Project',
    tagline: '',
    url: "https://gsmainclusivetechlab.github.io",
    baseUrl: "/",
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'gsmainclusivetechlab', // Usually your GitHub org/user name.
    projectName: 'token-docs', // Usually your repo name.
    themeConfig: {
        prism: {
            additionalLanguages: ['properties', 'ini'],
        },
        navbar: {
            title: 'TOKENISATION PROJECT',
        },
        footer: {
            style: 'dark',

            copyright: `Copyright © 2023 GSMA. All rights reserved.`,
        },
        announcementBar: {
            id: 'archive_notice',
            content:
                'This project has been archived as of the 31st of March 2024. Please contact inclusivetechlab@gsma.com for more information.',
            backgroundColor: '#EBDDAD',
            textColor: '#000000',
            isCloseable: false,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    remarkPlugins: [require('mdx-mermaid')],
                    sidebarPath: require.resolve('./src/frontend/sidebars.js'),
                    routeBasePath: '/',
                    // editUrl:
                    //     'https://github.com/gsmainclusivetechlab/bilt-voice/tree/docs',
                },
                theme: {
                    customCss: require.resolve('./src/frontend/custom.css'),
                },
            },
        ],
    ],
    plugins: [path.resolve(__dirname, 'src/frontend/webpack.js')],
};
