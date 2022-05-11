const StudentController = require('./../../lib/controllers/StudentController')

describe('Class StudentController',()=> {
    test('1. Metodo getStudents',()=>{
        const Students = StudentController.getStudents();
        expect(Students).not.toBeUndefined();
    })
})