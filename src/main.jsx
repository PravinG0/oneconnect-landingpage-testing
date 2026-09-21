import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Two complete designs share this entry point and the same copy deck
 * (src/data/siteContent.js):
 *
 *   /            -> the light 3D-spatial design in src/
 *   /design2     -> the dark editorial design in "design 2/"
 *
 * Only the active design's stylesheet is loaded, so the two never collide.
 */
const path = window.location.pathname.replace(/\/+$/, '');
const isDesign2 = path.endsWith('/design2') || window.location.hash.startsWith('#/design2');

const root = ReactDOM.createRoot(document.getElementById('root'));

const load = isDesign2
  ? import('../design 2/design2.css').then(() => import('../design 2/Design2App.jsx'))
  : import('./index.css').then(() => import('./App.jsx'));

load.then((module) => {
  const Design = module.default;
  root.render(
    <React.StrictMode>
      <Design />
    </React.StrictMode>
  );
});
