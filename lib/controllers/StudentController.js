const Reader = require('./../utils/Reader')
const StudentService = require('./../services/StudentService')

class StudentController{
    static getStudents(){
        const Students = Reader.readJsonFile("students.json");
        return StudentService.getStudents(Students);       
    }
}


module.exports = StudentController;