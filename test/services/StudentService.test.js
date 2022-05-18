const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");
describe("Class StudentService",()=>{
    test("Metodo getStudents",()=>{
        const students = Reader.readJsonFile("students.json");
        const getStudents = StudentService.getStudents(students);
        expect(getStudents).not.toBeUndefined();
    });
    test("Metodo getEmailWithCertification",()=>{
        const students = [{"email": "Todd@visualpartnership.xyz","haveCertification": false},{"email": "Sexton@visualpartnership.xyz","haveCertification": true},{"email": "Sharlene@visualpartnership.xyz","haveCertification": true}]
        const certification = StudentService.getEmailsWithCertification(students)
        expect(certification).toEqual(["Sexton@visualpartnership.xyz", "Sharlene@visualpartnership.xyz"]);
        expect(certification).not.toBeUndefined();
        
    })
});