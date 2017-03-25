

const ModuleA = require('./module-a');
const ModuleB = require('./module-b');
const LoaderFactory = require('./factory');

ModuleA.foo();
let loader = LoaderFactory.getLoader(1);
console.log(loader);

ModuleB.foo();
loader = LoaderFactory.getLoader(1);
console.log(loader);

ModuleB.foo();
loader = LoaderFactory.getLoader(1);
console.log(loader);