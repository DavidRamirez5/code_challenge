const StudentController = require("./../../lib/controllers/StudentController");

describe("Class StudentController",()=> {
    test("1. Metodo getStudents",()=>{
        const Students = StudentController.getStudents();
        expect(Students).not.toBeUndefined();
    });
    test("2.Metodo getEmailWithCertification",()=>{
        const haveCertification = StudentController.getEmailwithCertification();
        expect(haveCertification).not.toBeUndefined();
    })
    test("3. Metodo studentCredits",()=>{
        const credits = StudentController.studentCredits(500);
        expect(credits).not.toBeUndefined();
        expect(credits.length).toBe(27);

    })
});