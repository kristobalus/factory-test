

const Loader = require('./loader');

const loaders = new Map();

module.exports.getLoader = function(loaderId){

    let loader = loaders.get(loaderId);

    if (!loader){
        loader = new Loader(loaderId);
        loaders.set(loaderId, loader);
    }

    return loader;
}