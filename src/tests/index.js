
import globals from './globals';
import tagHandler from '../';

tagHandler('script', {'type': {'application/es2015': es2015Handler}});
tagHandler('script', {'type': {'mathbox/jsx': mathboxJsxHandler}});

function es2015Handler(element) {
  console.log('es2015Handler', element.innerHTML);
}

function mathboxJsxHandler(element) {
  console.log('mathbox/jsx handler!', element.innerHTML);
}