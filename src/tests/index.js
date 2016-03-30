GLOBAL.window = {addEventListener(name, fn) { setTimeout(() => fn(name), 500); }};
// GLOBAL.window = {addEventListener: (name, fn) => setTimeout(() => fn(name), 500)};

GLOBAL.document = {getElementsByTagName(name) { return ({
  'script': [{
    'type': 'application/es2015',
    'innerHTML': `console.log('es2015 script');`
  },{
    'type': 'mathbox/jsx',
    'innerHTML': '<root></root>'
  }]
})[name]; } };

import tagHandler from '../';

tagHandler('script', {'type': {'application/es2015': es2015Handler}});
tagHandler('script', {'type': {'mathbox/jsx': mathboxJsxHandler}});

function es2015Handler(element) {
  console.log('es2015Handler', element.innerHTML);
}

function mathboxJsxHandler(element) {
  console.log('mathbox/jsx handler!', element.innerHTML);
}