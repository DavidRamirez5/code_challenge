const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");
describe("Class StudentService",()=>{
    test("Metodo getStudents",()=>{
        const students = Reader.readJsonFile("students.json");
        const getStudents = StudentService.getStudents(students);
        expect(getStudents).not.toBeUndefined();
    });
});