

const LoaderFactory = require('./factory');


class ModuleA {

    static foo() {
        let loader = LoaderFactory.getLoader(1);
        loader.name = "mobule-a assigned";
    }
}

module.exports = ModuleA;