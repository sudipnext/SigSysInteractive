import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0fe'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'a20'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c67'),
            routes: [
              {
                path: '/docs/category/continuous-time-linear-invariant-systems',
                component: ComponentCreator('/docs/category/continuous-time-linear-invariant-systems', '9be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/continuous-time-signal-systems',
                component: ComponentCreator('/docs/category/continuous-time-signal-systems', '132'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/discrete-time-linear-invariant-systems',
                component: ComponentCreator('/docs/category/discrete-time-linear-invariant-systems', 'c74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/discrete-time-signal-systems',
                component: ComponentCreator('/docs/category/discrete-time-signal-systems', '729'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/fourier-series',
                component: ComponentCreator('/docs/category/fourier-series', '4ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/fourier-transform',
                component: ComponentCreator('/docs/category/fourier-transform', 'd88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/introduction',
                component: ComponentCreator('/docs/category/introduction', 'f51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/laplace-transform',
                component: ComponentCreator('/docs/category/laplace-transform', '1e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/z-transform',
                component: ComponentCreator('/docs/category/z-transform', '539'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/continuous-time-linear-invariant-systems/intro',
                component: ComponentCreator('/docs/continuous-time-linear-invariant-systems/intro', 'c99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/continuous-time-signal-systems/intro',
                component: ComponentCreator('/docs/continuous-time-signal-systems/intro', '68c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/discrete-time-linear-invariant-systems/intro',
                component: ComponentCreator('/docs/discrete-time-linear-invariant-systems/intro', '493'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/discrete-time-signal-systems/intro',
                component: ComponentCreator('/docs/discrete-time-signal-systems/intro', '8b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fourier series/intro',
                component: ComponentCreator('/docs/fourier series/intro', 'b88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fourier-transform/intro',
                component: ComponentCreator('/docs/fourier-transform/intro', 'e6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/1.1.signals/intro',
                component: ComponentCreator('/docs/introduction/1.1.signals/intro', '27b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/1.2.systems/intro',
                component: ComponentCreator('/docs/introduction/1.2.systems/intro', '8b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/intro',
                component: ComponentCreator('/docs/introduction/intro', '747'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/laplace-transform/intro',
                component: ComponentCreator('/docs/laplace-transform/intro', 'fd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/references',
                component: ComponentCreator('/docs/references', 'c13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Z-Transform/intro',
                component: ComponentCreator('/docs/Z-Transform/intro', 'd62'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
