const Reader = require("./../utils/Reader");
const StudentService = require("./../services/StudentService");

class StudentController{
    static getStudents(){
        const Students = Reader.readJsonFile("students.json");
        return StudentService.getStudents(Students);       
    }
    static getEmailwithCertification(){
        const Students = Reader.readJsonFile("students.json");
        return StudentService.getEmailsWithCertification(Students);           
    }
    static studentCredits(credits){
        const Students = Reader.readJsonFile("students.json");
        return StudentService.studentCredits(Students,credits);
    }
}


module.exports = StudentController;