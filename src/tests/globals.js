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