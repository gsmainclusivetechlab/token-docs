
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/blog',
  component: ComponentCreator('/blog','6a7'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','0c5'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','386'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','cfb'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','94a'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','aae'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','11b'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','538'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','8bd'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','93f'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','38e'),
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
  path: '/contributors-guide/reportingbugs',
  component: ComponentCreator('/contributors-guide/reportingbugs','788'),
  exact: true,
},
{
  path: '/docguide',
  component: ComponentCreator('/docguide','82d'),
  exact: true,
},
{
  path: '/installation/introduction',
  component: ComponentCreator('/installation/introduction','aae'),
  exact: true,
},
{
  path: '/itl',
  component: ComponentCreator('/itl','95a'),
  exact: true,
},
{
  path: '/landing',
  component: ComponentCreator('/landing','7ab'),
  exact: true,
},
{
  path: '/manual/quickguide',
  component: ComponentCreator('/manual/quickguide','df0'),
  exact: true,
},
{
  path: '/manual/tutorials',
  component: ComponentCreator('/manual/tutorials','564'),
  exact: true,
},
{
  path: '/manual/usecases',
  component: ComponentCreator('/manual/usecases','37d'),
  exact: true,
},
{
  path: '/suppliers',
  component: ComponentCreator('/suppliers','fe8'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
