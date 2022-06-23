
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','423'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','951'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','297'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','b48'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','ec1'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','af9'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','bbc'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','bca'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','1cf'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','497'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','d88'),
  exact: true,
},
{
  path: '/app',
  component: ComponentCreator('/app','a85'),
  exact: true,
},
{
  path: '/architecture/engine',
  component: ComponentCreator('/architecture/engine','b43'),
  exact: true,
},
{
  path: '/architecture/overview',
  component: ComponentCreator('/architecture/overview','795'),
  exact: true,
},
{
  path: '/contributors-guide/contributing',
  component: ComponentCreator('/contributors-guide/contributing','966'),
  exact: true,
},
{
  path: '/contributors-guide/getinvolved',
  component: ComponentCreator('/contributors-guide/getinvolved','20d'),
  exact: true,
},
{
  path: '/contributors-guide/reportingbugs',
  component: ComponentCreator('/contributors-guide/reportingbugs','788'),
  exact: true,
},
{
  path: '/developer-guide/developers',
  component: ComponentCreator('/developer-guide/developers','420'),
  exact: true,
},
{
  path: '/developer-guide/on-premises-demo',
  component: ComponentCreator('/developer-guide/on-premises-demo','9a9'),
  exact: true,
},
{
  path: '/docguide',
  component: ComponentCreator('/docguide','dfe'),
  exact: true,
},
{
  path: '/introduction/itl',
  component: ComponentCreator('/introduction/itl','35c'),
  exact: true,
},
{
  path: '/landing',
  component: ComponentCreator('/landing','7ab'),
  exact: true,
},
{
  path: '/manual/commands',
  component: ComponentCreator('/manual/commands','fb4'),
  exact: true,
},
{
  path: '/manual/intro',
  component: ComponentCreator('/manual/intro','978'),
  exact: true,
},
{
  path: '/manual/livesimulation',
  component: ComponentCreator('/manual/livesimulation','0e7'),
  exact: true,
},
{
  path: '/manual/tutorials',
  component: ComponentCreator('/manual/tutorials','564'),
  exact: true,
},
{
  path: '/manual/virtualsimulation',
  component: ComponentCreator('/manual/virtualsimulation','f42'),
  exact: true,
},
{
  path: '/suppliers',
  component: ComponentCreator('/suppliers','fe8'),
  exact: true,
},
{
  path: '/usecases/scenarios',
  component: ComponentCreator('/usecases/scenarios','6e5'),
  exact: true,
},
{
  path: '/usecases/scenarioslist',
  component: ComponentCreator('/usecases/scenarioslist','2b4'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
