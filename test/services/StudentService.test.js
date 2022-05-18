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
    test("Metodo studentCredits",()=>{
        const students =[{"name": "Warren","credits": 508},{"name": "Lucinda","credits": 677},{"name": "Fuentes","credits": 210}];
        const credits = StudentService.studentCredits(students,500)
        expect(credits).not.toBeUndefined();
        expect(credits).toEqual([{"name": "Warren","credits": 508},{"name": "Lucinda","credits": 677}])
    })
});