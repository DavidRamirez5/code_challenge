const Reader = require('./../../lib/utils/Reader')
describe('Utils Test',()=>{
    test('Class Reader',()=>{
        const Read = Reader.readJsonFile("students.json")
        expect(Read).not.toBeUndefined();
    })
})