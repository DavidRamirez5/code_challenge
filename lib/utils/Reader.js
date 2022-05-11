const fs = require("fs");
const { builtinModules } = require("module");

class Reader{
    static readJsonFile(filepath){
        const data = fs.readFileSync(filepath);
        const dataJson= JSON.parse(data);
        return dataJson;
    }
}


module.exports = Reader;