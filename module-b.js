

const LoaderFactory = require('./factory');

class ModuleB {


    static foo(){
        let loader = LoaderFactory.getLoader(1);
        loader.name = "mobule-b assigned";
    }
}

module.exports = ModuleB;